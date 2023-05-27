import {findUnitName} from './findUnitName';
import {lengthUnit} from '../units';

describe('findUnitName', () => {
  it('Returns key if it exists', () => {
    expect(findUnitName(lengthUnit('metre'))).toEqual('metre');
  });

  it('Finds unit name if there is no key', () => {
    const unitWithoutKey = lengthUnit('metre').withPrefix('centi');
    expect(unitWithoutKey.key).toBeUndefined();
    expect(findUnitName(unitWithoutKey.withPrefix(null))).toEqual('metre');
  });

  it('Returns undefined if no corresponding unit is found', () => {
    expect(findUnitName(lengthUnit('foot').withPrefix('centi'))).toBeUndefined();
  });
});