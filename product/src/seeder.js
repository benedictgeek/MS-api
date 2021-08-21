const seeder = require("mongoose-seed");

const seedData = [
  {
    model: "Product",
    documents: [
      {
        _id: "6120044ea9d7c5808f357c53",
        title: "Channel bag",
        sku: "123gty",
        amount: 2500,
      },
      {
        _id: "6120045f237d45e72ab35b87",
        title: "Gucci shoes",
        sku: "KIOki",
        amount: 4000,
      },
    ],
  },
];

seeder.connect(process.env.mongodbUri, () => {
  seeder.loadModels(["./src/product.model.js"]);
  seeder.clearModels(["Product"], () => {
    console.log("Product collection cleared");
  });
  seeder.populateModels(seedData, (err, done) => {
    if (err) {
      console.log("Something went wrong while seeding Products data");
    }

    seeder.disconnect();
  });
});
