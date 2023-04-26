import {SubUnit} from '../types/SubUnit';

interface SymbolPart {
  symbol: string;
  exponent: string;
  isDivisor: boolean;
}

interface SymbolAndExponent {
  symbol: string;
  exponent: number;
}

export const splitSymbolIntoParts = (symbol: string): SymbolPart[] => {
  const multiplicationSignRegex = /[×·]/;
  const divisionSignRegex = /[÷/]/;
  const exponentRegex = /[⁰¹²³⁴⁵⁶⁷⁸⁹]+/;
  const exponentStartRegex = /[⁺⁻]/;

  let paranthesisLevel: number = 0;
  const parts: SymbolPart[] = [];
  let currentPart: string = '';
  let currentExponent: string = '';
  let currentIsDivisor: boolean = false;
  let currentIndex: number = 0;

  const addPart = (str: string, exponent: string = '', isDivisor = false) => {
    parts.push({symbol: str, exponent, isDivisor});
  }

  const resetAll = () => {
    currentPart = '';
    currentExponent = '';
    currentIsDivisor = false;
  }

  while (currentIndex < symbol.length) {
    const c = symbol[currentIndex];
    const next = symbol[currentIndex + 1];
    const last = symbol[currentIndex - 1];

    if (c === '(') paranthesisLevel++;
    else if (last === ')') paranthesisLevel--;

    if (paranthesisLevel === 0) {
      if (exponentRegex.test(c) || (!currentExponent.length && exponentStartRegex.test(c))) {
        currentExponent += c;
        if (!exponentRegex.test(next)) {
          addPart(currentPart, currentExponent, currentIsDivisor);
          resetAll();
        }
      } else if (multiplicationSignRegex.test(c)) {
        if (currentPart.length) {
          addPart(currentPart, currentExponent, currentIsDivisor);
        }
        resetAll();
      } else if (divisionSignRegex.test(c)) {
        if (currentPart.length) {
          addPart(currentPart, currentExponent, currentIsDivisor);
        }
        resetAll();
        currentIsDivisor = true;
      } else {
        currentPart += c;
      }
    } else if (paranthesisLevel === 1) {
      if (c === '(') {
        if (currentPart.length) {
          addPart(currentPart, currentExponent, currentIsDivisor);
          resetAll();
        }
      } else if (c === ')') {
        if (!exponentRegex.test(next)) {
          addPart(currentPart, currentExponent, currentIsDivisor);
          resetAll();
        }
      } else {
        currentPart += c;
      }
    } else {
      currentPart += c;
    }
    currentIndex++;
    if (currentIndex === symbol.length && currentPart.length) {
      addPart(currentPart, currentExponent, currentIsDivisor);
    }
  }

  return parts;
}

//@formatter:off
export const numberFromSuperscriptCharacter = (str: string): number => {
  switch (str) {
    case '⁰': return 0;
    case '¹': return 1;
    case '²': return 2;
    case '³': return 3;
    case '⁴': return 4;
    case '⁵': return 5;
    case '⁶': return 6;
    case '⁷': return 7;
    case '⁸': return 8;
    case '⁹': return 9;
    default: return 1;
  }
};
//@formatter:on

export const numberFromSuperscriptCharacters = (str: string): number => {
  const {length} = str;
  if (!length) return 1;
  let number = 0;
  if (str[0] === '⁻') return -numberFromSuperscriptCharacters(str.slice(1));
  if (str[0] === '⁺') return numberFromSuperscriptCharacters(str.slice(1));
  for (let i = 0; i < length; i++) {
    number += numberFromSuperscriptCharacter(str[i]) * 10 ** (length - i - 1);
  }
  return number;
}

//@formatter:off
export const superscriptCharacterFromNumber = (num: number): string => {
  switch (num) {
    case 0: return '⁰';
    case 1: return '¹';
    case 2: return '²';
    case 3: return '³';
    case 4: return '⁴';
    case 5: return '⁵';
    case 6: return '⁶';
    case 7: return '⁷';
    case 8: return '⁸';
    case 9: return '⁹';
    default: return '';
  }
}
//@formatter:on

