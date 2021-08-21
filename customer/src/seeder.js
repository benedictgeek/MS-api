const seeder = require("mongoose-seed");

module.exports.seedCustomer = () => {};
const seedData = [
  {
    model: "Customer",
    documents: [
      {
        _id: "611ff007d43bca5d365ad299",
        name: "Olushola Dauda",
        email: "olushola251@gmail.com",
        phone: "08139194625",
      },
    ],
  },
];

seeder.connect(process.env.mongodbUri, () => {
  seeder.loadModels(["./src/customer.model.js"]);
  seeder.clearModels(["Customer"], () => {
    console.log("Customer collection cleared");
  });
  seeder.populateModels(seedData, (err, done) => {
    if (err) {
      console.log("Something went wrong while seeding Customer data");
    }

    seeder.disconnect();
  });
});
