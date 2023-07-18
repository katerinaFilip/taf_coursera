import { Then } from '@cucumber/cucumber';
import coursePage from '../pages/course.page';
import searchResultsPage from '../pages/search.results.page';
import DriverUtils from '../utils/driver.utils';

import * as chai from 'chai';
import degreesPage from '../pages/degrees.page';
const expect = chai.expect;

Then(/^the open page has title which contains "([^"]*)"$/, async (expectedTitle: string) => {
	await DriverUtils.swithToNextTab();
	let title = await coursePage.getTitleText();
	return expect(title).to.include(expectedTitle, 
		`page title should include the text "${expectedTitle}", but actual page title text is: ${title}`);
});

Then(/^each of the displayed item on the first tab of search results has the value "([^"]*)" as "([^"]*)"$/, async (labelValue: string, labelName: string) => {
	let labelValues = await searchResultsPage.getSearchResultsLabelValues(labelName);
    return expect(labelValues).to.satisfy((values: Array<string>) => values.every((element: string) => element.toLowerCase() === labelValue.toLowerCase()), 
		`each label value should be equal to ${labelValue}, but actual label values are: ${labelValues}`);
});

Then(/^the open page has the button with the text "([^"]*)"$/, async (enrollButtonExpectedText: string) => {
	await DriverUtils.swithToNextTab();
	let enrollButtonText = await coursePage.getEnrollButtonText();
	return expect(enrollButtonText).to.include(enrollButtonExpectedText, 
		`enroll button should include the text "${enrollButtonExpectedText}", but actual enroll button text is: ${enrollButtonText}`);
});

Then(/^each degrees has title with "([^"]*)" world$/, async (degreeCategory: string) => {
	let degreesTitles = await degreesPage.getDegreesTitles();
    return expect(degreesTitles).to.satisfy((titles: Array<string>) => titles.every((element: string) => element.includes(degreeCategory)), 
		`each degree title should include ${degreeCategory}, but actual degree titles are: ${degreesTitles}`);
});

