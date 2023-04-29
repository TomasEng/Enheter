import {findDimensionName} from './findDimensionName';

describe('findDimensionName', () => {
  it('Returns the name of the dimension if it exists in the unit lists', () => {
    expect(findDimensionName({
      mass: 1,
      length: 2,
      time: -3
    })).toBe('power');
  });

  it('Returns undefined if no corresponding dimension is found', () => {
    expect(findDimensionName({mass: 1, length: 2, time: -4})).toBeUndefined();
  });
});