import {getPrefixFactor, removePrefixFromSymbol} from "./Prefix";

describe('Prefix', () => {
  describe('getPrefixFactor', () => {
    it('Returns factor associated with given prefix', () => {
      expect(getPrefixFactor('quetta')).toBe(1e30);
      expect(getPrefixFactor('ronna')).toBe(1e27);
      expect(getPrefixFactor('yotta')).toBe(1e24);
      expect(getPrefixFactor('zetta')).toBe(1e21);
      expect(getPrefixFactor('exa')).toBe(1e18);
      expect(getPrefixFactor('peta')).toBe(1e15);
      expect(getPrefixFactor('tera')).toBe(1e12);
      expect(getPrefixFactor('giga')).toBe(1e9);
      expect(getPrefixFactor('mega')).toBe(1e6);
      expect(getPrefixFactor('kilo')).toBe(1e3);
      expect(getPrefixFactor('hecto')).toBe(1e2);
      expect(getPrefixFactor('deca')).toBe(1e1);
      expect(getPrefixFactor(null)).toBe(1);
      expect(getPrefixFactor(undefined)).toBe(1);
      expect(getPrefixFactor('deci')).toBe(1e-1);
      expect(getPrefixFactor('centi')).toBe(1e-2);
      expect(getPrefixFactor('milli')).toBe(1e-3);
      expect(getPrefixFactor('micro')).toBe(1e-6);
      expect(getPrefixFactor('nano')).toBe(1e-9);
      expect(getPrefixFactor('pico')).toBe(1e-12);
      expect(getPrefixFactor('femto')).toBe(1e-15);
      expect(getPrefixFactor('atto')).toBe(1e-18);
      expect(getPrefixFactor('zepto')).toBeCloseTo(1e-21, 36);
      expect(getPrefixFactor('yocto')).toBeCloseTo(1e-24, 39);
      expect(getPrefixFactor('ronto')).toBeCloseTo(1e-27, 42);
      expect(getPrefixFactor('quecto')).toBeCloseTo(1e-30, 45);
    });
  });

  describe('removePrefixFromSymbol', () => {
    it('Removes given prefix from beginning of string', () => {
      expect(removePrefixFromSymbol('Qfoo', 'quetta')).toBe('foo');
    });

    it('Does not remove prefix if not at beginning of string', () => {
      expect(removePrefixFromSymbol('fooQ', 'quetta')).toBe('fooQ');
    });

    it('Does not change anything if prefix is not present', () => {
      expect(removePrefixFromSymbol('foo', 'quetta')).toBe('foo');
    });

    it('Does not change anything if prefix is null', () => {
      expect(removePrefixFromSymbol('foo', null)).toBe('foo');
    });
  });
});