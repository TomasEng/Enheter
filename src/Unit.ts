import {Dimension, dimensionsEqual, multiplyDimensions} from "./Dimension";
import {BijectiveOperationChain} from "./BijectiveOperation";
import {units} from "./units";

export class Unit {

  public name: string;
  public dimension: Dimension;
  public isBase: boolean;
  public baseConverter: BijectiveOperationChain;

  constructor(name: string, dimension: Dimension, toBase?: BijectiveOperationChain) {
    this.name = name;
    this.dimension = dimension;
    if (toBase && toBase.nameChain.length) {
      this.isBase = false;
      this.baseConverter = toBase;
    } else {
      this.isBase = true;
      this.baseConverter = new BijectiveOperationChain([]);
    }
  }

  public toBase(value: number): number {
    return this.baseConverter.apply(value);
  };

  public fromBase(value: number): number {
    return this.baseConverter.applyInverse(value);
  }

  public multiplyWith(unit: Unit): Unit {
    const newDimension = multiplyDimensions(this.dimension, unit.dimension);
    const newUnit: Unit = Object.values(units)?.find((u) => dimensionsEqual(u.dimension, newDimension)) ?? new Unit("unknown", newDimension);
    const newBaseConverter = this.baseConverter.concat(unit.baseConverter.inverted());
    this.constructor(newUnit.name, newDimension, newBaseConverter);
    return this;
  }
}