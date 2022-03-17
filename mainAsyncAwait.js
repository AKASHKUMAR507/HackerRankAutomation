const puppeteer = require('puppeteer');
const loginLink = 'https://www.hackerrank.com/auth/login';
const codeObj = require('./code')
const email = 'chintu12345@gmail.com';
const password = 'chintu@12345';


(async function(){
    try {
        let browserInstance = await puppeteer.launch({
            headless:false,
            args:['--start-maximized'],
            defaultViewport:null
        })

        let newTab = await browserInstance.newPage(loginLink);
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']",email,{delay : 50});
        await newTab.type("input[type='password']",password,{delay : 50});
        await newTab.click('button[data-analytics="LoginPassword"]',{delay:50})
        await waitAndClick('.topic-card a[data-attr1="algorithms"]',newTab);
        await waitAndClick('input[value="warmup"]',newTab);
        let allChallenges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50})
        console.log('Total Question',allChallenges.length);

    } catch (error) {
        console.log(error);
    }
})()



async function waitAndClick(selector,cPage){
    await cPage.waitForSelector(selector);

    let selectorClicked = cPage.click(selector);
    return selectorClicked;
} 