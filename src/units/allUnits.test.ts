import {allUnits} from './allUnits';

describe('allUnits', () => {
  describe.each(Object.keys(allUnits))('%s', (dimensionName) => {
    // @ts-ignore
    const {units} = allUnits[dimensionName];
    it.each(Object.keys(units))('%s has correct key', (unitName) => {
      expect(units[unitName].key).toEqual(unitName);
    });
  });
});