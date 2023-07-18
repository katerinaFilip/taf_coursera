import { Given } from '@cucumber/cucumber';
import mainPage from '../pages/main.page';

Given(/^user opens "([^"]*)" page$/, async (url: string) => {
	return await mainPage.open(url);
});
