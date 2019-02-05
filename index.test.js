const createAccount = require("./createAccountClass");

var test = new createAccount("Morgan")
	.setFirstName("Freeman")
	.setUserId(5678)
	.setEmail("Morgan@morgan.com")
	.setPassword(1234)
	.setAdress("6 Morgan Road, Morgan Town")
	.setBalance(0);

it("shouldTestAccountCreation", () => {
	const mockObject = {
		name: "Morgan",
		firstName: "Freeman",
		userId: 5678,
		email: "Morgan@morgan.com",
		password: 1234,
		adress: "6 Morgan Road, Morgan Town",
		balance: 0,
		history: undefined
	};

	expect(test).toEqual(mockObject);
});