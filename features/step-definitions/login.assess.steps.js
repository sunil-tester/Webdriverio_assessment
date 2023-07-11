const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^user on login page$/, () => {
    await pages[page].open()

});

When(/^user enters username and password$/, () => {
	return true;
});

When(/^click on login button$/, () => {
	return true;
});

Then(/^navigate to home page$/, () => {
	return true;
});
