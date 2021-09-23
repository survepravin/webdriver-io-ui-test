class WelcomePageLocators {

    constructor() {
        this.titlePage = "//span[@class='title']";
        this.inventoryItemNames = "//div[@class='inventory_item']//div[@class='inventory_item_name']";
        this.inventoryItemImages = "//div[@class='inventory_item']//div[@class='inventory_item_img']";
        this.inventoryItemPrices = "//div[@class='inventory_item']//div[@class='inventory_item_price']";
        this.btnAddToCarts = "//div[@class='inventory_item']//div[@class='pricebar']//button";
    }
}

module.exports = new WelcomePageLocators();