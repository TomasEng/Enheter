import {FrequencyUnit, frequencyUnits} from './frequency';

describe('frequency', () => {
  test.each(Object.keys(frequencyUnits) as FrequencyUnit[])(
    '%s has the correct dimension',
    (unit) => expect(frequencyUnits[unit].dimension).toEqual({time: -1})
  );
});