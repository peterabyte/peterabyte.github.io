require.config({
    paths: {
        angular: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular.min',
        angularRoute: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-route.min',
        angularSanitize: 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.15/angular-sanitize.min',
        marked: 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.min',
        hljs: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min',
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min',
        bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min',
        main: '../main'
    },
    shim: {
        'angular': { 'exports': 'angular' },
        'angularRoute': ['angular'],
        'angularSanitize': ['angular'],
        'marked': { 'exports': 'marked' },
        'hljs': { 'exports': 'hljs' },
        'jquery': { 'exports': 'jquery' },
        'bootstrap': ['jquery']
    },
    priority: [
        'angular'
    ],
    baseUrl: 'src/script/'
});

require(['angular', 'main'], function(angular, main) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        angular.bootstrap(document, ['peterabyte-web']);
    });
});