describe('should HW', () => {
  it('should have the right title', () => {
      //1 Зайти на сайт https://webdriver.io
      browser.url('https://webdriver.io');
      //2 Кликнуть на кнопку сверху странички "API" (использовать локатор "li a[href="/docs/api.html"]")
      const blogButton = $('li a[href="/docs/api.html"]');
      blogButton.click();
      //3 Напечатать в "Terminal" Visual Studio Code текущий адрес в страке браузера( console.log(...))
      console.log("The URL now is: " + browser.getUrl());
      //4 Распечатать заглавие странички( использовать локатор ".postHeaderTitle")
      let postHeaderTitle = $('.postHeaderTitle');
      console.log("The header title post is: " + postHeaderTitle.getText());
      browser.pause(2000);
      //5 Распечатать атрибут href элемента (использовать локатор "//*[text()="JSONWire protocol"]")
      let text_json = $('//*[text()="JSONWire protocol"]');
      let attr = text_json.getAttribute('href');
      console.log("The attribute is: " + attr); // outputs: "Search"
      //6 Напечатать текст "test is " в строке поиска (использовать локатор "'#search_input_react'")
      let input = $('#search_input_react');
      input.setValue('test is ');
      //7 Добавить к существующему тексту в строке поиска тест "DONE!"  (использовать локатор "'#search_input_react'")
      input.addValue('DONE!');
      //8 Сделать паузу в тесте на 5 секунд.
      browser.pause(5000);
  });

});
