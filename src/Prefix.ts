type PrefixExponent = {
  symbol: string;
  exponent: number;
}

export const prefixes: {[prefix: string]: PrefixExponent} = {
  quetta: { symbol: 'Q', exponent: 30 },
  ronna: { symbol: 'R', exponent: 27 },
  yotta: { symbol: 'Y', exponent: 24 },
  zetta: { symbol: 'Z', exponent: 21 },
  exa: { symbol: 'E', exponent: 18 },
  peta: { symbol: 'P', exponent: 15 },
  tera: { symbol: 'T', exponent: 12 },
  giga: { symbol: 'G', exponent: 9 },
  mega: { symbol: 'M', exponent: 6 },
  kilo: { symbol: 'k', exponent: 3 },
  hecto: { symbol: 'h', exponent: 2 },
  deca: { symbol: 'da', exponent: 1 },
  deci: { symbol: 'd', exponent: -1 },
  centi: { symbol: 'c', exponent: -2 },
  milli: { symbol: 'm', exponent: -3 },
  micro: { symbol: 'μ', exponent: -6 },
  nano: { symbol: 'n', exponent: -9 },
  pico: { symbol: 'p', exponent: -12 },
  femto: { symbol: 'f', exponent: -15 },
  atto: { symbol: 'a', exponent: -18 },
  zepto: { symbol: 'z', exponent: -21 },
  yocto: { symbol: 'y', exponent: -24 },
  ronto: { symbol: 'r', exponent: -27 },
  quecto: { symbol: 'q', exponent: -30 },
};

export type Prefix = keyof typeof prefixes | null;