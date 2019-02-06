module.exports = {
	signIn: async (req, res, next) => {
		try {
			if (req.user) {
				console.log("logged in", req.user);
				res.redirect("/");
			} else {
				res.json("user not found or password invalid");
			}
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	}
};