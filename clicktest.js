const puppeteer = require('puppeteer');

function getDate(){
    let date = new Date();
    let fullDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    return fullDate;
}

async function webScraper(product) {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://www.amazon.com');

    await page.locator('div.nav-search-field').click();
    await page.keyboard.type(`${product}`, {delay:100});
    await page.keyboard.press('Enter');


    // await browser.close
}

// webScraper('Robotics Servo')