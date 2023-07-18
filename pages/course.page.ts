import Page from './page';

class CoursePage extends Page {
    get bannerTitle () { return $('//h1[@data-e2e="xdp-banner-title"]') }
    get enrollButton () { return $('//button[@data-e2e="enroll-button"]') }

    async getTitleText () {
        return await (await this.bannerTitle).getText();
    }

    async getEnrollButtonText() {
        return await (await this.enrollButton).getText();
    }
}

export default new CoursePage();