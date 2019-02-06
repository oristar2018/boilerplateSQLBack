const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const auththree = require("../sequelize/model");

passport.serializeUser(function(user, done) {
	done(null, user.userId);
});

passport.deserializeUser(async function(userId, done) {
	try {
		const user = await auththree
			.findOne({ where: { userId: userId } })
			.then(docs => docs);
		return done(null, user);
	} catch (error) {
		return done(error, false, error.message);
	}
});

passport.use(
	new LocalStrategy({}, async function(username, password, done) {
		console.log(username);
		try {
			let userId = parseInt(username);
			const user = await auththree
				.findOne({ where: { userId: userId } })
				.then(docs => docs);
			//console.log("signInPassport", user, username, password);
			if (user === undefined || user === null) {
				return done(null, false);
			}
			//console.log(user)
			const isMatch = await user.isPasswordValid(password);
			console.log(isMatch, "isMatch");
			if (!isMatch) {
				return done(null, false);
			}

			done(null, user);
		} catch (error) {
			console.log(error);
			done(error, false);
		}
	})
);