require.config({
    paths: {
        angular: '../../libs/angular/js/angular.min',
        angularRoute: '../../libs/angular-route/js/angular-route.min',
        angularSanitize: '../../libs/angular-sanitize/js/angular-sanitize.min',
        marked: '../../libs/marked/js/marked.min',
        hljs: '../../libs/highlightjs/highlight.pack',
        jquery: '../../libs/jquery/js/jquery.min',
        bootstrap: '../../libs/bootstrap/js/bootstrap.min',
        main: '../main'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularSanitize': ['angular'],
        'marked' : {'exports' : 'marked'},
        'hljs' : {'exports' : 'hljs'},
        'jquery' : {'exports' : 'jquery'},
        'bootstrap' : ['jquery']
    },
    priority: [
        'angular'
    ],
    baseUrl: 'src/script/'
});

require(['angular', 'main'], function(angular, main) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        angular.bootstrap(document, ['learnerbot-web']);
    });
});