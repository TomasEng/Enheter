import {Unit} from '../Unit';
import {allUnits} from '../units';
import {UnitName} from '../types/UnitName';
import {DimensionName} from '../types/DimensionName';

/**
 * Finds the key of a given unit used in the allUnits object.
 * @param unit The unit to find the key of.
 * @returns The key of the given unit if it exists in the allUnits object, false otherwise.
 */
export const findUnitName = <D extends DimensionName>(unit: Unit): UnitName<D> | undefined => {
  if (unit.key) return unit.key as UnitName<D>;
  for (const units of Object.values(allUnits).map((d) => d.units)) {
    for (const [key, value] of Object.entries(units)) {
      if (unit.equals(value)) return key as UnitName<D>;
    }
  }
  return undefined;
};