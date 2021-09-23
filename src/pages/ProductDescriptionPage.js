const actionHelper = require('../helpers/ActionHelper');
const assert = require('assert');

class ProductDescriptionPage {

    getObjectLocator() {
        return require('../locators/ProductDescriptionPageLocators');
    }

    verifyItemName(name) {
        let actualName = actionHelper.getText(this.getObjectLocator().inventoryItemName);
        assert.equal(actualName, name);
    }

    verifyItemPrice(value) {
        let actualValue = actionHelper.getText(this.getObjectLocator().inventoryItemPrice);
        assert.equal(actualValue, value);
    }

    gotoProductsPage() {
        actionHelper.click(this.getObjectLocator().btnBackToProducts);
    }
}

module.exports = new ProductDescriptionPage();