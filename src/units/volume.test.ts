import {volume, VolumeUnit, volumeUnits} from './volume';

describe('volume', () => {
  describe('volumeUnits', () => {
    test.each(Object.keys(volumeUnits) as VolumeUnit[])(
      '%s has correct dimension',
      (unit) => expect(volumeUnits[unit].dimension).toEqual({length: 3})
    );
  });

  test('volume', () => {
    const unit: VolumeUnit = 'cubicMetre';
    const value = 12;
    const measure = volume(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(volumeUnits[unit]);
  });
});