// Controller of mobiles:
const mobileService = require("../services/mobileService");

// GET METHOD:
exports.getMobile = (req, res) => {
  mobileService
    .getMobile()
    .then((mobiles) => res.json(mobiles))
    .catch(() => res.status(500).json({ msg: "Something went wrong" }));
};

// GET METHOD FOR GETTING ID:
exports.getSingleMobile =
  ("/:id",
  (req, res) => {
    const { id } = req.params;

    mobileService
      .getSingleMobile(id)
      .then((mobile) => res.json(mobile))
      .catch(() =>
        res.status(404).json({
          msg: "Mobile not found",
        })
      );
  });

// POST METHOD:
exports.addMobile =
  ("/",
  (req, res) => {
    const {
      name,
      description,
      image,
      reviewCounter,
      reviews,
      price,
      ratingCounter,
      rating,
      avg,
      extraImages,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      productname1,
      productdescription1,
      productname2,
      productdescription2,
      productname3,
      productdescription3,
      productname4,
      productdescription4,
      productname5,
      productdescription5,
      productname6,
      productdescription6,
      InTheBox,
      ModelName,
      ModelNumber,
      Color,
      BrowseType,
      SimType,
      HybridSim,
      TouchScreen,
      OtgCompatible,
      SoundEnhancements,
      DisplaySize,
      Resolution,
      ResolutionType,
      Gpu,
      DisplayType,
      OtherDisplayFeature,
      OperatingSystem,
      ProcessorType,
      InternalStorage,
      PrimaryCameraAvailable,
      PrimaryCamera,
      SecondaryCameraAvailable,
      SecondaryCamera,
    } = req.body;

    mobileService
      .addMobile(
        name,
        description,
        image,
        reviewCounter,
        reviews,
        price,
        ratingCounter,
        rating,
        avg,
        extraImages,
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        productname1,
        productdescription1,
        productname2,
        productdescription2,
        productname3,
        productdescription3,
        productname4,
        productdescription4,
        productname5,
        productdescription5,
        productname6,
        productdescription6,
        InTheBox,
        ModelName,
        ModelNumber,
        Color,
        BrowseType,
        SimType,
        HybridSim,
        TouchScreen,
        OtgCompatible,
        SoundEnhancements,
        DisplaySize,
        Resolution,
        ResolutionType,
        Gpu,
        DisplayType,
        OtherDisplayFeature,
        OperatingSystem,
        ProcessorType,
        InternalStorage,
        PrimaryCameraAvailable,
        PrimaryCamera,
        SecondaryCameraAvailable,
        SecondaryCamera
      )
      .then((newMobile) => res.json(newMobile))
      .catch(() => res.status(500).json({ msg: "Something went wrong." }));
  });

// DELETE METHOD:
exports.deleteMobile =
  ("/:id",
  (req, res) => {
    const { id } = req.params;
    mobileService
      .deleteMobile(id)
      .then(() => res.json({}))
      .catch(() =>
        res.status(404).json({
          msg: "Post not found.",
        })
      );
  });

// UPDATE METHOD:
exports.updateMobile =
  ("/:id",
  (req, res) => {
    res.send("PUT Operation Work.");
  });
