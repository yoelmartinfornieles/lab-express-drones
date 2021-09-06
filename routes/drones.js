const express = require('express');
const router = express.Router();
const Drone = require ("../models/Drone.model.js")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find ()
    .then (dronesArray => {
      console.log ("dronesArray", dronesArray);
      res.render ("drones/list.hbs", {dronesArray});
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
