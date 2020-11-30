//log terminal in coommit

describe('should HW_1', () => {
  it('1 Зайти на сайт https://webdriver.io', () => {
      //1 Зайти на сайт https://webdriver.io
      browser.url('https://webdriver.io');
  });

  it('2 Кликнуть на кнопку сверху странички "API" (использовать локатор "li a[href="/docs/api.html"]")', () => {
    //2 Кликнуть на кнопку сверху странички "API" (использовать локатор "li a[href="/docs/api.html"]")
    const blogButton = $('li a[href="/docs/api.html"]');
    blogButton.click();
  });

  it('3 Напечатать в "Terminal" Visual Studio Code текущий адрес в страке браузера( console.log(...))', () => {
    //3 Напечатать в "Terminal" Visual Studio Code текущий адрес в страке браузера( console.log(...))
      console.log("The URL now is: " + browser.getUrl());
  });

  it('4 Распечатать заглавие странички( использовать локатор ".postHeaderTitle")', () => {
    //4 Распечатать заглавие странички( использовать локатор ".postHeaderTitle")
    let postHeaderTitle = $('.postHeaderTitle');
    console.log("The header title post is: " + postHeaderTitle.getText());
    browser.pause(2000);
  });

  it('//5 Распечатать атрибут href элемента (использовать локатор "\/\/*[text()="JSONWire protocol"]")', () => {
    //5 Распечатать атрибут href элемента (использовать локатор "\/\/*[text()="JSONWire protocol"]")
    let text_json = $('//*[text()="JSONWire protocol"]');
    let attr = text_json.getAttribute('href');
    console.log("The attribute is: " + attr);
  });

  it('6 Напечатать текст "test is " в строке поиска (использовать локатор "#search_input_react")', () => {
    //6 Напечатать текст "test is " в строке поиска (использовать локатор "'#search_input_react'")
    let input = $('#search_input_react');
    input.setValue('test is ');
  });

  it('7 Добавить к существующему тексту в строке поиска тест "DONE!"  (использовать локатор "#search_input_react")', () => {
    //7 Добавить к существующему тексту в строке поиска тест "DONE!"  (использовать локатор "'#search_input_react'")
    input.addValue('DONE!');
  });

  it('8 Сделать паузу в тесте на 5 секунд.', () => {
    //8 Сделать паузу в тесте на 5 секунд.
    browser.pause(5000);
  });

});
