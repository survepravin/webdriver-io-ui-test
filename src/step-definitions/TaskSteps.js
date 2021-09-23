const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
require('dotenv').config();
var welcomePage = require('../pages/WelcomePage');
var loginPage = require('../pages/LoginPage');
var navigationPage = require('../pages/NavigationPage');
var checkoutPage = require('../pages/CheckoutPage');
var productDescriptionPage = require('../pages/ProductDescriptionPage');
const actionHelper = require('../helpers/ActionHelper');
const reportLog = require('../helpers/ReporterLog');

When('User logins with username and password', () => {
    let username  = process.env.USER_NAME;
    let password  = process.env.PASS_WORD;

    reportLog.addPlainText("User : " + username);
    loginPage.doLogin(username, password);
    actionHelper.waitTillPageLoad();
    assert.equal(welcomePage.getPageTitle(), "PRODUCTS");
});

let productName = "";
let productPrice = "";

Then("Get product details from Product page", () => {
    productName = welcomePage.getProductName(0);
    productPrice = welcomePage.getProductPrice(0);
});

Then("Add product to cart", () => {
    productName = welcomePage.getProductName(0);
    productPrice = welcomePage.getProductPrice(0);
    reportLog.addPlainText("Product Name : " + productName);
    welcomePage.clickAddToCart(0);
});

Then("Navigate to cart page and verify product details", () => {
    navigationPage.navigateToCart();
    checkoutPage.verifyItemName(productName);
    checkoutPage.verifyItemPrice(productPrice);
});

Then("Verify order is complete", () => {
    checkoutPage.verifyOrderComplete();
});

Then("Select a product from Product page", () => {
    productName = welcomePage.getProductName(0);
    productPrice = welcomePage.getProductPrice(0);
    reportLog.addPlainText("Product Name : " + productName);
    welcomePage.openProduct(0);
});

Then("verify product details on product description page", () => {
    productDescriptionPage.verifyItemName(productName);
    productDescriptionPage.verifyItemPrice(productPrice);
});
 
Then("Checkout", (table) => {
    let data = table.rowsHash();
    let fname = data.firstName;
    let lname = data.lastName;
    let zip = data.zipCode;
    
    checkoutPage.clickCheckout();
    checkoutPage.fillCheckoutForm(fname, lname, zip);
    checkoutPage.clickFinish();
    checkoutPage.verifyOrderComplete();
});

Then("Logout", () => {
    navigationPage.logout;
});
