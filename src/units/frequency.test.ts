import {frequency, FrequencyUnit, frequencyUnits} from './frequency';

describe('frequency', () => {
  describe('frequencyUnits', () => {
    test.each(Object.keys(frequencyUnits.units) as FrequencyUnit[])(
      '%s has the correct dimension',
      (unit) => expect(frequencyUnits.units[unit].dimension).toEqual({time: -1})
    );
  });

  test('frequency', () => {
    const unit: FrequencyUnit = 'hertz';
    const value = 12;
    const measure = frequency(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(frequencyUnits.units[unit]);
  });
});