export const superscriptCharactersFromNumber = (num: number): string => {
  if (num === 1) return '';
  let str = '';
  let isNegative = num < 0;
  if (isNegative) num = -num;
  while (num > 0) {
    str += superscriptCharacterFromNumber(num % 10);
    num = Math.floor(num / 10);
  }
  if (isNegative) str += '⁻';
  return str.split('').reverse().join('');
}

export const exponentFromSymbolPart = (part: SymbolPart): number => {
  const {exponent, isDivisor} = part;
  return numberFromSuperscriptCharacters(exponent) * (isDivisor ? -1 : 1);
}

export const convertSymbolPartToSymbolAndExponent = (part: SymbolPart): SymbolAndExponent => {
  const {symbol} = part;
  const exponent = exponentFromSymbolPart(part);
  return {symbol, exponent};
}

export const splitSymbolIntoSymbolsAndExponents = (symbol: string): SymbolAndExponent[] => {
  const parts = splitSymbolIntoParts(symbol);
  return parts.map(convertSymbolPartToSymbolAndExponent);
}

export const splitAndRaise = (symbolAndExponent: SymbolAndExponent): SymbolAndExponent[] => {
  const {symbol, exponent} = symbolAndExponent;
  const parts = splitSymbolIntoSymbolsAndExponents(symbol);
  return parts.map(part => {
    const {symbol, exponent: partExponent} = part;
    return {symbol, exponent: partExponent * exponent};
  });
};

export const raiseAll = (symbolAndExponents: SymbolAndExponent[], exponent: number): SymbolAndExponent[] =>
  symbolAndExponents.map(symbolAndExponent => ({
    ...symbolAndExponent,
    exponent: symbolAndExponent.exponent * exponent
  }));

export const deepSplit = (symbol: string): SymbolAndExponent[] => {
  const parts = splitSymbolIntoSymbolsAndExponents(symbol);
  const result: SymbolAndExponent[] = [];
  parts.forEach(part => {
    const split = splitAndRaise(part);
    if (split.length === 1) {
      result.push(split[0]);
    } else {
      const subParts = raiseAll(deepSplit(part.symbol), part.exponent);
      result.push(...subParts);
    }
  });
  return result;
}

export const mergeDuplicateSymbols = (symbolsAndExponents: SymbolAndExponent[]): SymbolAndExponent[] => {
  const result: SymbolAndExponent[] = [];
  symbolsAndExponents.forEach(symbolAndExponent => {
    const {symbol} = symbolAndExponent;
    if (result.some(s => s.symbol === symbol)) return;
    const newExponent = symbolsAndExponents
      .filter(s => s.symbol === symbol)
      .reduce((acc, s) => acc + s.exponent, 0);
    if (newExponent !== 0) result.push({symbol, exponent: newExponent});
  });
  return result;
}

export const symbolFromSymbolAndExponent = ({symbol, exponent}: SymbolAndExponent): string =>
  symbol + superscriptCharactersFromNumber(exponent);

export const invertExponents = (symbolsAndExponents: SymbolAndExponent[]): SymbolAndExponent[] =>
  symbolsAndExponents.map(s => ({...s, exponent: -s.exponent}));

export const symbolFromSymbolsAndExponents = (symbolsAndExponents: SymbolAndExponent[]): string => {
  const merged = mergeDuplicateSymbols(symbolsAndExponents);
  const positiveExponents = merged.filter(s => s.exponent > 0);
  const negativeExponents = merged.filter(s => s.exponent < 0);
  const dividend = positiveExponents.map(symbolFromSymbolAndExponent).join('⋅');
  if (dividend) {
    let divisor = invertExponents(negativeExponents).map(symbolFromSymbolAndExponent).join('⋅');
    if (!divisor) return dividend;
    if (negativeExponents.length > 1) divisor = '(' + divisor + ')';
    return dividend + '/' + divisor;
  } else return negativeExponents.map(symbolFromSymbolAndExponent).join('⋅');
}

export const raisedSymbol = (symbol: string, exponent: number): string =>
  symbolFromSymbolsAndExponents(splitAndRaise({symbol, exponent}));

export const mergeSymbols = (symbols: string[]): string =>
  symbolFromSymbolsAndExponents(symbols.map(deepSplit).flat());

export const symbolFromSubUnit = (subUnit: SubUnit): string =>
  raisedSymbol(subUnit.unit.symbol, subUnit.exponent);
