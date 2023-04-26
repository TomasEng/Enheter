import {Unit} from '../Unit';
import {findUnitsByDimension} from './findUnitsByDimension';

export const findEqualUnit = (unit: Unit): Unit | null => {
  const unitsWithSameDimension = findUnitsByDimension(unit.dimension);
  for (const otherUnit of Object.values(unitsWithSameDimension)) {
    if (unit.equals(otherUnit)) {
      return otherUnit;
    }
  }
  return null;
}