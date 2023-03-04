import {BijectiveOperationChain, simplifyOperationChain} from "./BijectiveOperation";

describe('ReversibleOperation', () => {

  describe('ReversibleOperationChain', () => {

    const startValue = 12;
    const operationChain = new BijectiveOperationChain([
      {operation: 'add', parameter: 2}, // 14
      {operation: 'multiply', parameter: 3}, // 42
      {operation: 'add', parameter: -10}, // 32
      {operation: 'multiply', parameter: 1/2}, // 16
    ]);
    const expectedEndValue = 16;

    test('apply', () => {
      expect(operationChain.apply(startValue)).toBe(expectedEndValue);
    });

    test('applyInverse', () => {
      expect(operationChain.applyInverse(expectedEndValue)).toBe(startValue);
    });

    test('inverted', () => {
      const invertedOperationChain = operationChain.inverted();
      expect(invertedOperationChain.apply(expectedEndValue)).toBe(startValue);
      expect(invertedOperationChain.applyInverse(startValue)).toBe(expectedEndValue);
    });

    test('concat', () => {
        const operationChain2 = new BijectiveOperationChain([
            {operation: 'add', parameter: 2}, // 18
            {operation: 'multiply', parameter: 3}, // 54
        ]);
        const concatenatedChain = operationChain.concat(operationChain2);
        expect(concatenatedChain.apply(startValue)).toBe(54);
        expect(concatenatedChain.applyInverse(54)).toBe(startValue);
    });
  });

  describe('simplifyOperationChain', () => {

    it('Merges operations together', () => {
      const operationChain = [
        {operation: 'add', parameter: 2},
        {operation: 'add', parameter: 3},
        {operation: 'multiply', parameter: 3},
        {operation: 'multiply', parameter: 2},
        {operation: 'add', parameter: -10},
      ];
      const simplifiedChain = simplifyOperationChain(operationChain);
      expect(simplifiedChain).toEqual([
        {operation: 'add', parameter: 5},
        {operation: 'multiply', parameter: 6},
        {operation: 'add', parameter: -10},
      ]);
    });

    it('Removes unnecessary operations', () => {
      const operationChain = [
        {operation: 'add', parameter: 2},
        {operation: 'multiply', parameter: 3},
        {operation: 'add', parameter: 0},
        {operation: 'multiply', parameter: 1/2},
        {operation: 'add', parameter: -10},
        {operation: 'multiply', parameter: 1},
        {operation: 'add', parameter: 1}
      ];
      const simplifiedChain = simplifyOperationChain(operationChain);
      expect(simplifiedChain).toEqual([
        {operation: 'add', parameter: 2},
        {operation: 'multiply', parameter: 3/2},
        {operation: 'add', parameter: -9},
      ]);
    });
  });
});