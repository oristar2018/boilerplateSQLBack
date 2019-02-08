const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const db2 = require("../../sequelize/configTest");
const auththree = require("../../sequelize/modelTest");

const createAccount = require("../../createAccountClass");

Given("a new account", function() {
  const accountObject = new createAccount("testAccount4")
    .setFirstName("testAccountFN")
    .setUserId(12345)
    .setPassword("12345");

  this.accountObject = accountObject;
});

When("I send it to the database", async function() {
  const accountObject = this.accountObject;
  console.log(accountObject);
  var Docs;

  await auththree
    .create(accountObject)
    .then(docs => {
      console.log(docs);
      Docs = docs;
      console.log(Docs, "this is the account");
    })
    .catch(err => {
      console.log(err);
    });

  if (Docs !== null || Docs !== undefined) {
    this.accountName = Docs.name;
  }
});

Then(
  "the account should be created and returned and deleted",
  async function() {
    console.log("test");
    await auththree
      .findOne({ where: { name: this.accountName } })
      .then(docs => {
        console.log(docs, "before delete");
        return docs.destroy();
      })
      .then(() => {
        console.log("deletion successful");
      })
      .catch(err => console.log(err));
  }
);