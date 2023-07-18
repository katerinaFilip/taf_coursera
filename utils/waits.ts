import CustomCondition from './conditions';

export default class Waits {
  static untilElementWillBeClickable = async (element: WebdriverIO.Element) => {
    await element.waitForExist();
    await element.waitForClickable();
  }

  static untilElementsArrayWillNotBeEmpty = async (elementsLocator: string) => {
    await browser.waitUntil(() => CustomCondition.elementsArrayIsNotEmpty(elementsLocator));
  }

  static untilElementWillBeExpanded = async (element: WebdriverIO.Element) => {
    await browser.waitUntil(() => CustomCondition.elementIsExpanded(element));
  }
}
