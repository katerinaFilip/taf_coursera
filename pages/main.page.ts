import Page from './page';
import DriverUtils from '../utils/driver.utils';

class MainPage extends Page {
    get searchInput () { return $('//form[@class="search-form"]//input');}
    get searchButton () { return  $('//button[contains(@class,"search-button")]');}
    get exploreButton () { return  $('//button[contains(@class, "Explore")]');}

    async enterSearchQuery (searchQuery: string) {
        await (await this.searchInput).setValue(searchQuery);
    }

    async pressSearchButton () {
        await DriverUtils.clickElementWithJS(await this.searchButton);
    }

    async pressExploreButton() {
        await DriverUtils.clickElement(await this.exploreButton);
    }
}

export default new MainPage();
