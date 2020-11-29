//log terminal in coommit
let attr = "";

describe('should HW_2', () => {
  it('1 Перейти на страничку https://webdriver.io/docs/api.html', () => {
      //1. Перейти на страничку https://webdriver.io/docs/api.html
      browser.url('https://webdriver.io/docs/api.html');
  });

  it('2. Открыть ссылку \/\/*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера', () => {
    //2. Открыть ссылку \/\/*[text()="JSONWire protocol"] в новой Табе(используем getAttribute() и newWindow()) браузера
    let href_json = $('//*[text()="JSONWire protocol"]');
    attr = href_json.getAttribute('href');
    browser.newWindow(attr);
  });
  
  it('3. Переключиться на открытую табу', () => {
    //3. Переключиться на открытую табу
    browser.pause(2000);
    browser.switchWindow(attr);
  });

  it('4. Проверить, что элемент \'strong a[href="/SeleniumHQ/selenium/wiki"]\' видимый пользователю (isDisplayed). Результат вывести через consle.log()', () => {
    //4. Проверить, что элемент 'strong a[href="/SeleniumHQ/selenium/wiki"]' видимый пользователю (isDisplayed). Результат вывести через consle.log()
    const SeleniumHQ = $('[href="/blog/"]');
    let displayed = SeleniumHQ.isDisplayed();
    console.log("IS displayed ?: "+ displayed);
  });

  it('5. Переключаемся назад на Табу https://webdriver.io/docs/api.html', () => {
    //5. Переключаемся назад на Табу 'https://webdriver.io/docs/api.html'
    browser.pause(2000);
    browser.switchWindow('https://webdriver.io/docs/api.html');
  });

  it('6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"', () => {
    //6. Используя метод waitUntil ждем пока текст, который содержиться в элементе ".postHeaderTitle" (используем метод getText())равен "API Docs"
    browser.waitUntil(() =>  
      $('.postHeaderTitle').getText() === "API Docs",
      { 
        timeout: 5000,
        timeoutMsg: 'API Docs is not displayed'
      });
  });

  it('7. Делаем скриншот элемента ".postHeaderTitle"', () => {
    //7. Делаем скриншот элемента ".postHeaderTitle"
    const elem = $('.postHeaderTitle');
    elem.saveScreenshot('postHeaderTitle.png');
  });

  it('8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора \'href="https://twitter.com/webdriverio"\'', () => {
    //8. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    const twiterLink = $('[href="https://twitter.com/webdriverio"]');
    let displayed = twiterLink.isDisplayed();
    console.log("TwiterLink is displayed ?: "+ displayed);
  });

  it('9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора \'href="https://twitter.com/webdriverio"\'', () => {
    //9. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    let  twiterisDisplayedInViewPort = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log("IS  twiterisDisplayedInViewPort displayed?: "+  twiterisDisplayedInViewPort);
  });

  it('10. Скролим к элементу \'href="https://twitter.com/webdriverio"\'', () => {
    //10. Скролим к элементу 'href="https://twitter.com/webdriverio"'
    const twiterLink = $('[href="https://twitter.com/webdriverio"]');
    browser.pause(4000);
    twiterLink.scrollIntoView();
    browser.pause(3000);
  });

  it('11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора \'href="https://twitter.com/webdriverio"\'', () => {
    //11. Печатаем результат выполнения команды isDisplayed() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    const twiterLink = $('[href="https://twitter.com/webdriverio"]');
    let displayed = twiterLink.isDisplayed();
    console.log("TwiterLink2 is displayed ?: "+ displayed);
  });

  it('12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора \'href="https://twitter.com/webdriverio"\'', () => {
    //12. Печатаем результат выполнения команды isDisplayedInViewPort() в консоль для локатора 'href="https://twitter.com/webdriverio"'
    let  twiterisDisplayedInViewPort = $('[href="https://twitter.com/webdriverio"]').isDisplayedInViewport();
    console.log("IS  twiterisDisplayedInViewPort2 displayed?: "+  twiterisDisplayedInViewPort);
  });

  it('13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"', () => {
    //13. Печатаем результат выполнения команды isFocused для локатора href="/blog/"
    let blogButton = $('[href="/blog/"]');
    console.log("blogButton.isFocused() before click: " + blogButton.isFocused());
  });

  it('14. Кликаем по локатору  href="/blog/"', () => {
    //14. Кликаем по локатору  href="/blog/"
    $('[href="/blog/"]').click();
    browser.pause(2000);
  });

  it('15. Выводим результат выполнения команды isFocused для локатора href="/blog/"', () => {
    //15. Выводим результат выполнения команды isFocused для локатора href="/blog/"
    let blogButton = $('[href="/blog/"]');
    console.log("blogButton.isFocused() after click: " + blogButton.isFocused());
  });

});