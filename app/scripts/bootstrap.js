require.config({
  baseUrl: 'app/scripts',
  paths: {

    // Dependencies
    'angular': '../../bower_components/angular/angular',
    'angularRoute': '../../bower_components/angular-route/angular-route',
    'angularUiRouter': '../../node_modules/angular-ui-router/release/angular-ui-router',
    'angularCSS': '../../bower_components/angular-css/angular-css',

    // Amcharts
    'amcharts': '../../bower_components/amcharts/dist/amcharts/amcharts',
    'amcharts.serial': '../../bower_components/amcharts/dist/amcharts/serial',
    'amcharts.pie': '../../bower_components/amcharts/dist/amcharts/pie',
    'amcharts.plugins.responsive': '../../bower_components/amcharts/dist/amcharts/plugins/responsive/responsive.min',
    'amcharts.plugins.dataloader': '../../bower_components/amcharts/dist/amcharts/plugins/dataloader/dataloader.min',
    'amcharts.plugins.export': '../../bower_components/amcharts/dist/amcharts/plugins/export/export.min',

    // Modules and routing
    'app': 'app',
    'routes': 'routes',

    // Apis
    'webApi': 'apis/web.api',

    // Services

    // Controllers
    'dashboardCtrl': 'controllers/dashboard.ctr',
    'statsCtrl': 'controllers/stats.ctr',
    'orderCtrl': 'controllers/order.ctr',
    'inventoryCtrl': 'controllers/inventory/inventory.ctr',
    'categoryCtrl': 'controllers/inventory/category.ctr',
    'brandCtrl': 'controllers/inventory/brand.ctr',
    'productCtrl': 'controllers/inventory/product.ctr',


    // Directives
    'infoCard': 'directives/card/card.dir',

  },
  shim: {
    'angularRoute': {
      deps: ['angular']
    },
    'angularUiRouter': {
      deps: ['angular']
    },
    'angularCSS': {
      deps: ['angular']
    },
    'app': {
      deps: ['angular']
    },
    'routes': {
      deps: ['angularRoute', 'angularUiRouter', 'angularCSS', 'app']
    },
    'amcharts.pie': {
      deps: [ 'amcharts' ],
      exports: 'AmCharts',
      init: function() {
        AmCharts.isReady = true;
      }
    },
    'amcharts.serial': {
      deps: [ 'amcharts' ],
      exports: 'AmCharts',
      init: function() {
        AmCharts.isReady = true;
      }
    },
    'amcharts.plugins.responsive': {
      deps: [ 'amcharts' ]
    },
    'amcharts.plugins.dataloader': {
      deps: [ 'amcharts' ]
    },
    'amcharts.plugins.export': {
      deps: [ 'amcharts' ],
      init: function() {
        // CSS exception; load once it's ready
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "//cdn.amcharts.com/lib/3/plugins/export/export.css";
        document.getElementsByTagName("head")[0].appendChild(link);
      }
    }
  }
});
require(['app', 'routes'], function() {
  angular.bootstrap(document, ['app']);
});
