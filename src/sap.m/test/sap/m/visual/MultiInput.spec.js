describe('sap.m.MultiInput', function() {

    //Initial Mode
    it("should select Compact mode", function () {
        expect(takeScreenshot(element(by.id("page1")))).toLookAs("initial");
    });

    //Initial Compact Mode
    it("should select Compact mode", function () {
        element(by.id("compactMode")).click();
        expect(takeScreenshot(element(by.id("page1")))).toLookAs("compact-mode");
        element(by.id("compactMode")).click();
    });

    //Single Line Mode
    it("should show on SingleLineMode", function () {
        expect(takeScreenshot(element(by.id("multiInputCustomValidator")))).toLookAs("multi-input-custom-validator");
    });

    //Single Line Mode selected
    it("should focus on SingleLineMode", function () {
        element(by.id("multiInputCustomValidator")).click();
        expect(takeScreenshot(element(by.id("multiInputCustomValidator")))).toLookAs("multi-input-custom-validator-selected");
    });

    //MultiInpuit not selected
    it("should show on multiInputCustomAsyncValidator tokens", function () {
        expect(takeScreenshot(element(by.id("multiInputCustomAsyncValidator")))).toLookAs("multi-input-custom-async-validator");
    });

    //MultiInpuit  selected
    it("should focus on multiInputCustomAsyncValidator tokens", function () {
        element(by.id("multiInputCustomAsyncValidator")).click();
        expect(takeScreenshot(element(by.id("multiInputCustomAsyncValidator")))).toLookAs("multi-input-custom-async-validator-slct");
    });

    //Multiple line enabled not  selected
    it("should show on Multi input enabled tokens", function () {
        expect(takeScreenshot(element(by.id("mI5")))).toLookAs("multi-input-line-not-selected");
    });

    //Multiple line enabled  selected
    it("should focus on Multi input enabled tokens", function () {
        element(by.id("mI5")).click();
        expect(takeScreenshot(element(by.id("mI5-border")))).toLookAs("multi-input-line-selected");
    });

    //Multiinput warning
    it("should show on multiInput warrning", function () {
        expect(takeScreenshot(element(by.id("mIWarning")))).toLookAs("multi-input-warrning-not-selected");
    });

    //Multiinput error
    it("should show on multiInput error", function () {
        expect(takeScreenshot(element(by.id("mIError")))).toLookAs("multi-input-error-not-selected");
    });

    //Multiinput success
    it("should show on multiInput success", function () {
        expect(takeScreenshot(element(by.id("mISuccess")))).toLookAs("multi-input-mISuccess-not-selected");
    });

    //Multiinput error selected
    it("should focus on multiInput error selected", function () {
        element(by.id("mIError")).click();
        expect(takeScreenshot(element(by.id("mIError")))).toLookAs("multi-input-error-selected");
    });

    //Multiinput error selected
    it("should show  multiInput multiInputNotEditable", function () {
        expect(takeScreenshot(element(by.id("multiInputNotEditable")))).toLookAs("multi-input-not-editalbe");
    });

    //Show multi input no placeholder
    it("should show   multiInput no placeholder", function () {
        expect(takeScreenshot(element(by.id("multiInputNotEditable")))).toLookAs("multi-input-not-editable");
    });

    //Show selected multi input no placeholder
    it("should show   multiInput no placeholder", function () {
        element(by.id("multiInputNotEditable")).click();
        expect(takeScreenshot(element(by.id("multiInputNotEditable")))).toLookAs("multi-input-not-editable-selected");
    });
});