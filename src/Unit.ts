import {Dimension, dimensionsEqual, mergeDimensions, multiplyAllExponentsWith, multiplyDimensions} from "./Dimension";
import {BijectiveOperationChain} from "./BijectiveOperation";
import {units} from "./units";
import {getPrefixFactor, Prefix, removePrefixFromName} from "./Prefix";

interface SubUnit {
  unit: Unit;
  exponent: number;
}

export class Unit {

  public name: string;
  public dimension: Dimension;
  public isBase: boolean;
  public baseConverter: BijectiveOperationChain;
  public prefix: Prefix;
  public subUnits?: SubUnit[];

  constructor(name: string, dimension: Dimension, toBase?: BijectiveOperationChain, prefix?: Prefix, subUnits?: SubUnit[]) {
    this.name = name;
    this.dimension = dimension;
    this.subUnits = subUnits;
    this.prefix = prefix ?? null;
    if (toBase && toBase.nameChain.length) {
      this.isBase = false;
      this.baseConverter = toBase.prependMultiplication(getPrefixFactor(prefix));
    } else if (prefix) {
      this.isBase = false;
      this.baseConverter = new BijectiveOperationChain([{operation: 'multiply', parameter: getPrefixFactor(prefix)}]);
    } else {
      this.isBase = true;
      this.baseConverter = new BijectiveOperationChain([]);
    }
  }

  public static fromSubUnits(subUnits: SubUnit[]): Unit {
    if (subUnits.length === 0) throw new Error("Cannot create a unit from an empty list of sub-units.");
    if (subUnits.some(su => !su.unit.baseConverter.isMultiplicationOnly())) throw new Error("Cannot create a unit from a list of sub-units that contain non-multiplicative base converters.");

    const newName = subUnits
      .filter(su => su.exponent !== 0)
      .map(su => {
        if (su.exponent > 0) {
          if (su.exponent === 1) return su.unit.name;
          return `${su.unit.name}^${su.exponent}`;
        } else {
          if (su.exponent === -1) return `per ${su.unit.name}`;
          return `per ${su.unit.name}^${su.exponent}`;
        }
      })
      .join(" ");
    const newDimension = mergeDimensions(subUnits.map(su => multiplyAllExponentsWith(su.unit.dimension, su.exponent)));
    const newBaseConverter = subUnits.reduce(
      (acc, su) => acc.concat(su.unit.baseConverter.raise(su.exponent)!),
      new BijectiveOperationChain([])
    );
    return new Unit(newName, newDimension, newBaseConverter, null, subUnits);
  }

  public withPrefix(prefix: Prefix): Unit {
    return new Unit(
      prefix + removePrefixFromName(this.name, this.prefix),
      this.dimension,
      this.baseConverter.prependMultiplication(getPrefixFactor(prefix)/getPrefixFactor(this.prefix)),
      prefix,
      this.subUnits
    );
  }

  public toBase(value: number): number {
    return this.baseConverter.apply(value);
  };

  public fromBase(value: number): number {
    return this.baseConverter.applyInverse(value);
  }

  public multiplyWith(unit: Unit): Unit {
    const newDimension = multiplyDimensions(this.dimension, unit.dimension);
    const newUnit: Unit = Object.values(units)?.find((u) => dimensionsEqual(u.dimension, newDimension)) ?? new Unit("unknown", newDimension);
    const newBaseConverter = this.baseConverter.concat(unit.baseConverter.inverted());
    this.constructor(newUnit.name, newDimension, newBaseConverter);
    return this;
  }
}