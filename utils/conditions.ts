export default class CustomCondition { 
  static elementsArrayIsNotEmpty  = async (elementsLocator: string) => {
    return (await $$(elementsLocator)).length !== 0;
  };

  static elementIsExpanded = async (element: WebdriverIO.Element) => {
    const EXPANDED_ATTRIBUTE = "aria-expanded";
    
    return (await element.getAttribute(EXPANDED_ATTRIBUTE)) === "true";
  };
}
  