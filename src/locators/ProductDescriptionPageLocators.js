class ProductDescriptionPageLocators {

    constructor() {
        this.btnBackToProducts = "#back-to-products";
        this.inventoryItemName = "//div[contains(@class,'inventory_details_name')]";
        this.inventoryItemPrice = "//div[@class='inventory_details_price']";
    }
}

module.exports = new ProductDescriptionPageLocators();