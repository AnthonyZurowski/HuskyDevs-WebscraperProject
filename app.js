const puppeteer = require('puppeteer');

function getDate(){
    let date = new Date();
    let fullDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return fullDate;
}

async function webScraper(url){
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto(url);

    var product = await page.waitForSelector('#productTitle');
    var productText = await page.evaluate(product => product.textContent, product);

    var price = await page.waitForSelector('.a-price-whole');
    var priceText = await page.evaluate(price=> price.textContent,price);

    console.log("date:" + getDate());
    console.log("product:" + productText.trim());
    console.log("price:" + priceText.trim());

    await browser.close();
}

webScraper('https://www.amazon.com/dp/B0C35Z66QV');