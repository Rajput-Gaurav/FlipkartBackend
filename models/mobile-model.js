// import mongoose:
const mongoose = require("mongoose");

// create a Schema or Structure of data:
const MobileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    reviewCounter: { type: String },
    reviews: { type: String },
    price: { type: String, required: true },
    ratingCounter: { type: String },
    rating: { type: String },
    avg: { type: String },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
    image5: { type: String },
    image6: { type: String },
    productname1: { type: String },
    productdescription1: { type: String },
    productname2: { type: String },
    productdescription2: { type: String },
    productname3: { type: String },
    productdescription3: { type: String },
    productname4: { type: String },
    productdescription4: { type: String },
    productname5: { type: String },
    productdescription5: { type: String },
    productname6: { type: String },
    productdescription6: { type: String },
    InTheBox: { type: String },
    ModelNumber: { type: String },
    ModelName: { type: String },
    Color: { type: String },
    BrowseType: { type: String },
    SimType: { type: String },
    HybridSim: { type: String },
    TouchScreen: { type: String },
    OtgCompatible: { type: String },
    SoundEnhancements: { type: String },
    DisplaySize: { type: String },
    Resolution: { type: String },
    ResolutionType: { type: String },
    Gpu: { type: String },
    DisplayType: { type: String },
    OtherDisplayDeature: { type: String },
    OperatingSystem: { type: String },
    ProcessorType: { type: String },
    ProcessorCore: { type: String },
    PrimaryClockSpeed: { type: String },
    OperatingFrequency: { type: String },
    InternalStorage: { type: String },
    Ram: { type: String },
    ExpandableStorage: { type: String },
    PrimaryCameraAvailable: { type: String },
    PrimaryCamera: { type: String },
    SecondaryCameraAvailable: { type: String },
    SecondaryCamera: { type: String },
  },
  { timestamps: true }
);

// create a model:
const Mobile = mongoose.model("Mobile", MobileSchema);

module.exports = Mobile;

// create a Mobile-Model class:
// const MobileDescModel = require("../models/mobile-desc-model");
// class MobileModel {
//   constructor(
//     id,
//     name,
//     description,
//     image,
//     reviewCounter,
//     reviews,
//     price,
//     ratingCounter,
//     rating,
//     avg,
//     extraImages,

//for product Description:
// id,
// image1,
// image2,
// image3,
// image4,
// image5,
// image6,
// image7,
// image8,
// productname1,
// productdescription1,
// productname2,
// productdescription2,
// productname3,
// productdescription3,
// productname4,
// productdescription4,
// productname5,
// productdescription5,
// productname6,
// productdescription6,
// productname7,
// productdescription7,
// productname8,
// productdescription8,
// for product Specification:
// General:
// InTheBox,
// ModelNumber,
// ModelName,
// Color,
// BrowseType,
// SimType,
// HybridSim,
// TouchScreen,
// OtgCompatible,
// SoundEnhancements,
// // Display Features:
// DisplaySize,
// Resolution,
// ResolutionType,
// Gpu,
// DisplayType,
// OtherDisplayFeature,
// OS & Processor Features:
// OperatingSystem,
// ProcessorType,
// ProcessorCore,
// PrimaryClockSpeed,
// OperatingFrequency,
// Memory & STorage Feature:
// InternalStorage,
// Ram,
// ExpandableStorage,
// Camera Feature:
// PrimaryCameraAvailable,
// PrimaryCamera,
// SecondaryCameraAvailable,
// SecondaryCamera
// ) {
//   this.id = id;
//   this.name = name;
//   this.description = description;
//   this.image = image;
//   this.reviewCounter = reviewCounter;
//   this.reviews = reviews;
//   this.price = price;
//   this.ratingCounter = ratingCounter;
//   this.rating = rating;
//   this.avg = avg;
//   this.extraImages = extraImages;

//Product Description:
// this.id = id;
// this.image1 = image1;
// this.image2 = image2;
// this.image3 = image3;
// this.image4 = image4;
// this.image5 = image5;
// this.image6 = image6;
// this.image7 = image7;
// this.image8 = image8;
// this.productname1 = productname1;
// this.productdescription1 = productdescription1;
// this.productname2 = productname2;
// this.productdescription2 = productdescription2;
// this.productname3 = productname3;
// this.productdescription3 = productdescription3;
// this.productname4 = productname4;
// this.productdescription4 = productdescription4;
// this.productname5 = productname5;
// this.productdescription5 = productdescription5;
// this.productname6 = productname6;
// this.productdescription6 = productdescription6;
// this.productname7 = productname7;
// this.productdescription7 = productdescription7;
// this.productname8 = productname8;
// this.productdescription8 = productdescription8;
// General:
// this.InTheBox = InTheBox;
// this.ModelName = ModelName;
// this.ModelNumber = ModelNumber;
// this.Color = Color;
// this.BrowseType = BrowseType;
// this.SimType = SimType;
// this.HybridSim = HybridSim;
// this.TouchScreen = TouchScreen;
// this.OtgCompatible = OtgCompatible;
// this.SoundEnhancements = SoundEnhancements;
// Display Features:
// this.DisplaySize = DisplaySize;
// this.Resolution = Resolution;
// this.ResolutionType = ResolutionType;
// this.Gpu = Gpu;
// this.DisplayType = DisplayType;
// this.OtherDisplayFeature = OtherDisplayFeature;
// OS & Processor Features:
// this.OperatingSystem = OperatingSystem;
// this.ProcessorType = ProcessorType;
// this.ProcessorCore = ProcessorCore;
// this.PrimaryClockSpeed = PrimaryClockSpeed;
// this.OperatingFrequency = OperatingFrequency;
// Memory & Storage Feature
// this.InternalStorage = InternalStorage;
// this.Ram = Ram;
// this.ExpandableStorage = ExpandableStorage;
// Camera Feature:
//     this.PrimaryCameraAvailable = PrimaryCameraAvailable;
//     this.PrimaryCamera = PrimaryCamera;
//     this.SecondaryCameraAvailable = SecondaryCameraAvailable;
//     this.SecondaryCamera = SecondaryCamera;
//   }
// }

// export the class:
// module.exports = MobileModel;
