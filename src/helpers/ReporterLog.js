var cucumberJson = require('wdio-cucumberjs-json-reporter').default;

class ReporterLog {
 
    static addPlainText(text) {
        cucumberJson.attach(text, 'text/plain');
    }

    static addJsonObject(jsonObject) {
        cucumberJson.attach(jsonObject, 'application/json');
    }

    static addImage(screenshot) {
        cucumberJson.attach(screenshot, 'image/png');
    }

    static getDataUrl(img) {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        // Set width and height
        canvas.width = img.width;
        canvas.height = img.height;
        // Draw the image
        ctx.drawImage(img, 0, 0);
        return canvas.toDataURL('image/jpeg');
     }

}

module.exports = ReporterLog;