import {findUnitsByDimension} from './findUnitsByDimension';
import {allUnits} from '../units';

describe('findUnitsByDimension', () => {
  it('Finds units with given dimension', () => {
    expect(findUnitsByDimension({time: -1})).toEqual(allUnits.frequency.units);
    expect(findUnitsByDimension({mass: 1, length: 2, time: -3})).toEqual(allUnits.power.units);
  });
});