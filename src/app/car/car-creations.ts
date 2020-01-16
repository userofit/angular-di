// Examples with car and engine variations

import { Car, Engine, Tires } from './car';

///////// example 1 ////////////
export function simpleCar() {
  // Simple car with 4 cylinders and Flintstone tires.
  let car = new Car(new Engine(), new Tires());
  car.description = 'Simple';
  return car;
}


///////// example 2 ////////////
  class Engine2 {
    constructor(public cylinders: number) { }
  }
export function superCar() {
  // Super car with 12 cylinders and Flintstone tires.
  let bigCylinders = 12;
  let car = new Car(new Engine2(bigCylinders), new Tires());
  car.description = 'Super';
  return car;
}

/////////// example 3 //////////
  class MockEngine extends Engine { cylinders = 8; }
  class MockTires  extends Tires  { make = 'YokoGoodStone'; }

export function testCar() {
  // Test car with 8 cylinders and YokoGoodStone tires.
  let car = new Car(new MockEngine(), new MockTires());
  car.description = 'Test';
  return car;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/