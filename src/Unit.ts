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
  public baseUnit: Unit;

  constructor(
    name: string,
    dimension: Dimension,
    baseUnit?: Unit,
    toBase?: BijectiveOperationChain,
    prefix?: Prefix,
    subUnits?: SubUnit[]
  ) {
    this.name = name;
    this.dimension = dimension;
    this.baseUnit = baseUnit ?? this;
    this.subUnits = subUnits;
    this.prefix = prefix ?? null;
    if (toBase && toBase.nameChain.length) {
      this.isBase = false;
      this.baseConverter = toBase;
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
    const newBaseUnit = subUnits.some(su => su.unit.baseUnit !== su.unit)
      ? Unit.fromSubUnits(subUnits.map(su => ({unit: su.unit.baseUnit ?? su.unit, exponent: su.exponent})))
      : undefined;
    return new Unit(newName, newDimension, newBaseUnit, newBaseConverter, null, subUnits);
  }

  public withPrefix(prefix: Prefix): Unit {
    return new Unit(
      (prefix || '') + removePrefixFromName(this.name, this.prefix),
      this.dimension,
      this.baseUnit,
      this.baseConverter.prependMultiplication(getPrefixFactor(prefix)/getPrefixFactor(this.prefix)),
      prefix,
      this.subUnits
    );
  }

  public toBase(value: number): number {
    return this.baseConverter.apply(value);
  }

  public fromBase(value: number): number {
    return this.baseConverter.applyInverse(value);
  }

  public multiplyWith(unit: Unit): Unit {
    return Unit.fromSubUnits([{unit: this, exponent: 1}, {unit, exponent: 1}]);
  }
}