import {Dimension, mergeDimensions, multiplyAllExponentsWith} from "./Dimension";
import {BijectiveOperationChain} from "./BijectiveOperation";
import {getPrefixFactor, Prefix, removePrefixFromName} from "./Prefix";

interface SubUnit {
  unit: Unit;
  exponent: number;
}

export class Unit {

  readonly name: string;
  readonly dimension: Dimension;
  readonly isBase: boolean;
  readonly baseConverter: BijectiveOperationChain;
  readonly prefix: Prefix;
  readonly subUnits?: SubUnit[];
  readonly baseUnit: Unit;

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

  public static fromSubUnits(subUnits: SubUnit[], name?: string): Unit {
    if (subUnits.length === 0) throw new Error("Cannot create a unit from an empty list of sub-units.");
    if (subUnits.some(su => !su.unit.baseConverter.isMultiplicationOnly())) throw new Error("Cannot create a unit from a list of sub-units that contain non-multiplicative base converters.");

    const newName = name ?? subUnits
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

  public withFactor(factor: number, name: string, prefix?: Prefix, subUnits?: SubUnit[]): Unit {
    return new Unit(
      name,
      this.dimension,
      this.baseUnit,
      this.baseConverter.prependMultiplication(factor),
      prefix,
      subUnits
    );
  }

  public toBase(value: number): number {
    return this.baseConverter.apply(value);
  }

  public fromBase(value: number): number {
    return this.baseConverter.applyInverse(value);
  }

  public multipliedWith(unit: Unit, name?: string): Unit {
    return Unit.fromSubUnits([{unit: this, exponent: 1}, {unit, exponent: 1}], name);
  }

  public dividedBy(unit: Unit, name?: string): Unit {
    return Unit.fromSubUnits([{unit: this, exponent: 1}, {unit, exponent: -1}], name);
  }

  public raisedTo(exponent: number, name?: string): Unit {
    return Unit.fromSubUnits([{unit: this, exponent}], name);
  }
}