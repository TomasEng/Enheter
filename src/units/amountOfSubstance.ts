import {UnitList} from '../UnitList';
import {mole} from './basicUnits';

export const amountOfSubstanceUnits: UnitList = {mole};

export type AmountOfSubstanceUnit = keyof typeof amountOfSubstanceUnits;