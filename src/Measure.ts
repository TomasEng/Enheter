import {Dimension} from "./Dimension";
import {Prefix, prefixes} from "./Prefix";
import {Unit} from "./Unit";

export class Measure {

  private value: number;
  private dimension: Dimension;
  private unit: Unit;
  private baseUnit: Unit;
  private prefix: Prefix;

  constructor(value: number, dimension: Dimension, unit: Unit, baseUnit: Unit, prefix: Prefix = null) {
    this.value = value;
    this.dimension = dimension;
    this.unit = unit;
    this.baseUnit = baseUnit;
    this.prefix = prefix;
  }

  public copy(): Measure {
    return new Measure(this.value, this.dimension, this.unit, this.baseUnit, this.prefix);
  }

  public setValue(value: number): Measure {
    this.value = value;
    return this;
  }

  public getValue(): number {
    return this.value;
  }

  public setUnit(unit: Unit): Measure {
    this.unit = unit;
    return this;
  }

  public getUnit(): Unit {
    return this.unit;
  }

  public setBaseUnit(baseUnit: Unit): Measure {
    this.baseUnit = baseUnit;
    return this;
  }

  public getBaseUnit(): Unit {
    return this.baseUnit;
  }

  public setDimension(dimension: Dimension): Measure {
    this.dimension = dimension;
    return this;
  }

  public getDimension(): Dimension {
    return this.dimension;
  }

  public setPrefix(prefix: Prefix): Measure {
    this.prefix = prefix;
    return this;
  }

  public getPrefix(): Prefix {
    return this.prefix;
  }

  public prefixedValue(prefix: Prefix): number {
    const oldExponent = this.prefix ? prefixes[this.prefix].exponent : 0;
    const newExponent = prefix ? prefixes[prefix].exponent : 0;
    const exponent = oldExponent - newExponent;
    return this.value * Math.pow(10, exponent);
  }

  public unPrefixedValue(): number {
    return this.prefixedValue(null);
  }

  public baseValue(): number {
    return this.unit.toBase(this.unPrefixedValue());
  }

  public switchPrefix(prefix: Prefix): Measure {
    this.value = this.prefixedValue(prefix);
    this.prefix = prefix;
    return this;
  }

  public removePrefix(): Measure {
    return this.switchPrefix(null);
  }

  public convertTo(unit: Unit): Measure {
    this.value = unit.fromBase(this.baseValue());
    this.unit = unit;
    return this;
  }
}