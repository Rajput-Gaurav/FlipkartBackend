const express = require("express");
const router = express.Router();

// import Mobile-Data :
const mobiles = require("../data-sorce/mobile-data");

// create a route:
router.get("/", (req, res) => {
  res.send(mobiles);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  let mobile = null;

  for (let i in mobiles) {
    if (mobiles[i].id == id) {
      mobile = mobiles[i];
      break;
    }
  }

  if (mobile) {
    res.json(mobile);
  } else {
    res.status(404).json({
      msg: "Mobile not Found",
    });
  }
});

// export the router:
module.exports = router;
