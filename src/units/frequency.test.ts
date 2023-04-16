import {frequency, FrequencyUnit, frequencyUnits} from './frequency';

describe('frequency', () => {
  describe('frequencyUnits', () => {
    test.each(Object.keys(frequencyUnits) as FrequencyUnit[])(
      '%s has the correct dimension',
      (unit) => expect(frequencyUnits[unit].dimension).toEqual({time: -1})
    );
  });

  test('frequency', () => {
    const unit: FrequencyUnit = 'hertz';
    const value = 12;
    const measure = frequency(unit, value);
    expect(measure.value).toEqual(value);
    expect(measure.unit).toEqual(frequencyUnits[unit]);
  });
});