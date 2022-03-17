const puppeteer = require('puppeteer');
const loginLink = 'https://www.hackerrank.com/auth/login';
const codeObj = require('./code')
const email = 'chintu12345@gmail.com';
const password = 'chintu@12345';

let browserOpen = puppeteer.launch({
    headless:false,
    args:['--start-maximized'],
    defaultViewport:null
})

let page;

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
}).then(function(newTab){
    page = newTab;
    let hackerrankOpenPromise = newTab.goto(loginLink);
    return hackerrankOpenPromise;
}).then(function(){
    let emailIsEntered = page.type("input[id='input-1']",email,{delay : 50});
    return emailIsEntered;
}).then(function(){
    let passwordIsEntered = page.type("input[type='password']",password,{delay : 50});
    return passwordIsEntered;

}).then(function(){
    let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]',{delay:50});
    return loginButtonClicked;
}).then(function(){
    let = clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
    return clickOnAlgoPromise;
}).then(function(){
    let getToWormUp = waitAndClick('input[value="warmup"]',page);
    return getToWormUp;
}).then(function(){
    let waitFor3Second = page.waitFor(3000);
    return waitFor3Second;
}).then(function(){
    let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50})
    return allChallengesPromise;
}).then(function(questionArr){
    console.log('number of question' , questionArr.length);
    let questionWillBeSolved = questionSolver(page , questionArr[0],codeObj.answer[0]);
    return questionWillBeSolved;
}).then(function(){

})

function waitAndClick(selector ,cPage){
    return new Promise(function(resolve , reject){
        let waitForModulePromise = cPage.waitForSelector(selector);
        waitForModulePromise.then(function(){
            let clickModal = cPage.click(selector);
            return clickModal;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}

function questionSolver(page , question, answer){
    return new Promise(function(resolve,reject){
        let questionWillBeClicked = question.click();
        questionWillBeClicked.then(function(){
            let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs',page);
            return EditorInFocusPromise;
        }).then(function(){
            return waitAndClick('.checkbox-input',page);
        }).then(function(){
            return page.waitForSelector('textarea.custominput',page);
        }).then(function(){
            return page.type('textarea.custominput',answer ,{delay:20});
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control');
            return ctrlIsPressed;
        }).then(function(){
            let AisPressed = page.keyboard.press('A' , {delay:100});
            return AisPressed;
        }).then(function(){
            let XisPrassed = page.keyboard.press('X', {delay:100});
            return XisPrassed;
        }).then(function(){
            let CtrlisUnPressed = page.keyboard.up('Control');
            return CtrlisUnPressed;
        }).then(function(){
            let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs',page);
            return mainEditorInFocus;
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control');
            return ctrlIsPressed;
        }).then(function(){
            let AisPressed = page.keyboard.press('A' , {delay:100});
            return AisPressed;
        }).then(function(){
            let VisPressed = page.keyboard.press('V' , {delay:100});
            return VisPressed;
        }).then(function(){
            let CtrlisUnPressed = page.keyboard.up('Control');
            return CtrlisUnPressed;
        }).then(function(){
            return page.click('.hr-monaco__run-code',{delay:50});
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject();
        })

    })
}