import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
});

const ProductModel = model("Product", productSchema);

export const aggregateProduct = async () => {
  try {
    await ProductModel.deleteMany({});

    await ProductModel.create({
      name: "iPhone 12",
      price: 1000,
      category: "Phones",
    }),
      await ProductModel.create({
        name: "iPhone 13",
        price: 2000,
        category: "Phones",
      }),
      await ProductModel.create({
        name: "iPhone 14",
        price: 3000,
        category: "Phones",
      }),
      await ProductModel.create({
        name: "Macbook",
        price: 4000,
        category: "Laptops",
      }),
      await ProductModel.create({
        name: "Macbook",
        price: 5000,
        category: "Laptops",
      });

    const result = await ProductModel.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$price" }, //suma el total de los precios de todos los productos
          avg: { $avg: "$price" }, //average = valor promedio
          count: { $sum: 1 },
        },
      },
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
