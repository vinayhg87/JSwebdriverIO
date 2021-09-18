const { default: waitUntil} = require("webdriverio/build/commands/browser/waitUntil");

/** describe keyword is used to create a test suite. ()=> is the function without name and here this function starts.it should have {} like regular method. */
/** To skip the entire test, suite just add 'x' before 'describe'. 
 * example :  xdescribe ('Sauce website Automation', ()=> {}) */
xdescribe('Sauce website Automation', () => {
    /** It keyword is considered as a test case. The ()=> is used to create function of this test case. it should have {} like regular method. */
    /** To skip the test just add 'x' before 'it'. 
     * example :  xit('TestCase1 - Sauce Login page - Un-Successful',()=>{}) */
    it('TestCase1 - Sauce Login page - Un-Successful', () => {
        browser.url("https://www.saucedemo.com")
        browser.maximizeWindow();
        $("input[name='user-name']").setValue("standard_user") //using CSS
        $("input[name='password']").setValue("secret_sauce1") // using CSS - This is incorrect password
        $("input[name='login-button']").click() // using CSS
        //let errorMsg = $("h3[data-test='error']  [class='error-button'] [data-icon='times'] ").getText(); //using CSS
        let errorMsg = $("//h3[contains(text(),'Epic sadface: Username and password do not match a')]").getText(); //using xpath
        console.log("The error msg is " + errorMsg)
        expect($("//h3[contains(text(),'Epic sadface: Username and password do not match a')]"))
            .toHaveTextContaining("Epic sadface: Username and password do not match any user in this service")
    })


    /** It keyword is considered as a test case. The ()=> is used to create function of this test case. it should have {} like regular method. */
    it('TestCase2 - Sauce Login page - Successful', () => {
        browser.url("https://www.saucedemo.com")
        browser.maximizeWindow();
        console.log(browser.getTitle());
        expect(browser).toHaveTitle("Swag Labs") //assertion 
        $("input[name='user-name']").setValue("standard_user") //using CSS
        $("input[name='password']").setValue("secret_sauce") // using CSS
        $("input[name='login-button']").click() // using CSS
        /*The below code is used so that it will wait until the element is visible. 
        To compare text in JS we need to use 3 equals operator.*/
        browser.waitUntil(() => $("div[id='shopping_cart_container']").getAttribute('id') === 'shopping_cart_container', {
            timeout: 4000,
            timeoutMsg: "string not found"
        })
        /* Here We are comparing the text which we got from the web to the string 'Product' */
        expect($("//span[@class='title']")).toHaveTextContaining("PRODUCTS"); //assert         
    })


    it('TestCase3 - Adding product to the cart from the product page and perform checkout', () => {
        browser.url("https://www.saucedemo.com");
        browser.maximizeWindow();
        $("input[name='user-name']").setValue("standard_user"); //using CSS
        $("input[name='password']").setValue("secret_sauce"); // using CSS
        $("input[name='login-button']").click(); // using CSS
        $("//div[contains(text(),'Sauce Labs Backpack')]").click(); // using Xpath
        $("button[name='add-to-cart-sauce-labs-backpack']").click(); // using css
        $("a[class='shopping_cart_link']").click(); // using CSS
        $("button[id='checkout']").click(); // using CSS
        $("input[id='first-name']").setValue('Vinay');
        $("input[id='last-name']").setValue('HG');
        $("input[id='postal-code']").setValue('560064');
        $("input[id='continue']").click();
        let checkoutOverview = $("span[class='title']").getText();
        //console.log(checkoutOverview)
        if (checkoutOverview.includes("CHECKOUT: OVERVIEW")) {
            $("button[name='finish']").click();
            expect($("//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]")).toHaveTextContaining("THANK YOU FOR YOUR ORDER")
        }


        
    })
});