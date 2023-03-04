interface BijectiveOperation {
  function: (accumulator: number, parameter: number) => number;
  inverseFunction: (accumulator: number, parameter: number) => number;
}

const operations: { [key: string]: BijectiveOperation } = {
  add: {
    function: (accumulator, parameter) => accumulator + parameter,
    inverseFunction: (accumulator, parameter) => accumulator - parameter
  },
  multiply: {
    function: (accumulator, parameter) => accumulator * parameter,
    inverseFunction: (accumulator, parameter) => accumulator / parameter
  }
}

export interface BijectiveOperationWithParam {
  operation: keyof typeof operations;
  parameter: number;
}

export const simplifyOperationChain = (chain: BijectiveOperationWithParam[]): BijectiveOperationWithParam[] => {
  const simplifiedChain: BijectiveOperationWithParam[] = [];
  chain.forEach((operation) => {
    if ((operation.operation === 'add' && operation.parameter === 0) || (operation.operation === 'multiply' && operation.parameter === 1)) return;
    const lastOperation = simplifiedChain[simplifiedChain.length - 1];
    if (lastOperation && lastOperation.operation === operation.operation) {
      lastOperation.parameter = operations[operation.operation].function(lastOperation.parameter, operation.parameter);
    } else {
      simplifiedChain.push(operation);
    }
  });
  return simplifiedChain;
}

interface BijectiveOperationObjectWithParam {
  operation: BijectiveOperation;
  parameter: number;
}

export class BijectiveOperationChain {

  public nameChain: BijectiveOperationWithParam[];
  public objectChain: BijectiveOperationObjectWithParam[];

  constructor(chain: BijectiveOperationWithParam[]) {
    const simplifiedChain = simplifyOperationChain(chain);
    this.nameChain = simplifiedChain;
    this.objectChain = simplifiedChain
      .map((fun) => ({ operation: operations[fun.operation], parameter: fun.parameter }));
  }

  public apply(parameter: number): number {
    return this
      .objectChain
      .reduce((accumulator, fun) => fun.operation.function(accumulator, fun.parameter), parameter);
  }

  public applyInverse(parameter: number): number {
    return this
      .objectChain
      .reduceRight((accumulator, fun) => fun.operation.inverseFunction(accumulator, fun.parameter), parameter);
  }

  public inverted(): BijectiveOperationChain {
    const invertedChain = [...this.nameChain].reverse().map(o => {
      let newParam: number = 0;
      switch (o.operation) {
        case 'add': newParam = -o.parameter; break;
        case 'multiply': newParam = 1 / o.parameter;
      }
      return { ...o, parameter: newParam };
    });
    return new BijectiveOperationChain(invertedChain);
  }

  public concat(other: BijectiveOperationChain): BijectiveOperationChain {
    return new BijectiveOperationChain([...this.nameChain, ...other.nameChain]);
  }
}