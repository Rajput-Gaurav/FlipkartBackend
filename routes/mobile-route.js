// create REST API:

const express = require("express");
const router = express.Router();

// import Mobile-Data :
// const mobiles = require("../data-sorce/mobile-data");

// import Controller:
const mobileController = require("../controllers/mobileController");

// create a route:
router.get("/", mobileController.getMobile);
// create get id route:
router.get("/:id", mobileController.getSingleMobile);
// post Mobile:
router.post("/", mobileController.addMobile);
// delete the single Mobile:
router.delete("/:id", mobileController.deleteMobile);
// Update the post of Mobiles:
router.put("/:id", mobileController.updateMobile);

// export the router:
module.exports = router;
