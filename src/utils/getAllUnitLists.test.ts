import {getAllUnitLists} from './getAllUnitLists';

describe('getAllUnitLists', () => {
  it('Returns a list of unit lists', () => {
    const result = getAllUnitLists();
    expect(result.length).toBeGreaterThan(1);
    result.forEach((unitList) => {
      expect(unitList).toBeDefined();
      expect(unitList.dimension).toBeDefined();
      expect(unitList.units).toBeDefined();
    });
  });
});