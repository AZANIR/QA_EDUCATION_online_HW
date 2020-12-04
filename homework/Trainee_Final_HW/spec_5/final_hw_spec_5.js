const menuElements = require('../final_hw/menuelements.page5.js');



<<<<<<< HEAD
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
=======
describe.only('restore password https://github.com page with not credentials and credentials data', () => {
  it.only('Load GitHub page and hover menu and check hovered menu elements', () => {
    browser.setWindowSize(1440, 900);//прищлось добавить разрешение окна изза 
    browser.url('https://github.com/');
    browser.pause(5000);

  });

  it.only('Move to elements and see is a visible ', () => {
    menuElements.elementHover1();
    browser.pause(1000);
    console.log("First element hover is: " + menuElements.elementHoverDysplaied1());
    browser.pause(1000);
    menuElements.elementHover2();
    browser.pause(2000);
    console.log("First element hover is: " + menuElements.elementHoverDysplaied2());
    browser.pause(1000);
    menuElements.elementHover3();
    browser.pause(2000);
    console.log("First element hover is: " + menuElements.elementHoverDysplaied3());
    browser.pause(1000);
>>>>>>> 9456e521f196bdb99c33b8a0d05e8bfe59391890
    });

});