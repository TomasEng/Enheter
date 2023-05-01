import {
  deepSplit,
  exponentFromSymbolPart,
  mergeDuplicateSymbols,
  mergeSymbols,
  numberFromSuperscriptCharacters,
  raisedSymbol,
  splitAndRaise,
  splitSymbolIntoParts,
  splitSymbolIntoSymbolsAndExponents,
  superscriptCharactersFromNumber,
  symbolFromSubUnit,
  symbolFromSymbolsAndExponents
} from './symbolUtils';
import {SubUnit} from '../types/SubUnit';
import {squareMetre} from '../units/basicUnits';

describe('symbolUtils', () => {
  describe('splitSymbolIntoParts', () => {
    it('Returns empty array for empty string', () => {
      expect(splitSymbolIntoParts('')).toEqual([]);
    });

    it('Splits string into array of SymbolPart objects', () => {
      expect(splitSymbolIntoParts('ms')).toEqual([{symbol: 'ms', exponent: '', isDivisor: false}]);
      expect(splitSymbolIntoParts('ms²')).toEqual([{symbol: 'ms', exponent: '²', isDivisor: false}]);
      expect(splitSymbolIntoParts('m¹²')).toEqual([{symbol: 'm', exponent: '¹²', isDivisor: false}]);
      expect(splitSymbolIntoParts('m×s')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '', isDivisor: false}
      ]);
      expect(splitSymbolIntoParts('m·s')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '', isDivisor: false}
      ]);
      expect(splitSymbolIntoParts('m÷s')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '', isDivisor: true},
      ]);
      expect(splitSymbolIntoParts('m/s')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '', isDivisor: true},
      ]);
      expect(splitSymbolIntoParts('m/s²')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '²', isDivisor: true},
      ]);
      expect(splitSymbolIntoParts('m/s²N')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '²', isDivisor: true},
        {symbol: 'N', exponent: '', isDivisor: false},
      ]);
      expect(splitSymbolIntoParts('m(s)')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '', isDivisor: false},
      ]);
      expect(splitSymbolIntoParts('m(s)²')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's', exponent: '²', isDivisor: false},
      ]);
      expect(splitSymbolIntoParts('m(s²g)²N')).toEqual([
        {symbol: 'm', exponent: '', isDivisor: false},
        {symbol: 's²g', exponent: '²', isDivisor: false},
        {symbol: 'N', exponent: '', isDivisor: false},
      ]);
      expect(splitSymbolIntoParts('m⁺²')).toEqual([{symbol: 'm', exponent: '⁺²', isDivisor: false}]);
      expect(splitSymbolIntoParts('m⁻²')).toEqual([{symbol: 'm', exponent: '⁻²', isDivisor: false}]);
      expect(splitSymbolIntoParts('s²g/(f³Hz)')).toEqual([
        {symbol: 's', exponent: '²', isDivisor: false},
        {symbol: 'g', exponent: '', isDivisor: false},
        {symbol: 'f³Hz', exponent: '', isDivisor: true},
      ]);
    });
  });

  describe('numberFromSuperscriptCharacters', () => {
    it('Returns 1 for empty string', () => {
      expect(numberFromSuperscriptCharacters('')).toBe(1);
    });

    it('Returns correct number', () => {
      expect(numberFromSuperscriptCharacters('¹')).toBe(1);
      expect(numberFromSuperscriptCharacters('²')).toBe(2);
      expect(numberFromSuperscriptCharacters('¹²')).toBe(12);
      expect(numberFromSuperscriptCharacters('¹²³')).toBe(123);
      expect(numberFromSuperscriptCharacters('¹²³⁴')).toBe(1234);
      expect(numberFromSuperscriptCharacters('⁺¹²')).toBe(12);
      expect(numberFromSuperscriptCharacters('⁻¹²')).toBe(-12);
    });
  });

  describe('superscriptCharactersFromNumber', () => {
    it('Returns empty string for 1', () => {
      expect(superscriptCharactersFromNumber(1)).toBe('');
    });

    it('Returns correct character', () => {
      expect(superscriptCharactersFromNumber(2)).toBe('²');
      expect(superscriptCharactersFromNumber(12)).toBe('¹²');
      expect(superscriptCharactersFromNumber(123)).toBe('¹²³');
      expect(superscriptCharactersFromNumber(1234)).toBe('¹²³⁴');
      expect(superscriptCharactersFromNumber(-1)).toBe('⁻¹');
      expect(superscriptCharactersFromNumber(-12)).toBe('⁻¹²');
    });
  });

  test('exponentFromSymbolPart', () => {
    expect(exponentFromSymbolPart({symbol: 'm', exponent: '¹²', isDivisor: false})).toBe(12);
    expect(exponentFromSymbolPart({symbol: 'm', exponent: '¹²', isDivisor: true})).toBe(-12);
    expect(exponentFromSymbolPart({symbol: 'm', exponent: '⁻¹²', isDivisor: false})).toBe(-12);
    expect(exponentFromSymbolPart({symbol: 'm', exponent: '⁻¹²', isDivisor: true})).toBe(12);
  });

  test('splitSymbolIntoSymbolsAndExponents', () => {
    expect(splitSymbolIntoSymbolsAndExponents('m(s²g)²/N')).toEqual([
      {symbol: 'm', exponent: 1},
      {symbol: 's²g', exponent: 2},
      {symbol: 'N', exponent: -1},
    ]);
  });

  test('splitAndRaise', () => {
    expect(splitAndRaise({symbol: 's²g', exponent: 3})).toEqual([
      {symbol: 's', exponent: 6},
      {symbol: 'g', exponent: 3},
    ]);
    expect(splitAndRaise({symbol: 's', exponent: 1})).toEqual([
      {symbol: 's', exponent: 1},
    ]);
  });

  test('deepSplit', () => {
    expect(deepSplit('')).toEqual([]);
    expect(deepSplit('m')).toEqual([{symbol: 'm', exponent: 1}]);
    expect(deepSplit('m²')).toEqual([{symbol: 'm', exponent: 2}]);
    expect(deepSplit('m(s²g)²/N')).toEqual([
      {symbol: 'm', exponent: 1},
      {symbol: 's', exponent: 4},
      {symbol: 'g', exponent: 2},
      {symbol: 'N', exponent: -1},
    ]);
    expect(deepSplit('m(s²g/(f³Hz))²/N²')).toEqual([
      {symbol: 'm', exponent: 1},
      {symbol: 's', exponent: 4},
      {symbol: 'g', exponent: 2},
      {symbol: 'f', exponent: -6},
      {symbol: 'Hz', exponent: -2},
      {symbol: 'N', exponent: -2},
    ]);
  });

  test('mergeDuplicateSymbols', () => {
    expect(mergeDuplicateSymbols([])).toEqual([]);
    expect(mergeDuplicateSymbols([{symbol: 'm', exponent: 1}])).toEqual([{symbol: 'm', exponent: 1}]);
    expect(mergeDuplicateSymbols([
      {symbol: 'm', exponent: 1},
      {symbol: 'm', exponent: 1}
    ])).toEqual([{symbol: 'm', exponent: 2}]);
    expect(mergeDuplicateSymbols([
      {symbol: 'm', exponent: 1},
      {symbol: 's', exponent: 1},
      {symbol: 'm', exponent: 2},
      {symbol: 'g', exponent: -1},
      {symbol: 's', exponent: -1},
    ])).toEqual([
      {symbol: 'm', exponent: 3},
      {symbol: 'g', exponent: -1},
    ]);
  });

  test('symbolFromSymbolsAndExponents', () => {
    expect(symbolFromSymbolsAndExponents([])).toBe('');
    expect(symbolFromSymbolsAndExponents([{symbol: 'm', exponent: 1}])).toBe('m');
    expect(symbolFromSymbolsAndExponents([{symbol: 'm', exponent: 2}])).toBe('m²');
    expect(symbolFromSymbolsAndExponents([
      {symbol: 'm', exponent: 1},
      {symbol: 's', exponent: -1},
      {symbol: 'm', exponent: 2},
      {symbol: 'g', exponent: -1},
    ])).toBe('m³/(s⋅g)');
    expect(symbolFromSymbolsAndExponents([
      {symbol: 'm', exponent: -1},
      {symbol: 's', exponent: -1}
    ])).toBe('m⁻¹⋅s⁻¹');
  });

  test('raisedSymbol', () => {
    expect(raisedSymbol('m', 3)).toBe('m³');
    expect(raisedSymbol('m²', -3)).toBe('m⁻⁶');
  });

  test('mergeSymbols', () => {
    expect(mergeSymbols(['m', 's'])).toBe('m⋅s');
    expect(mergeSymbols(['m/s', 'm²g⁻¹'])).toBe('m³/(s⋅g)');
  });

  test('symbolFromSubUnit', () => {
    const unit = squareMetre;
    const exponent = 3;
    const subUnit: SubUnit = {unit, exponent};
    expect(symbolFromSubUnit(subUnit)).toBe('m⁶');
  });
});


























