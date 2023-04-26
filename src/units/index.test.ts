import {getAllUnitLists} from '../utils/getAllUnitLists';

describe('index', () => {
  test('All units have a key corresponding to their key in the list', () => {
    getAllUnitLists().forEach((unitList) => {
      Object.keys(unitList.units).forEach((unit) => {
        expect(unitList.units[unit].key).toEqual(unit);
      });
    });
  });
});