import Waits from '../utils/waits';

export default class DriverUtils { 
  static clickElementWithJS = async (element: WebdriverIO.Element) => {    
    await Waits.untilElementWillBeClickable(element);
    await browser.executeScript("arguments[0].click()", [element]);
  };

  static clickElement = async (element: WebdriverIO.Element) => {    
    await Waits.untilElementWillBeClickable(element);
    await element.click();
  };

  static swithToNextTab = async () => {
    let handles = await browser.getWindowHandles();
    if (handles.length > 1) {
      let currentHandle = await browser.getWindowHandle();
      let tabIndex = (handles.indexOf(currentHandle)) + 1;
      await browser.switchToWindow(handles[tabIndex]);
    };
  };
}
