class PageNavigationLocators {

    constructor() {
        this.btnMenu = "//button[@id='react-burger-menu-btn']";
        this.btnCartIcon = "//a[@class='shopping_cart_link']";
        this.btnCloseMenu = "//button[@id='react-burger-cross-btn']";
        this.lnkMenuAllItems = "//a[@id='inventory_sidebar_link']";
        this.lnkMenuAbout = "//a[@id='about_sidebar_link']";
        this.lnkMenuLogout = "//a[@id='logout_sidebar_link']";
        this.lnkMenuResetApp = "//a[@id='reset_sidebar_link']";
    }
}

module.exports = new PageNavigationLocators();