import Page from './page';
import DriverUtils from '../utils/driver.utils';
import Waits from '../utils/waits';

class MenuPage extends Page {
    private chosenMenuOption!: WebdriverIO.Element;
    async getMenuOption(name: string) { return await $(`//span[text()='${name}']/parent::*`); }
    async getViewAllLink(text: string) { return await $(`//a[text()='${text}']`); }

    async chooseMenuOption(optionName: string) {
        const menuOption = await this.getMenuOption(optionName);

        await DriverUtils.clickElement(menuOption);
        this.chosenMenuOption = menuOption;
    }

    async followViewAllLink(linkText: string){
        await Waits.untilElementWillBeExpanded(this.chosenMenuOption);
        await DriverUtils.clickElement(await this.getViewAllLink(linkText));
    }
}

export default new MenuPage();