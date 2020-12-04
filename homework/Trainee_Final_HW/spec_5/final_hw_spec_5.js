const menuElements = require('../final_hw/menuelements.page5.js');



describe.only('Load GitHub page and hover menu and check hovered menu elements', () => {
  it.only('Load GitHub page', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/');
  });

  it.only('hover menu and check hovered menu elements', () => {
    menuElements.elementHover1();
    console.log("First element hover is: " + menuElements.elementHoverDysplaied1());
    menuElements.elementHover2();
    console.log("First element hover is: " + menuElements.elementHoverDysplaied2());
    menuElements.elementHover3();
    console.log("First element hover is: " + menuElements.elementHoverDysplaied3());
    });

});