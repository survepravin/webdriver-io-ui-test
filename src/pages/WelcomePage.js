const actionHelper = require('../helpers/ActionHelper');

class WelcomePage {

    getObjectLocator() {
        return require('../locators/WelcomePageLocators');
    }

    getPageTitle() {
        return actionHelper.getText(this.getObjectLocator().titlePage);
    }

    getProductName(index){
        return actionHelper.getText(actionHelper.getElements(this.getObjectLocator().inventoryItemNames)[index]);
    }

    getProductPrice(index){
        return actionHelper.getText(actionHelper.getElements(this.getObjectLocator().inventoryItemPrices)[index]);
    }

    clickAddToCart(index){
        actionHelper.click(actionHelper.getElements(this.getObjectLocator().btnAddToCarts)[index]);
    }

    openProduct(index) {
        actionHelper.click(actionHelper.getElements(this.getObjectLocator().inventoryItemImages)[index]);
    }
}

module.exports = new WelcomePage();