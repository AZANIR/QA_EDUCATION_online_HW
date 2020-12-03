describe('test cases github.io', () => {
  it.skip('1. go to GitHab get title text and output in console', () => {
    browser.url('https://github.com');
    let elem = $("//h1[contains(text(),'developers')]");
    console.log("Title text is: " + elem.getText());
  });

  it.skip('2. go to GitHab check visible status link https://twitter.com/github and output result in console', () => {
    browser.url('https://github.com');
    let twitterLink = $('[href="https://twitter.com/github"]').isDisplayedInViewport();
    console.log("IS  isDisplayedInViewor ?: "+  twitterLink);
    let linkToScroll = $('[href="https://twitter.com/github"]');
    linkToScroll.scrollIntoView();
    let isGitHubDisplayedInViewPort = $('[href="https://twitter.com/github"]').isDisplayedInViewport();
    console.log("IS  isGitHubDisplayedInViewPor ?: "+ isGitHubDisplayedInViewPort);
  });

  it.skip('3. go to GitHab find the button home in the footer and click', () => {
    browser.url('https://github.com');
    let element = $('footer [aria-label*=homepage]');
    element.scrollIntoView();
    browser.pause(3000);
    element.click();
    browser.pause(3000);
  });

  it.skip('4. go to https://github.blog/ find the category block and get screenshot', () => {
    browser.url('https://github.blog');
    let element = $('#tns1-item0 div');
    element.saveScreenshot('categoryScreenshot.png');
  });

  it.only('5. signIn to GitHab with valid credentials', () => {
    browser.url('https://github.com/login');
    let loginField = $('#login_field');
    loginField.setValue('testuserwb');
    let passField = $('#password');
    passField.setValue('xWMnaha7e6MQXge');
    let submitButton = $('input[type="submit"]');
    submitButton.click();
    browser.pause(3000);
  });

});