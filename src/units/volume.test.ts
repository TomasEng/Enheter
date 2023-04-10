import {VolumeUnit, volumeUnits} from "./volume";

describe('volume', () => {
  it.each(Object.keys(volumeUnits) as VolumeUnit[])('%s has correct dimension', (unit) => {
    const volumeUnit = volumeUnits[unit];
    expect(volumeUnit.dimension).toEqual({length: 3});
  });
});