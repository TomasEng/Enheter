import {volume, volumeUnit, VolumeUnit, volumeUnits} from './volume';

describe('volume', () => {
  describe('volumeUnits', () => {
    test.each(Object.keys(volumeUnits.units) as VolumeUnit[])(
      '%s has correct dimension',
      (unit) => expect(volumeUnits.units[unit].dimension).toEqual({length: 3})
    );
  });

  test('volume', () => {
    const unit: VolumeUnit = 'cubicMetre';
    const value = 12;
    const measure = volume(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(volumeUnits.units[unit]);
  });

  test('volumeUnit', () => {
    const unit: VolumeUnit = 'cubicMetre';
    expect(volumeUnit(unit)).toEqual(volumeUnits.units[unit]);
  });
});