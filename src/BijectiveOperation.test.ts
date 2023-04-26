import {BijectiveOperationChain, simplifyOperationChain} from './BijectiveOperation';

describe('BijectiveOperation', () => {

  describe('BijectiveOperationChain', () => {

    const startValue = 12;
    const operationChain = new BijectiveOperationChain([
      {operation: 'add', parameter: 2}, // 14
      {operation: 'multiply', parameter: 3}, // 42
      {operation: 'add', parameter: -10}, // 32
      {operation: 'multiply', parameter: 1 / 2}, // 16
    ]);
    const expectedEndValue = 16;

    test('fromFactor', () => {
      const parameter = 2;
      const {nameChain} = BijectiveOperationChain.fromFactor(parameter);
      expect(nameChain).toEqual([{operation: 'multiply', parameter}]);
    });

    test('fromOffset', () => {
      const parameter = 2;
      const {nameChain} = BijectiveOperationChain.fromOffset(parameter);
      expect(nameChain).toEqual([{operation: 'add', parameter}]);
    });

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

    describe('isMultiplicationOnly', () => {
      it('Returns true if the chain only contains multiplications', () => {
        const chain = new BijectiveOperationChain([
          {operation: 'multiply', parameter: 2},
          {operation: 'multiply', parameter: 3},
          {operation: 'multiply', parameter: 4},
        ]);
        expect(chain.isMultiplicationOnly()).toBe(true);
      });

      it('Returns false if the chain contains other operations', () => {
        const chain = new BijectiveOperationChain([
          {operation: 'multiply', parameter: 2},
          {operation: 'add', parameter: 3},
          {operation: 'multiply', parameter: 4},
        ]);
        expect(chain.isMultiplicationOnly()).toBe(false);
      });
    });

    test('raise', () => {
      const chain = new BijectiveOperationChain([
        {operation: 'multiply', parameter: 3},
      ]);
      const raisedChain = chain.raise(2);
      expect(raisedChain?.nameChain[0].parameter).toBe(9);
    });

    test('prependMultiplication', () => {

      const multiplication = new BijectiveOperationChain([{operation: 'multiply', parameter: 3}]);
      const newMultiplication = multiplication.prependMultiplication(2);
      expect(newMultiplication.nameChain).toEqual([{operation: 'multiply', parameter: 6}]);

      const addition = new BijectiveOperationChain([{operation: 'add', parameter: 3}]);
      const newAddition = addition.prependMultiplication(2);
      expect(newAddition.nameChain).toEqual([{operation: 'multiply', parameter: 2}, {operation: 'add', parameter: 3}]);
    });

    test('equals', () => {
      const chain1 = new BijectiveOperationChain([
        {operation: 'multiply', parameter: 3},
        {operation: 'add', parameter: 2},
      ]);
      const chain2 = new BijectiveOperationChain([
        {operation: 'multiply', parameter: 3},
        {operation: 'add', parameter: 2},
      ]);
      const chain3 = new BijectiveOperationChain([
        {operation: 'multiply', parameter: 3},
        {operation: 'add', parameter: 3},
      ]);
      const emptyChain1 = new BijectiveOperationChain([]);
      const emptyChain2 = new BijectiveOperationChain([]);
      expect(chain1.equals(chain2)).toBe(true);
      expect(chain1.equals(chain3)).toBe(false);
      expect(emptyChain1.equals(emptyChain2)).toBe(true);
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
        {operation: 'multiply', parameter: 1},
        {operation: 'add', parameter: 2},
        {operation: 'multiply', parameter: 3},
        {operation: 'add', parameter: 0},
        {operation: 'multiply', parameter: 1 / 2},
        {operation: 'add', parameter: -10},
        {operation: 'multiply', parameter: 1},
        {operation: 'add', parameter: 1}
      ];
      const simplifiedChain = simplifyOperationChain(operationChain);
      expect(simplifiedChain).toEqual([
        {operation: 'add', parameter: 2},
        {operation: 'multiply', parameter: 3 / 2},
        {operation: 'add', parameter: -9},
      ]);
    });
  });
});