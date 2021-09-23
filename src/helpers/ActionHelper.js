
const TIMEOUT = 30;
class ActionHelper {

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static launchApp() {
        driver.launchApp();
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        $(locator).click();
    }

    static clickJs(locator) {
        let webElement = $(locator);
        browser.execute("arguments[0].click();", webElement);
    }

    static waitForElement(locator) {
        if (typeof locator == 'string') {
            $(locator).waitForDisplayed(TIMEOUT * 1000);
        } else {
            locator.waitForDisplayed(TIMEOUT * 1000);
        }
    }

    static waitForClickable(locator) {
        if (typeof locator == 'string') {
            $(locator).waitForClickable({ timeout: TIMEOUT * 1000 });
        } else {
            locator.waitForClickable({ timeout: TIMEOUT * 1000 });
        }
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
        // setValue()
    }

    static getText(locator) {
        if (typeof locator == 'string') {
            return $(locator).getText();
        } else {
            return locator.getText();
        }
    }

    static getTextJs(locator) {
        if (typeof locator == 'string') {
            let webElement = $(locator);
            return browser.execute("return arguments[0].innerHTML;", webElement);
        } else {
            return browser.execute("return arguments[0].innerHTML;", locator);
        }
    }

    static getTextJQuery(locator) {
        if (typeof locator == 'string') {
            let webElement = $(locator);
            return browser.execute("return jQuery(arguments[0]).text();", webElement);
        } else {
            return browser.execute("arguments[0].style[\"display\"] = \"block\";" +
                "arguments[0].style[\"visibility\"] = \"visible\";" +
                "return arguments[0].innerText;", locator);
        }
    }

    static getInnerText(locator) {
        if (typeof locator == 'string') {
            let webElement = $(locator);
            return browser.execute("return arguments[0].innerText;", webElement);
        } else {
            return browser.execute("return arguments[0].innerText;", locator);
        }
    }

    static waitTillPageLoad() {
        browser.waitUntil(
            () => browser.execute("return document.readyState") == "complete",
            {
                timeout: TIMEOUT * 1000,
                timeoutMsg: "Page didn't load in " + TIMEOUT + "sec"
            });
    }

    static getElement(locator) {
        return $(locator);
    }

    static getElements(locator) {
        return $$(locator);
    }

    static scrollIntoView(locator) {
        $(locator).scrollIntoView();
    }

    static navigateBack() {
        browser.back();
        this.waitTillPageLoad();
    }

    static scrollDown() {
        browser.execute("window.scrollBy(0, document.body.scrollHeight)");
        this.waitTillPageLoad();
    }

    static scrollUp() {
        browser.execute("window.scrollTo(0, 0);");
        this.waitTillPageLoad();
    }

    static isDisplayedInViewport(locator) {
        return $(locator).isDisplayedInViewport();
    }

    static getCSSProperty(locator, cssProperty) {
        if (typeof locator == 'string') {
            return $(locator).getCSSProperty(cssProperty).value;
        } else {
            return locator.getCSSProperty(cssProperty).value;
        }
    }

    static getAttributeValue(locator, attribute) {
        if (typeof locator == 'string') {
            return $(locator).getAttribute(attribute);
        } else {
            return locator.getAttribute(attribute);
        }
    }

    static zoom(action) {
        if (action.toUpperCase() == "OUT") {
            browser.execute("document.body.style.zoom = '75%'");
        } else if (action.toUpperCase() == "DEFAULT" || action.length == 0) {
            browser.execute("document.body.style.zoom = '100%'");
        } else if (action.toUpperCase() == "IN") {
            browser.execute("document.body.style.zoom = '125%'");
        }
    }

    static takeScreenshot() {
        return browser.takeScreenshot();
    }
}

module.exports = ActionHelper;