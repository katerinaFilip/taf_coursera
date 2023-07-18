import DriverUtils from '../utils/driver.utils';
import Waits from '../utils/waits';
import Page from './page';

class SearchResultsPage extends Page {
    readonly SEARCH_RESULTS_LOCATOR = '//li[@class="ais-InfiniteHits-item"]';

    get searchResults () { return $$(this.SEARCH_RESULTS_LOCATOR) }
    get firstSearchResult() { return $(this.SEARCH_RESULTS_LOCATOR + '[1]') }

    async getProductTab(name: string) { return await $(`//*[text()='${name}']`); }
    async getFilter(name: string) { return await $(`//div[@aria-label='${name} Filter']`); }
    async getFilterOption (name: string) { return await $(`//div[@aria-label='${name}']//button`); }

    async clickOnFirstSearchResult(){        
        const searchResultLink = await (await this.firstSearchResult).$('(.//a|.//h2)');

        await DriverUtils.clickElement(searchResultLink);
    }

    async clickOnProductTab(tabName: string) {
        await DriverUtils.clickElement(await this.getProductTab(tabName));
    }

    async openFilterOptions(filterName: string) {
        const filter = await this.getFilter(filterName);
        const filterLabel = await filter.$("./ancestor::div[@class='Select-control']");

        await DriverUtils.clickElement(filterLabel);
        await Waits.untilElementWillBeExpanded(filter);
    }

    async checkFilterOption(optionName: string) {
        await DriverUtils.clickElement(await this.getFilterOption(optionName));
    }

    async getSearchResultsLabelValues(label: string) {
        await Waits.untilElementsArrayWillNotBeEmpty(this.SEARCH_RESULTS_LOCATOR);

        const searchResultElements = await this.searchResults;
        const labelValues = await Promise.all(searchResultElements.map(async(element) => {
            const labelElement = await element.$(`(.//div|.//span)[contains(@class, '${label}')]`);
            return await labelElement.getText();
        }, label));

        return labelValues;
    } 
}

export default new SearchResultsPage();