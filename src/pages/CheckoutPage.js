const actionHelper = require('../helpers/ActionHelper');
const assert = require('assert');

class CheckoutPage {

    getObjectLocator() {
        return require('../locators/CheckoutPageLocators');
    }

    getPageTitle() {
        return this.getObjectLocator().title;
    }

    verifyOrderComplete () {
        let actualTitle = actionHelper.getText(this.getObjectLocator().titlePage);
        assert.equal(actualTitle, this.getObjectLocator().lblCheckoutFinish);
    }

    verifyItemName(name) {
        let actualName = actionHelper.getText(this.getObjectLocator().inventoryItemName);
        assert.equal(actualName, name);
    }

    verifyItemPrice(value) {
        let actualValue = actionHelper.getText(this.getObjectLocator().inventoryItemPrice);
        assert.equal(actualValue, value);
    }

    clickCheckout() {
        actionHelper.click(this.getObjectLocator().btnCheckout);
    }

    clickContinue() {
        actionHelper.click(this.getObjectLocator().btnContinue);
    }

    clickFinish() {
        actionHelper.click(this.getObjectLocator().btnFinish);
    }

    fillCheckoutForm(firstName, lastName, zip) {
        actionHelper.sendText(this.getObjectLocator().txtInfoFirstname, firstName);
        actionHelper.sendText(this.getObjectLocator().txtInfoLastname, lastName);
        actionHelper.sendText(this.getObjectLocator().txtInfoZipcode, zip);
        this.clickContinue();
    }
}

module.exports = new CheckoutPage();