const express = require("express");
const router = require("express-promise-router")();
const db = require("../sequelize/config");
const auththree = require("../sequelize/model");
const createAccount = require("../createAccountClass");
const { signIn } = require('../controllers/signin');
const passportConf = require('../passport/passportConf')
const passport = require('passport');

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


router.route("/signin").post(
(req, res, next) => {
	console.log(req.body);
	req.body.username = req.body.userId;
	next()

},
passport.authenticate("local", { session: true }),
  signIn

);

module.exports = router;