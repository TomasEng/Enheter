# Enheter

"Enheter" is Norwegian for "units" and this package provides tools to work with measures of different units.

## Installation

To install the package in your project, run the following command in the terminal at the root of your project:

```shell
npm install enheter
```

## Basic functionality

The simplest way to initiate a measure is to use one of the built-in measure functions. For example, to create a measure
of 1 metre, you can use the `length` function:

```javascript
import {length} from 'enheter';

const measure = length('metre', 1);
```

Currently, the following measure functions are available:

- `acceleration`
- `amountOfSubstance`
- `area`
- `capacitance`
- `charge`
- `conductance`
- `conductivity`
- `current`
- `density`
- `energy`
- `force`
- `frequency`
- `inductance`
- `length`
- `luminousIntensity`
- `magneticFlux`
- `magneticFluxDensity`
- `mass`
- `power`
- `pressure`
- `resistance`
- `resistivity`
- `temperature`
- `time`
- `velocity`
- `voltage`
- `volume`

An alternative approach is to create a `Measure` object using a `Unit` object. The following example gives the same
result as the previous one:

```javascript
import {lengthUnit, Measure} from 'enheter';

const measure = new Measure(lengthUnit('metre'), 1);
```

The resulting measure object has a `value` and a `unit` property. The `unit` property is a unit object, the one returned
from the `lengthUnit` function in the example above.

```javascript
console.log(measure.value, measure.unit.symbol); // Logs "1 m"
```

## Conversion

A measure in a given unit can be converted to another unit using the `convertTo` method:

```javascript
import {lengthUnit} from 'enheter';

const measure = length('metre', 1).convertTo(lengthUnit('inch'));
console.log(measure.value, measure.unit.symbol); // Logs "39.37007874015748 in"
```

There is also a shorthand version of this method:

```javascript
length('metre', 1).convertTo('inch');
```

## Arithmetics

It is possible to perform arithmetic operations on the measures. Here are some examples:

### Addition and subtraction

```javascript
import {length} from 'enheter';

const measure = length('metre', 1).add(length('metre', 2));
console.log(measure.value, measure.unit.symbol); // Logs "3 m"
measure.subtract(length('metre', 1));
console.log(measure.value, measure.unit.symbol); // Logs "2 m"
```

This can also be done with different units as long as they have the same dimension. The resulting unit will then be the
one of the initial measure.

```javascript
import {length} from 'enheter';

const measure = length('foot', 2).add(length('inch', 12));
console.log(measure.value, measure.unit.symbol); // Logs "3 ft"
```

### Multiplication and division

```javascript
import {length, mass, time} from 'enheter';

const measure = length('metre', 12).divideBy(time('second', 2));
console.log(measure.value, measure.unit.symbol); // Logs "6 m/s"
measure.divideBy(time('second', 3));
console.log(measure.value, measure.unit.symbol); // Logs "2 m/s²"
measure.multiplyWith(mass('kilogram', 2));
console.log(measure.value, measure.unit.symbol); // Logs "4 N"
```

Multiplying and dividing cannot be done with units of which the scale is offset, such as temperature units like Celsius
or Fahrenheit. These must be converted to Kelvin or Rankine first.