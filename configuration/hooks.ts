import { Before, AfterAll, After, World, Status } from "@cucumber/cucumber";

Before(async () => { await browser.maximizeWindow(); });

After(async function (this: World, scenario) { 
    if (scenario.result?.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        const img = Buffer.alloc(screenShot.length, screenShot, "base64");
        await this.attach(img, "image/png");
    }
    await browser.reloadSession(); 
});

AfterAll(async () => { await browser.closeWindow(); });



