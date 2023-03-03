import {Dimension} from "./Dimension";

export class Unit {

  public name: string;
  public dimension: Dimension;
  public isBase: boolean;
  public toBase: (value: number) => number;
  public fromBase: (value: number) => number;

  constructor(name: string, dimension: Dimension, toSI?: (value: number) => number, fromSI?: (value: number) => number) {
    this.name = name;
    this.dimension = dimension;
    if (toSI && fromSI) {
      this.isBase = false;
      this.toBase = toSI;
      this.fromBase = fromSI;
    } else {
      this.isBase = true;
      this.toBase = (value: number) => value;
      this.fromBase = (value: number) => value;
    }
  }
}