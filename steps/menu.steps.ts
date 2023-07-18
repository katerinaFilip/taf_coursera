import { When } from '@cucumber/cucumber';
import degreesPage from '../pages/degrees.page';
import mainPage from '../pages/main.page';
import menuPage from '../pages/menu.page';

When(/^user clicks Explore button at the header$/, async () => {
    await mainPage.pressExploreButton();
});

When(/^user clicks "([^"]*)" option at the Goals section of the menu$/, async (menuOptionName: string) => {
    await menuPage.chooseMenuOption(menuOptionName);
});

When(/^user clicks on the link "([^"]*)" at the Data Science section of the Degree menu$/, async(linkText: string) => {
    await menuPage.followViewAllLink(linkText);
});

When(/^user clicks "([^"]*)" button at the 'Explore more degrees by category' section$/, async (degreeCategoryName: string) => {
    await degreesPage.clickOnDegreeCategoryButton(degreeCategoryName);
});


