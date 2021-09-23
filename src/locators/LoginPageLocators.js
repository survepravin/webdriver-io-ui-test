class LoginPageLocators {

    constructor() {
        this.title = "Swag Labs"; 
        this.txtUsername = "#user-name";
        this.txtPassword = "#password";
        this.btnSubmit = "//input[@id='login-button']";
    }
}

module.exports = new LoginPageLocators();