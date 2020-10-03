// mobile data services:
const Mobile = require("../models/mobile-model");
const mobiles = require("../data-sorce/mobile-data");

// use Promise:
// GET METHOD:
exports.getMobile = () => {
  return new Promise((resolve) => {
    resolve(mobiles);
  });
};

// GET METHOD FOR GETTING ID:
exports.getSingleMobile = (id) => {
  let mobile = null;

  for (let i in mobiles) {
    if (mobiles[i].id == id) {
      mobile = mobiles[i];
      break;
    }
  }
  return new Promise((resolve, reject) => {
    if (mobile) {
      resolve(mobile);
    } else {
      reject();
    }
  });
};

// POST METHOD:
exports.addMobile = (
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
) => {
  const newId = mobiles.length === 0 ? 1 : mobiles[mobiles.length - 1].id + 1;

  // create a new post:
  const newMobile = new Mobile(
    newId,
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
  );

  // push the post:
  mobiles.push(newMobile);

  return new Promise((resolve) => resolve(newMobile));
};

// DELETE METHOD:
exports.deleteMobile = (id) => {
  let index = -1;

  for (let i in mobiles) {
    if (mobiles[i].id == id) {
      index = i;
      break;
    }
  }

  return new Promise((resolve, reject) => {
    if (index > -1) {
      const mobile = mobiles.splice(index, 1);
      resolve(mobile);
    } else {
      reject();
    }
  });
};

// UPDATE METHOD:
exports.updateMobile = () => {};
