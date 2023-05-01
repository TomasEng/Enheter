import {dimensionsEqual} from './Dimension';
import {Unit} from './Unit';
import {findEqualUnit} from './utils/findEqualUnit';
import {findUnitsByDimension} from './utils/findUnitsByDimension';
import {precise} from './utils/numberUtils';
import {DimensionName} from './types/DimensionName';
import {UnitName} from './types/UnitName';

export class Measure<D extends DimensionName = DimensionName> {

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
    this.value = precise(this.unit.fromBase(value));
    return this;
  }

  /**
   * Converts the measure to the given unit.
   * @param unit A Unit object with the same dimension as the current unit or a key corresponding to a unit of the same dimension as the current unit.
   * @returns The current measure.
   * @throws An error if the given unit is not of the same dimension as the current unit.
   * @throws An error if the given unit is a key and no unit with the current dimension and the given key was found.
   * @example
   * const measure = length('metre', 1);
   * measure.convertTo('foot'); // Unit given as a key
   * console.log(measure.value, measure.unit.symbol); // Logs "3.280839895013123 ft"
   * measure.convertTo(lengthUnit('metre').withPrefix('centi')); // Unit given as a Unit object
   * console.log(measure.value, measure.unit.symbol); // Logs "100 cm"
   */
  public convertTo(unit: Unit | UnitName<D>): Measure<D> {
    if (typeof unit === 'string') {
      const unitName = unit;
      unit = findUnitsByDimension(this.unit.dimension)?.[unit];
      if (!unit) {
        throw new Error(`No unit with the current dimension and the key "${unitName}" was found.`);
      }
    } else if (!dimensionsEqual(this.unit.dimension, unit.dimension)) {
      throw new Error('Cannot convert a measure to a unit of a different dimension.');
    }
    this.value = precise(unit.fromBase(this.baseValue()));
    this.unit = unit;
    return this;
  }

  public add(measure: Measure): Measure<D> {
    if (!dimensionsEqual(this.unit.dimension, measure.unit.dimension)) {
      throw new Error('Cannot add measures of different dimensions.');
    }
    return this.setBaseValue(this.baseValue() + measure.baseValue());
  }

  public subtract(measure: Measure): Measure<D> {
    if (!dimensionsEqual(this.unit.dimension, measure.unit.dimension)) {
      throw new Error('Cannot subtract a measure of a different dimension.');
    }
    return this.setBaseValue(this.baseValue() - measure.baseValue());
  }

  public multiplyWith(measure: Measure): Measure {
    this.value = precise(this.value * measure.value);
    const newUnit = this.unit.multipliedWith(measure.unit);
    this.unit = findEqualUnit(newUnit) || newUnit;
    return this;
  }

  public divideBy(measure: Measure): Measure {
    this.value = precise(this.value / measure.value);
    const newUnit = this.unit.dividedBy(measure.unit);
    this.unit = findEqualUnit(newUnit) || newUnit;
    return this;
  }
}