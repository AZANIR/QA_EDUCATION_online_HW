const {Given, Then, When} = require('cucumber')

Given(/^I go to "([^"]*)"$/,(url)=>{
      browser.url(url)
  });

When(/I click on button/, () => {
  $('header a[href="/"]').click();
});
Then(/I should see redirect/, ()=>{
    browser.pause(3000);
  })
