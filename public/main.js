(function() {
  function generateEnvyValueNavigatorPlugins() {
    var ret = [],
        plugins = window.navigator.plugins,
        plugin;

    for (var i = 0, len = plugins.length; i < len; i++) {
      plugin = plugins[i];

      ret[i] = {
        name: plugin.name,
        description: plugin.description,
        version: plugin.version,
        filename: plugin.filename,
      }
    }

    return ret;
  }

  function generateEnvyValue() {
    var nav = window.navigator;

    return {
      'window.JSON': !!window.JSON,
      'window.localStorage': !!window.localStorage,
      'window.sessionStorage': !!window.sessionStorage,

      'navigator.appCodeName': nav.appCodeName,
      'navigator.appName': nav.appName,
      'navigator.appVersion': nav.appVersion,
      'navigator.cookieEnabled': nav.cookieEnabled,
      'navigator.language': nav.language,
      'navigator.maxTouchPoints': nav.maxTouchPoints,
      'navigator.onLine': nav.onLine,
      'navigator.platform': nav.platform,
      'navigator.product': nav.product,
      'navigator.productSub': nav.productSub,
      'navigator.userAgent': nav.userAgent,
      'navigator.vendor': nav.vendor,
      'navigator.vendorSub': nav.vendorSub,

      'navigator.plugins': generateEnvyValueNavigatorPlugins(),
    };
  }

  document.getElementById('js-values-field').value = JSON.stringify(generateEnvyValue());
})();
