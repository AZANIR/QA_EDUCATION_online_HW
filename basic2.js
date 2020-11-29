//$ npx wdio wdio.conf.js

describe('webdriver.io', () => {
  it('should detect if an element is clikable', () => {
      browser.url('https://webdriver.io');
      const blogButton = $('[href="/blog/"]');
      let clickable = blogButton.isClickable();
      console.log("IS Clicable?: "+ clickable);
  });

  it('should detect if an element is displayed', () => {
    browser.url('https://webdriver.io');
    const blogButton = $('[href="/blog/"]');
    let displayed = blogButton.isDisplayed();
    console.log("IS displayed ?: "+ displayed);
  });

  it('should detect if an element is clikable', () => {
    browser.url('https://webdriver.io');
    let  isDisplayedInViewPort = $('[href="/blog/"]').isDisplayedInViewport();
    console.log("IS  isDisplayedInViewor ?: "+  isDisplayedInViewPort);

    let  isGitHubDisplayedInViewPort = $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
    console.log("IS  isGitHubDisplayedInViewPor ?: "+ isGitHubDisplayedInViewPort);
  });

  it('should detect if an element is enabled', () => {
    browser.url('https://webdriver.io');
    const blogButton = $('[href="/blog/"]');
    let isEnabled = blogButton.isEnabled();
    console.log("IS Enabled ?: "+ isEnabled);
  });

  it('should detect the focus an element', () => {
    browser.url('https://webdriver.io');
    const input = $('#search_input_react');
    console.log("search.isFocused() before click: " + input.isFocused());
    browser.pause(2000);
    input.click();
    console.log("search.isFocused() after click: " + input.isFocused());
    browser.pause(2000);
  });

  it('should move to element', () => {
    browser.url('https://webdriver.io');
    const gitHubLink = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
    browser.pause(4000);
    gitHubLink.scrollIntoView();
    browser.pause(3000);
  });

  it('should save screenshot of the browser view', () => {
    browser.url('https://webdriver.io');
    const elem = $('#footer [href="https://github.com/webdriverio/webdriverio"]');
    elem.saveScreenshot('elemScreenshot.png');
  });

  it('should switch to another window', () => {
    browser.url('https://google.com');
    browser.newWindow('https://webdriver.io');
    browser.pause(2000);
    browser.switchWindow('google.com');
    browser.pause(2000);
  });

  it('should wait until', () => {
    browser.url('https://webdriver.io');
    browser.waitUntil(() => { 
      return $('[href="/blog/"]').isDisplayed();
    }, 5000, 'blog is not displayed');
  });

  it('should get html for certain elements', () => {
    browser.url('https://webdriver.io/docs/api.html');
    var outerHTML = $('.siteNavGroupActive').getHTML();
    console.log("outerHTML: " + outerHTML);
    
    var innerHTML = $('.siteNavGroupActive').getHTML(false);
    console.log("innerHTML: " + innerHTML);
  });

});