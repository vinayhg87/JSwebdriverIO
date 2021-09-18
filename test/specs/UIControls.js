describe("To test the UI controls like radio buttons, dropdowns etc", () => {
    it('TestCase1 - Radio button handling with popup', () => {
        browser.url('https://www.rahulshettyacademy.com/loginpagePractise/#')
        browser.maximizeWindow();
        $("input[name='username']").setValue('rahulshettyacademy');
        $("input[name='password']").setValue('learning');
        //browser.pause(5000)
        //here $$ works similar to findelements (in selenium) or multiple elements in array format.
        let radiobuttons = $$("label[class='customradio']");
        let adminButton = radiobuttons[0];
        let userButton = radiobuttons[1];
        //to click the user radio button
        userButton.$("input[id='usertype']").click();
        let modalBody = $("div[class='modal-body']");
        /* This method will wait till the popup is displayed. By default the wait time is 10 sec. 
        to change or increase the wait time, change the 'waitforTimeout' paramater in wdio.conf.js file.  */
        modalBody.waitForDisplayed();
        $("button[id='cancelBtn']").click();
        browser.pause(3000);
    })

    it('TestCase2 - Radio button handling without popup', ()=> {
        browser.url('https://www.rahulshettyacademy.com/loginpagePractise/#');
        browser.maximizeWindow();
        $("input[name='username']").setValue('rahulshettyacademy');
        $("input[name='password']").setValue('learning');
        //here $$ works similar to findelements (in selenium) or multiple elements in array format.
        let radioButton = $$("label[class='customradio']");
        userRadioButton = radioButton[1];
        userRadioButton.$("input[id='usertype']").click();
        let modalBody = $("div[class='modal-body']");
        /* This method will wait till the popup is displayed. By default the wait time is 10 sec. 
        to change or increase the wait time, change the 'waitforTimeout' paramater in wdio.conf.js file.  */
        modalBody.waitForDisplayed();
        $("button[id='okayBtn']").click();
        adminRadioButton = radioButton[0];
        adminRadioButton.$("input[id='usertype']").click();
        browser.pause(3000)
    })

    it('TestCase3 - Handling Static Dropdowns', ()=>{
        browser.url('https://www.rahulshettyacademy.com/loginpagePractise/#');
        browser.maximizeWindow();
        $("input[name='username']").setValue('rahulshettyacademy');
        $("input[name='password']").setValue('learning');
        //here $$ works similar to findelements (in selenium) or multiple elements in array format.
        let radioButton = $$("label[class='customradio']");
        userRadioButton = radioButton[1];
        userRadioButton.$("input[id='usertype']").click();
        let modalBody = $("div[class='modal-body']");
        /* This method will wait till the popup is displayed. By default the wait time is 10 sec. 
        to change or increase the wait time, change the 'waitforTimeout' paramater in wdio.conf.js file.  */
        modalBody.waitForDisplayed();
        $("button[id='okayBtn']").click();
        /** For dropdowns choose the select tag which contains all the dropdown values. This stores all the dorpdown values */
        let dropdown = $("select[class='form-control']");
        /** We can select all drop down values using visibletext, index or attribute */
        dropdown.selectByAttribute('value','teach');
        browser.pause(3000);

    })

})