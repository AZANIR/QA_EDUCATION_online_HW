describe('webdriver.io', () => {
    it.only('should switch to another window', () => {
      browser.url('https://google.com');
      browser.newWindow('https://webdriver.io');
      browser.pause(2000);
      browser.switchWindow('google.com');
      browser.pause(2000);
    });
  
    it.only('should wait until', () => {
      browser.url('https://webdriver.io');
      browser.waitUntil(() => { 
        return $('[href="/blog/"]').isDisplayed();
      }, 5000, 'blog is not displayed');
    });
  
    it.skip('should get html for certain elements', () => {
      browser.url('https://webdriver.io/docs/api.html');
      var outerHTML = $('.siteNavGroupActive').getHTML();
      console.log("outerHTML: " + outerHTML);
      
      var innerHTML = $('.siteNavGroupActive').getHTML(false);
      console.log("innerHTML: " + innerHTML);
    });
  
  });
  