import {findUnitsByDimension} from './findUnitsByDimension';
import {frequencyUnits, powerUnits} from '../units';

describe('findUnitsByDimension', () => {
  it('Finds units with given dimension', () => {
    expect(findUnitsByDimension({time: -1})).toEqual(frequencyUnits);
    expect(findUnitsByDimension({mass: 1, length: 2, time: -3})).toEqual(powerUnits);
  });
});