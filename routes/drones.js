const express = require('express');
const router = express.Router();
const Drone = require ("../models/Drone.model.js");

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((response) =>{
    res.render("drones/list.hbs", {
      droneList : response
    });
    
    
  })

.catch((error) =>{
  next(error)
})


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs")
  
});




router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
let droneAdd = {
  name: req.body.name,
  propellers: req.body.propellers,
  maxSpedd: req.body.maxSpedd
}

Drone.create(droneAdd)
.then((response) => {
  res.redirect("/drones")
})

.catch((error) => {
  next(error)
})
})

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
