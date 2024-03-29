import {Dimension, dimensionsEqual, mergeDimensions, multiplyAllExponentsWith} from './Dimension';
import {BijectiveOperationChain} from './BijectiveOperation';
import {getPrefixFactor, Prefix, prefixes, removePrefixFromSymbol} from './Prefix';
import {SubUnit} from './types/SubUnit';
import {mergeSymbols, raisedSymbol, symbolFromSubUnit} from './utils/symbolUtils';

export class Unit<T extends Dimension = Dimension> {

  readonly symbol: string;
  readonly dimension: T;
  readonly isBase: boolean;
  readonly baseConverter: BijectiveOperationChain;
  readonly prefix: Prefix;
  readonly subUnits?: SubUnit[];
  readonly baseUnit: Unit<T>;
  readonly key?: string;

  constructor(
    symbol: string,
    dimension: T,
    baseUnit?: Unit<T>,
    toBase?: BijectiveOperationChain,
    prefix?: Prefix,
    subUnits?: SubUnit[],
    key?: string
  ) {
    this.symbol = symbol;
    this.dimension = dimension;
    this.baseUnit = baseUnit ?? this;
    this.subUnits = subUnits;
    this.prefix = prefix ?? null;
    this.key = key;
    if (toBase && toBase.nameChain.length) {
      this.isBase = false;
      this.baseConverter = toBase;
    } else {
      this.isBase = true;
      this.baseConverter = new BijectiveOperationChain([]);
    }
  }

  public static fromSubUnits(subUnits: SubUnit[], symbol?: string, key?: string): Unit {
    if (subUnits.length === 0) throw new Error('Cannot create a unit from an empty list of sub-units.');
    if (subUnits.some(su => !su.unit.baseConverter.isMultiplicationOnly())) throw new Error('Cannot create a unit from a list of sub-units that contain non-multiplicative base converters.');

    const newSymbol = symbol ?? mergeSymbols(subUnits.map(symbolFromSubUnit));
    const newDimension = mergeDimensions(subUnits.map(su => multiplyAllExponentsWith(su.unit.dimension, su.exponent)));
    const newBaseConverter = subUnits.reduce(
      (acc, su) => acc.concat(su.unit.baseConverter.raise(su.exponent)!),
      new BijectiveOperationChain([])
    );
    const newBaseUnit = subUnits.some(su => su.unit.baseUnit !== su.unit)
      ? Unit.fromSubUnits(subUnits.map(su => ({unit: su.unit.baseUnit ?? su.unit, exponent: su.exponent})))
      : undefined;
    return new Unit(newSymbol, newDimension, newBaseUnit, newBaseConverter, null, subUnits, key);
  }

  public withPrefix(prefix: Prefix, key?: string): Unit<T> {
    return new Unit(
      (prefix && prefixes[prefix].symbol || '') + removePrefixFromSymbol(this.symbol, this.prefix),
      this.dimension,
      this.baseUnit,
      this.baseConverter.prependMultiplication(getPrefixFactor(prefix) / getPrefixFactor(this.prefix)),
      prefix,
      this.subUnits,
      key
    );
  }

  public withFactor(factor: number, symbol: string = '', key?: string, prefix?: Prefix, subUnits?: SubUnit[]): Unit<T> {
    return new Unit(
      symbol,
      this.dimension,
      this.baseUnit,
      this.baseConverter.prependMultiplication(factor),
      prefix,
      subUnits,
      key
    );
  }

  public withOffset(offset: number, symbol: string = '', key?: string, prefix?: Prefix, subUnits?: SubUnit[]): Unit<T> {
    return new Unit(
      symbol,
      this.dimension,
      this.baseUnit,
      this.baseConverter.prependAddition(offset),
      prefix,
      subUnits,
      key
    );
  }

  public toBase(value: number): number {
    return this.baseConverter.apply(value);
  }

  public fromBase(value: number): number {
    return this.baseConverter.applyInverse(value);
  }

  public copy(symbol?: string, key?: string, prefix: Prefix = null): Unit<T> {
    return new Unit(
      symbol ?? this.symbol,
      this.dimension,
      this.baseUnit,
      this.baseConverter,
      prefix,
      undefined,
      key
    );
  }

  public multipliedWith(unit: Unit, symbol?: string, key?: string): Unit {
    return Unit.fromSubUnits([{unit: this, exponent: 1}, {unit, exponent: 1}], symbol, key);
  }

  public dividedBy(unit: Unit, symbol?: string, key?: string): Unit {
    return Unit.fromSubUnits([{unit: this, exponent: 1}, {unit, exponent: -1}], symbol, key);
  }

  public raisedTo(exponent: number, symbol?: string, key?: string): Unit {
    return Unit.fromSubUnits([{unit: this, exponent}], symbol, key);
  }

  public reciprocal(symbol?: string, key?: string): Unit {
    return this.raisedTo(-1, symbol ?? raisedSymbol(this.symbol, -1), key);
  }

  public squared(symbol?: string, key?: string): Unit {
    return this.raisedTo(2, symbol ?? raisedSymbol(this.symbol, 2), key);
  }

  public cubed(symbol?: string, key?: string): Unit {
    return this.raisedTo(3, symbol ?? raisedSymbol(this.symbol, 3), key);
  }

  public equals(other: Unit): boolean {
    return dimensionsEqual(this.dimension, other.dimension)
      && this.baseConverter.equals(other.baseConverter);
  }
}