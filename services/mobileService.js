// mobile data services:
const Mobile = require("../models/mobile-model");
// const mobiles = require("../data-sorce/mobile-data");

// use Promise:
// GET METHOD:
exports.getMobile = () => {
  return Mobile.find();
};

// GET METHOD FOR GETTING ID:
exports.getSingleMobile = (id) => {
  return Mobile.findById(id);
  // let mobile = null;

  // for (let i in mobiles) {
  //   if (mobiles[i].id == id) {
  //     mobile = mobiles[i];
  //     break;
  //   }
  // }
  // return new Promise((resolve, reject) => {
  //   if (mobile) {
  //     resolve(mobile);
  //   } else {
  //     reject();
  //   }
  // });
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
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
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
  // DisplayType,
  OtherDisplayFeature,
  OperatingSystem,
  ProcessorType,
  InternalStorage,
  PrimaryCameraAvailable,
  PrimaryCamera,
  SecondaryCameraAvailable,
  SecondaryCamera
) => {
  // const newId = mobiles.length === 0 ? 1 : mobiles[mobiles.length - 1].id + 1;

  // create a instance of Mobile model:
  const mobile = new Mobile();

  // create a new post:
  // const newMobile = new Mobile(

  // newId,
  mobile.name = name;
  mobile.description = description;
  mobile.image = image;
  mobile.reviewCounter = reviewCounter;
  mobile.reviews = reviews;
  mobile.price = price;
  mobile.ratingCounter = ratingCounter;
  mobile.rating = rating;
  mobile.avg = avg;
  mobile.image1 = image1;
  mobile.image2 = image2;
  mobile.image3 = image3;
  mobile.image4 = image4;
  mobile.image5 = image5;
  mobile.image6 = image6;
  mobile.productname1 = productname1;
  mobile.productdescription1 = productdescription1;
  mobile.productname2 = productname2;
  mobile.productdescription2 = productdescription2;
  mobile.productname3 = productname3;
  mobile.productdescription3 = productdescription3;
  mobile.productname4 = productname4;
  mobile.productdescription4 = productdescription4;
  mobile.productname5 = productname5;
  mobile.productdescription5 = productdescription5;
  mobile.productname6 = productname6;
  mobile.productdescription6 = productdescription6;
  mobile.InTheBox = InTheBox;
  mobile.ModelName = ModelName;
  mobile.ModelNumber = ModelNumber;
  mobile.Color = Color;
  mobile.BrowseType = BrowseType;
  mobile.SimType = SimType;
  mobile.HybridSim = HybridSim;
  mobile.TouchScreen = TouchScreen;
  mobile.OtgCompatible = OtgCompatible;
  mobile.SoundEnhancements = SoundEnhancements;
  mobile.DisplaySize = DisplaySize;
  mobile.Resolution = Resolution;
  mobile.ResolutionType = ResolutionType;
  mobile.Gpu = Gpu;
  // mobile.DisplayType = DisplaySize;
  mobile.OtherDisplayFeature = OtherDisplayFeature;
  mobile.OperatingSystem = OperatingSystem;
  mobile.ProcessorType = ProcessorType;
  mobile.InternalStorage = InternalStorage;
  mobile.PrimaryCameraAvailable = PrimaryCameraAvailable;
  mobile.PrimaryCamera = PrimaryCamera;
  mobile.SecondaryCameraAvailable = SecondaryCameraAvailable;
  mobile.SecondaryCamera = SecondaryCamera;

  return mobile.save();
  // );

  // push the post:
  // mobiles.push(newMobile);

  // return new Promise((resolve) => resolve(newMobile));
};

// DELETE METHOD:
exports.deleteMobile = (id) => {
  return Mobile.findByIdAndDelete(id);
  // let index = -1;

  // for (let i in mobiles) {
  //   if (mobiles[i].id == id) {
  //     index = i;
  //     break;
  //   }
  // }

  // return new Promise((resolve, reject) => {
  //   if (index > -1) {
  //     const mobile = mobiles.splice(index, 1);
  //     resolve(mobile);
  //   } else {
  //     reject();
  //   }
  // });
};

// UPDATE METHOD:
exports.updateMobile = () => {};
