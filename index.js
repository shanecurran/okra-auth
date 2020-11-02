const chromium = require('chrome-aws-lambda');
const pageUrl = 'https://www.royaltywindow.com/login';

exports.handler = async (data) => {
    const { username, password } = data;

    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    
    await page.goto(pageUrl, {
        waitUntil: 'load'
    });

    await page.type(`input[name="j_username"]`, username.toString());
    await page.type(`input[name="j_password"]`, password.toString());
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    
    if (await page.$('.navbar-nav a')) {
        return {
            status: 'success'
        };
    } else {
        return {
            status: 'failure'
        };
    }
};
