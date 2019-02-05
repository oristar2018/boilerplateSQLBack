const express = require("express");
const router = require("express-promise-router")();
const db = require("../sequelize/config");
const auththree = require("../sequelize/model");
const createAccount = require("../createAccountClass");

router.route("/").get((req, res, next) => {
	var Docs;
	auththree
		.findAll()
		.then(docs => {
			console.log(docs);

			Docs = docs;
		})
		.catch(err => console.log(err));

	res.json(Docs);
});

router.route("/signup").post((req, res, next) => {
	const accountObject = new createAccount(req.body.name)
		.setFirstName(req.body.firstName)
		.setUserId(req.body.userId)
		.setPassword(req.body.password);

	auththree
		.create(accountObject)
		.then(docs => {
			res.redirect("/");
		})
		.catch(err => console.log(err));
});

module.exports = router;