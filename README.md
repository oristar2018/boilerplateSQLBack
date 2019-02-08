# Boilerplate for SQL Environment

beta 1.00 ready for download


## Environment 

This boilerplate will be written using Javascript in the NodeJS environment, using the POSTGRESQL and Express.

Click [here](https://nodejs.org/en/download/) to download and install NodeJS.

The package manager npm will be installed with it.

I recommend the use of [Chocolatey](https://chocolatey.org/) to install NodeJS.

### Unit testing and functional testing

The unit tests will be written and conducted with Jest.

They will test the class we use to create account objects.

The functional tests will be written with Cucumber-JS.

They will simulate all of the application process (Account creation => log in => logout => account deletion) in real-time via endpoint testing.


## Installation

To install the boilerplate, simply run this from your CLI:

``` npm run bpSqlInstall ```

To tear down the app, run: 

``` docker-compose down ```

Finally, to run the tests : 

``` npm test ```