import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vishal:12345@mern.r2r6z.mongodb.net/?retryWrites=true&w=majority&appName=mern"
    );

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedProducts();
