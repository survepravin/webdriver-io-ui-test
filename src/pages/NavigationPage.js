const actionHelper = require('../helpers/ActionHelper');

class NavigationPage {

    getObjectLocator() {
        return require('../locators/PageNavigationLocators');
    }

    navigateToCart() {
        actionHelper.click(this.getObjectLocator().btnCartIcon);
        actionHelper.pause(3);
        actionHelper.waitTillPageLoad();
    }

    logout(){
        actionHelper.click(this.getObjectLocator().btnMenu);
        actionHelper.click(this.getObjectLocator().lnkMenuLogout);
    }
}

module.exports = new NavigationPage();