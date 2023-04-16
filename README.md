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
import {lengthUnits, Measure} from 'enheter';

const measure = new Measure(lengthUnits.metre, 1);
```