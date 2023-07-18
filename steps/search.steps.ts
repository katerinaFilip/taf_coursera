import { When } from '@cucumber/cucumber';
import mainPage from '../pages/main.page';
import searchResultsPage from '../pages/search.results.page';


When(/^user enters "([^"]*)" to the Search input$/, async (searchQuery: string) => {
	await mainPage.enterSearchQuery(searchQuery);
});

When(/^user presses Search button$/, async () => {
	await mainPage.pressSearchButton();
});

When(/^user clicks on the first item of the search results$/, async () => {
	await searchResultsPage.clickOnFirstSearchResult();
});

When(/^user clicks on the tab "([^"]*)" at the product-tabs container$/, async (tabName: string) => {
	await searchResultsPage.clickOnProductTab(tabName);
});

When(/^user clicks "([^"]*)" button at the filters section$/, async (filterName: string) => {
	await searchResultsPage.openFilterOptions(filterName);
});

When(/^user checks "([^"]*)" check-box at the drop-down list$/, async (filterOption: string) => {
	await searchResultsPage.checkFilterOption(filterOption);
});



