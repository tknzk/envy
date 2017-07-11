window.onload = function () {
    values = {};
    values['window.JSON'] = !!window.JSON;
    values['window.localStorage'] = !!window.localStorage;
    values['window.sessionStorage'] = !!window.sessionStorage;

    values['navigator.appCodeName'] = navigator.appCodeName;
    values['navigator.appName'] = navigator.appName;
    values['navigator.appVersion'] = navigator.appVersion;
    values['navigator.cookieEnabled'] = navigator.cookieEnabled;
    values['navigator.language'] = navigator.language;
    values['navigator.maxTouchPoints'] = navigator.maxTouchPoints;
    values['navigator.onLine'] = navigator.onLine;
    values['navigator.platform'] = navigator.platform;
    values['navigator.product'] = navigator.product;
    values['navigator.productSub'] = navigator.productSub;
    values['navigator.userAgent'] = navigator.userAgent;
    values['navigator.vendor'] = navigator.vendor;
    values['navigator.vendorSub'] = navigator.vendorSub;

    values['navigator.plugins'] = Array();
    for (var i = 0, len = navigator.plugins.length; i < len; i++) {
        values['navigator.plugins'][i] = {
            name: (navigator.plugins)[i].name,
            description: (navigator.plugins)[i].description,
            version: (navigator.plugins)[i].version,
            filename: (navigator.plugins)[i].filename
        }
    }

    document.getElementById('js-values-field').value = JSON.stringify(values);
};
