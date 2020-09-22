// create a Mobile-Model class:
// const MobileDescModel = require("../models/mobile-desc-model");
class MobileModel {
  constructor(
    id,
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

    //for product Description:
    // id,
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
    productname7,
    productdescription7,
    productname8,
    productdescription8,
    // for product Specification:
    // General:
    InTheBox,
    ModelNumber,
    ModelName,
    Color,
    BrowseType,
    SimType,
    HybridSim,
    TouchScreen,
    OtgCompatible,
    SoundEnhancements,
    // Display Features:
    DisplaySize,
    Resolution,
    ResolutionType,
    Gpu,
    DisplayType,
    OtherDisplayFeature,
    // OS & Processor Features:
    OperatingSystem,
    ProcessorType,
    ProcessorCore,
    PrimaryClockSpeed,
    OperatingFrequency,
    // Memory & STorage Feature:
    InternalStorage,
    Ram,
    ExpandableStorage,
    // Camera Feature:
    PrimaryCameraAvailable,
    PrimaryCamera,
    SecondaryCameraAvailable,
    SecondaryCamera
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.reviewCounter = reviewCounter;
    this.reviews = reviews;
    this.price = price;
    this.ratingCounter = ratingCounter;
    this.rating = rating;
    this.avg = avg;
    this.extraImages = extraImages;

    //Product Description:
    // this.id = id;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
    this.image5 = image5;
    this.image6 = image6;
    this.image7 = image7;
    this.image8 = image8;
    this.productname1 = productname1;
    this.productdescription1 = productdescription1;
    this.productname2 = productname2;
    this.productdescription2 = productdescription2;
    this.productname3 = productname3;
    this.productdescription3 = productdescription3;
    this.productname4 = productname4;
    this.productdescription4 = productdescription4;
    this.productname5 = productname5;
    this.productdescription5 = productdescription5;
    this.productname6 = productname6;
    this.productdescription6 = productdescription6;
    this.productname7 = productname7;
    this.productdescription7 = productdescription7;
    this.productname8 = productname8;
    this.productdescription8 = productdescription8;
    // General:
    this.InTheBox = InTheBox;
    this.ModelName = ModelName;
    this.ModelNumber = ModelNumber;
    this.Color = Color;
    this.BrowseType = BrowseType;
    this.SimType = SimType;
    this.HybridSim = HybridSim;
    this.TouchScreen = TouchScreen;
    this.OtgCompatible = OtgCompatible;
    this.SoundEnhancements = SoundEnhancements;
    // Display Features:
    this.DisplaySize = DisplaySize;
    this.Resolution = Resolution;
    this.ResolutionType = ResolutionType;
    this.Gpu = Gpu;
    this.DisplayType = DisplayType;
    this.OtherDisplayFeature = OtherDisplayFeature;
    // OS & Processor Features:
    this.OperatingSystem = OperatingSystem;
    this.ProcessorType = ProcessorType;
    this.ProcessorCore = ProcessorCore;
    this.PrimaryClockSpeed = PrimaryClockSpeed;
    this.OperatingFrequency = OperatingFrequency;
    // Memory & Storage Feature
    this.InternalStorage = InternalStorage;
    this.Ram = Ram;
    this.ExpandableStorage = ExpandableStorage;
    // Camera Feature:
    this.PrimaryCameraAvailable = PrimaryCameraAvailable;
    this.PrimaryCamera = PrimaryCamera;
    this.SecondaryCameraAvailable = SecondaryCameraAvailable;
    this.SecondaryCamera = SecondaryCamera;
  }
}

// export the class:
module.exports = MobileModel;
