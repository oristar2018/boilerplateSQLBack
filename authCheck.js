function authCheck() {
	const db = require("./sequelize/config");
	db.authenticate()
		.then(() => {
			console.log('db is up and running, starting app');
			const express = require("express");
			const app = express();
			const dotEnv = require("dotenv").config();
			const bodyParser = require("body-parser");
			const cors = require("cors");
			const db = require("./sequelize/config");
			const session = require("express-session");
			const passport = require("passport");
			// initalize sequelize with session store
			const SequelizeStore = require("connect-session-sequelize")(
				session.Store
			);

			var store = new SequelizeStore({
				db
			});

			app.set("view engine", "ejs");
			app.use(bodyParser.urlencoded({ extended: true }));
			app.use(bodyParser.json());
			app.use(require("body-parser").text());
			app.use(
				session({
					secret: "keyboard cat",
					store,
					resave: false,
					saveUninitialized: false,
					cookie: { maxAge: 24 * 60 * 60 * 1000 }
				})
			);

			store.sync();

			app.use(passport.initialize());
			app.use(passport.session());
			app.use(express.static("public"));
			app.use(
				cors({
					origin: ["http://localhost:3000", "http://localhost:8888"],
					credentials: true
				})
			);
			app.use("/users", require("./routes/routes"));

			db.authenticate()
				.then(() => console.log("connected"))
				.catch(err => console.log(err));

			app.get("/", (req, res) => {
				res.render("render1");
			});

			const port = 8888;

			app.listen(port);
		})
		.catch(err => {
			console.log(err);
			if (err) {
				setTimeout(() => {
					authCheck();
				}, 1000);
			}
		});
}

module.exports = authCheck;