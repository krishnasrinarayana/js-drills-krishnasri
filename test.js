//---------------------------------------------PROBLEM-1 TEST CASE  -----------------------------------------------------------------------



// Normal case
findCarById(inventory, 33); // Expected: Car 33 is a 2011 Jeep Wrangler

//No Arguments
findCarById(); // Expected: Invalid arguments

// Empty Array and Valid ID
findCarById([], 33); // Expected: Car with id 33 not found

// Inventory with Invalid Items
findCarById([null], 33); // Expected: Car with id 33 not found

// Non-existent ID
findCarById(inventory, 999); // Expected: Car with id 999 not found

//Invalid ID Type
findCarById(inventory, "33"); // Expected: Invalid arguments




//---------------------------------------------------------PROBLEM-2------------------------------------------------------------------
 
// Normal case
 getLastCar(inventory); // Expected: Last car is a Lincoln Town Car

 // No Arguments
 getLastCar(); // Expected: Invalid argument

 // Empty Array
 getLastCar([]); // Expected: No cars in inventory

 //  Inventory with Invalid Items
 getLastCar([null]); // Expected: Invalid car data in inventory

 //Invald data
 getLastCar([{ car_make: "Toyota" }]); // Expected: Invalid car data in inventory

 // Non-Array Argument
 getLastCar("string"); // Expected: Invalid argument




 //------------------------------------------------------PROBLEM-3------------------------------------------------------------------------

 // Normal case
 sortCarModels(inventory); // Expected output: Sorted list of car models
 
 // No Arguments
 sortCarModels(); // Expected: Invalid argument
 
 // Empty Array
 sortCarModels([]); // Expected: No car models to sort
 
 // Inventory with Invalid Items
 sortCarModels([null]); // Expected: Invalid car data in inventory

 //Invalid data
 sortCarModels([{ car_make: "Toyota" }]); // Expected: Invalid car data in inventory

 //Invalid data
 sortCarModels([{ car_model: 12345 }]); // Expected: Invalid car data in inventory
 
 // Non-Array Argument
 sortCarModels("string"); // Expected: Invalid argument



 //----------------------------------------------PROBLEM-4-----------------------------------------------------------------------------------------


// Normal case
  extractCarYears(inventory);// Expected output: Array of car years from the inventory

  //  No Arguments
  extractCarYears(); // Expected: Invalid argument
  
  //  Empty Array
  extractCarYears([]); // Expected: No cars in inventory

  //  Inventory with Invalid Items
  extractCarYears([null]); // Expected: Invalid car data in inventory


//invalid datat
  extractCarYears([{ car_make: "Toyota" }]); // Expected: Invalid car data in inventory

  //invalid data
  extractCarYears([{ car_year: "2020" }]);  // Expected: Invalid car data in inventory
  
  // Non-Array Argument
  extractCarYears("string"); // Expected: Invalid argument












  //-----------------------------------------------------------PROBLEM-5---------------------------------------------------------------


// Normal case
filterOlderCars(inventory);// Expected: Number of cars older than 2000

// No Arguments
filterOlderCars();// Expected: Invalid argument, 0

//  Empty Array
filterOlderCars([]);// Expected: No cars in inventory, 0

// Inventory with Invalid Items
filterOlderCars([null]); // Expected: Invalid car data in inventory, 0

//invalid data
filterOlderCars([{ car_make: "Toyota" }]); // Expected: Invalid car data in inventory, 0

//invalid data
filterOlderCars([{ car_year: "2020" }]); // Expected: Invalid car data in inventory, 0

// Edge Case: Non-Array Argument
filterOlderCars("string"); // Expected: Invalid argument, 0






  //----------------------------------------------------------PROBLEM-6-------------------------------------------------------------


  // Normal case
  filterBMWAndAudi(inventory); // Expected: JSON string of BMW and Audi car models

  //No Arguments
  filterBMWAndAudi(); // Expected: Invalid argument, []

  // Empty Array
  filterBMWAndAudi([]);// Expected: No cars in inventory, []

  // Inventory with Invalid Items
  filterBMWAndAudi([null]);  // Expected: Invalid car data in inventory, []

  //invalid data
  filterBMWAndAudi([{ car_make: "Toyota" }]); // Expected: Invalid car data in inventory, []

  //invaild data
  filterBMWAndAudi([{ car_make: "BMW", car_model: "3 Series" }, { car_make: "Audi", car_model: "A4" }, { car_make: null }]); // Expected: Invalid car data in inventory, []

  // Non-Array Argument
  filterBMWAndAudi("string"); // Expected: Invalid argument, []