import {VolumeUnit, volumeUnits} from './volume';

describe('volume', () => {
  test.each(Object.keys(volumeUnits) as VolumeUnit[])(
    '%s has correct dimension',
    (unit) => expect(volumeUnits[unit].dimension).toEqual({length: 3})
  );
});