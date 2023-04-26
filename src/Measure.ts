import {dimensionsEqual} from './Dimension';
import {Unit} from './Unit';
import {findEqualUnit} from './utils/findEqualUnit';

export class Measure {

  public value: number;
  public unit: Unit;

  constructor(unit: Unit, value: number) {
    this.value = value;
    this.unit = unit;
  }

  public copy(): Measure {
    return new Measure(this.unit, this.value);
  }

  public baseValue(): number {
    return this.unit.toBase(this.value);
  }

  public setBaseValue(value: number): Measure {
    this.value = this.unit.fromBase(value);
    return this;
  }

  public convertTo(unit: Unit): Measure {
    this.value = unit.fromBase(this.baseValue());
    this.unit = unit;
    return this;
  }

  public add(measure: Measure): Measure {
    if (!dimensionsEqual(this.unit.dimension, measure.unit.dimension)) {
      throw new Error('Cannot add measures of different dimensions.');
    }
    return this.setBaseValue(this.baseValue() + measure.baseValue());
  }

  public subtract(measure: Measure): Measure {
    if (!dimensionsEqual(this.unit.dimension, measure.unit.dimension)) {
      throw new Error('Cannot subtract a measure of a different dimension.');
    }
    return this.setBaseValue(this.baseValue() - measure.baseValue());
  }

  public multiplyWith(measure: Measure): Measure {
    this.value *= measure.value;
    const newUnit = this.unit.multipliedWith(measure.unit);
    this.unit = findEqualUnit(newUnit) || newUnit;
    return this;
  }

  public divideBy(measure: Measure): Measure {
    this.value /= measure.value;
    const newUnit = this.unit.dividedBy(measure.unit);
    this.unit = findEqualUnit(newUnit) || newUnit;
    return this;
  }
}