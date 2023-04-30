import React from 'react';
import classes from './App.module.css';
import * as enheter from 'enheter';
import {Dimension, Measure, Unit} from 'enheter';
import {UnitList} from 'enheter/lib/types/UnitList';
import {
  Select,
  SingleSelectOption,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TextField
} from '@digdir/design-system-react';
import '@altinn/figma-design-tokens/dist/tokens.css';

const allUnitLists: UnitList[] = Object
  .values(enheter)
  .filter((val) => typeof val === 'object' && 'dimension' in val)
  .map((val) => val as UnitList);

interface ListUnit {
  dimensionName?: string;
  dimension: Dimension;
  unit: Unit;
}

const allUnits: ListUnit[] = allUnitLists
  .map((unitList) => Object.values(unitList.units).map((unit) => ({
    dimensionName: unitList.dimensionName,
    dimension: unitList.dimension,
    unit,
  })))
  .flat();

const listUnitToOption = (listUnit: ListUnit): SingleSelectOption => {
  const label = `${listUnit.unit.key} (${listUnit.dimensionName})`;
  const value = `${listUnit.dimensionName}.${listUnit.unit.key}`;
  return {
    label,
    value,
    keywords: [listUnit.unit.key!!, listUnit.dimensionName!!, listUnit.unit.symbol!!],
  };
};

function App() {
  const [value, setValue] = React.useState<number>(1);
  const [unit, setUnit] = React.useState<string>('length.metre');

  const currentUnitKey = unit.split('.')[1];
  const currentDimensionName = unit.split('.')[0];
  const currentUnitList: UnitList = enheter[currentDimensionName + 'Units' as keyof typeof enheter] as UnitList;
  const currentUnit: Unit = currentUnitList.units[currentUnitKey]!!;
  const currentMeasure = new Measure(currentUnit, value);

  return (
    <div className={classes.app}>
      <div className={classes.page}>
        <header>
          <h1>Unit converter</h1>
        </header>
        <div className={classes.converterForm}>
          <div className={classes.value}>
            <TextField
              formatting={{
                align: 'right',
                number: {
                  decimalSeparator: ',',
                }
              }}
              onChange={event => setValue(Number(event.target.value))}
              value={value.toString()}
            />
          </div>
          <div className={classes.unit}>
            <Select
              options={allUnits.map(listUnitToOption)}
              value={unit}
              onChange={setUnit}
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>
                Unit
              </TableCell>
              <TableCell>
                Symbol
              </TableCell>
              <TableCell>
                Value
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.values(currentUnitList.units).map((unit) => {
              const convertedValue = currentMeasure.convertTo(unit);
              return (
                <TableRow key={unit.key}>
                  <TableCell>
                    {unit.key}
                  </TableCell>
                  <TableCell>
                    {unit.symbol}
                  </TableCell>
                  <TableCell>
                    {convertedValue.value}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

  export default App;
