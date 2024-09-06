import {inventory} from "./cars.js";

// ==== Problem #1 ====

// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
"use strict";

function findCarById(inventory, id) {
    
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      console.log(`Car ${id} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`);
      return;
    }
  }
  console.log(`Car with id ${id} not found`);
}
findCarById(inventory,33)
// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");

function getLastCar(inventory) {
  
  const lastCar = inventory[inventory.length - 1];
  console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
}
getLastCar(inventory)

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function sortCarModels(inventory) {
 
  const models = [];
  for (let i = 0; i < inventory.length; i++) {
    models.push(inventory[i].car_model);
  }
  models.sort();
  console.log(models);
}
sortCarModels(inventory)

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.


function extractCarYears(inventory) {
 
  const years = [];
  for (let i = 0; i < inventory.length; i++) {
    years.push(inventory[i].car_year);
  }
  console.log(years);
  return years;
}
extractCarYears(inventory)
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function filterOlderCars(inventory) {
  const years = extractCarYears(inventory);
  const olderCars = [];
  for (let i = 0; i < years.length; i++) {
    if (years[i] < 2000) {
      olderCars.push(years[i]);
    }
  }
  console.log(olderCars.length);
  return olderCars;
}
filterOlderCars(inventory)


// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function filterBMWAndAudi(inventory) {
  
  const bmwAndAudi = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi") {
      bmwAndAudi.push(inventory[i].car_model);
    }
  }
  console.log(JSON.stringify(bmwAndAudi));
  return bmwAndAudi;
}
filterBMWAndAudi(inventory)


export{}
