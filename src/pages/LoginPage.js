const actionHelper = require('../helpers/ActionHelper');

class LoginPage {

    getObjectLocator() {
        return require('../locators/LoginPageLocators');
    }

    doLogin(username, password) {
        actionHelper.sendText(this.getObjectLocator().txtUsername, username);
        actionHelper.sendText(this.getObjectLocator().txtPassword, password);
        actionHelper.click(this.getObjectLocator().btnSubmit);
        actionHelper.waitTillPageLoad();
    }

    getPageTitle() {
        return this.getObjectLocator().title;
    }
}

module.exports = new LoginPage();