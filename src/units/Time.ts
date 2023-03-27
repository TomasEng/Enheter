import {Dimension} from "../Dimension";
import {Unit} from "../Unit";
import {Measure} from "../Measure";
import {Prefix} from "../Prefix";
import {BijectiveOperationChain} from "../BijectiveOperation";

export const timeDimension: Dimension = { time: 1 };

export const timeUnits = {
  second: new Unit("second", timeDimension),
  minute: new Unit("minute", timeDimension, BijectiveOperationChain.fromFactor(60)),
  hour: new Unit("hour", timeDimension, BijectiveOperationChain.fromFactor(3600)),
  day: new Unit("day", timeDimension, BijectiveOperationChain.fromFactor(86400)),
  week: new Unit("week", timeDimension, BijectiveOperationChain.fromFactor(604800)),
}

export type TimeUnit = keyof typeof timeUnits;