const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  Drone.find()
    .then((response) => {
      res.render("drones/list.hbs", {
        droneList: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  let droneAdd = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };

  Drone.create(droneAdd)
    .then((response) => {
      res.redirect("/drones");
    })

    .catch((error) => {
      next(error);
    });
});

router.get("/drones/:droneId/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { droneId } = req.params;

  Drone.findById(droneId)
    .then((response) => {
      console.log(response);
      res.render("drones/update-form.hbs", {
      propiedades: response
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/drones/:droneId/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { droneId } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  const droneUpdate = {
    name,
    propellers,
    maxSpeed,
  };

  Drone.findByIdAndUpdate(droneId, droneUpdate)
    .then(() => {
      // redireccionar al usuario
      res.redirect("/drones");
    })
    .catch((error) => {
      next(error);
    });
});


router.post("/drones/:droneId/delete", (req, res, next) => {

  // 1. buscar el libro por su id y borrarlo
  Drone.findByIdAndDelete(req.params.droneId)
  .then(() => {
    // 2. redireccionar a "/books"
    res.redirect("/drones")
  })
  .catch((error) => {
    next(error)
  })


})

module.exports = router;
