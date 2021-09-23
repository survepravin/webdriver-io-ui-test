class CheckoutPageLocators {

    constructor() {
        this.titlePage = "//span[@class='title']";
        this.inventoryItemName = "//div[@class='inventory_item_name']";
        this.inventoryItemImage = "//div[@class='inventory_item_img']";
        this.inventoryItemPrice = "//div[@class='inventory_item_price']";
        this.btnAddToCarts = "//button[@id='checkout']";
        this.txtInfoFirstname = "#first-name";
        this.txtInfoLastname = "#last-name";
        this.txtInfoZipcode = "#postal-code";
        this.btnCheckout = "#checkout";
        this.btnContinue = "#continue";
        this.btnFinish = "#finish";
        this.lblCheckoutFinish = "CHECKOUT: COMPLETE!";
    }
}

module.exports = new CheckoutPageLocators();