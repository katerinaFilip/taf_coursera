import DriverUtils from '../utils/driver.utils';
import Waits from '../utils/waits';
import Page from './page';

class DegreesPage extends Page {    
    readonly DEGREES_LOCATOR = '//ul[@data-e2e="degree-list"]/li';
    
    get Degrees () { return $$(this.DEGREES_LOCATOR) }
    
    async getDegreeCategoryButton (category: string) { return await $(`//p[text()='${category}']/parent::a`); }

    async clickOnDegreeCategoryButton(categoryName: string) {
        await DriverUtils.clickElement(await this.getDegreeCategoryButton(categoryName));
    }

    async getDegreesTitles(){
        await Waits.untilElementsArrayWillNotBeEmpty(this.DEGREES_LOCATOR);

        const degrees = await this.Degrees;
        const degreesTitles = await Promise.all(degrees.map(async(degreeElement) => {
            const title = await degreeElement.$(`.//strong[starts-with(@class,'font-md')]`);
            return await title.getText();
        }));

        return degreesTitles;
    }
}

export default new DegreesPage();