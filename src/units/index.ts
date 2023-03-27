import {lengthUnits} from "./Length";
import {timeUnits} from "./Time";
import {temperatureUnits} from "./Temperature";
import {velocityUnits} from "./Velocity";

export const units = {
  ...lengthUnits,
  ...timeUnits,
  ...temperatureUnits,
  ...velocityUnits
};