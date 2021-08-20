const seeder = require("mongoose-seed");
const { mongodbUri } = require("../sharedCredentials");

seeder.connect(mongodbUri, () => {
  seeder.clearModels(["Customer"]);
  seeder.populateModels(seedData, (err, done) => {
    if (err) {
      console.log("Something went wrong while seeding Customer data");
    }

    seeder.disconnect();
  });
});

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
