define(['angular',
        'angularRoute',
        'angularSanitize',
        'bootstrap',
        'config',
        'util',
        'header',
        'marked',
        'hljs',
        'jquery'],
        function (angular,
            angularRoute,
            angularSanitize,
            bootstrap,
            config,
            util,
            header,
            marked,
            hljs,
            $) {
    "use strict";

    var app = angular.module('learnerbot-web', [
        'ngRoute',
        'ngSanitize'
    ]);

    var initCtrl = function () {
        util.errorHandler.reset();
    };

    app.constant("config", config);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/", {templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home"})
            .when("/home", {templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home"})
            .when("/home/:id", {templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home"})
            .when("/projects", {templateUrl: "src/view/partial/projects.html", controller: "ProjectsCtrl", title: "Projects"})
            .when("/projects/:id", {templateUrl: "src/view/partial/project.html", controller: "ProjectCtrl", title: "Project"})
            .when("/support", {templateUrl: "src/view/partial/support.html", controller: "SupportCtrl", title: "Support"})
            .when("/404", {templateUrl: "src/view/partial/project.html", controller: "NotFoundCtrl", title: "404 Not Found"})
            .otherwise({templateUrl: "src/view/partial/404.html", controller: "NotFoundCtrl", title: "404 Not Found"});
    }]);

    app.controller('BasePageCtrl', function ($scope, config) {
        $scope.config = config;
    });

    app.controller('HeaderHelperCtrl', function () {
        header.init();
    });

    app.controller('FooterHelperCtrl', function () {
    });

    app.controller('ErrorHelperCtrl', function () {
    });

    app.controller('HomeCtrl', function ($scope, $routeParams) {
        initCtrl();
        if ($routeParams.id) {
            $scope.welcomeCodeId = $routeParams.id;
        }
    });

    app.controller('SupportCtrl', function ($scope, config) {
        initCtrl();
        $scope.supportLink = config.supportLink;
    });

    app.controller('NotFoundCtrl', function ($rootScope) {
        initCtrl();
        $rootScope.title = '404 Not Found';
    });

    app.controller('ProjectsCtrl', function () {
        initCtrl();
    });

    app.controller('ProjectCtrl', function ($scope, $routeParams, config, $rootScope, $route) {
        initCtrl();
        $scope.projectFound = false;
        if ($routeParams.id) {
            var projectId = $routeParams.id,
                pId;
            for (pId in config.projects) {
                if (config.projects.hasOwnProperty(pId) && pId === projectId) {
                    $scope.projectId = pId;
                    $scope.project = config.projects[pId];
                    $rootScope.title = $route.current.$$route.title + ': ' + config.projects[pId].title;
                    $scope.projectFound = true;
                    break;
                }
            }
        }
    });

    app.directive('renderWelcomeCode', function () {
        return {
            link: function (scope, element, attrs) {
                var numOfTypes = config.welcomeCode.type.length,
                    typeIndex = Math.floor((Math.random() * numOfTypes)),
                    i;
                if (scope.welcomeCodeId) {
                    for (i = 0; i < numOfTypes; i++) {
                        if (scope.welcomeCodeId === config.welcomeCode.type[i]) {
                            typeIndex = i;
                            break;
                        }
                    }
                }
                var welcomeCodeUrl = config.welcomeCode.base + config.welcomeCode.type[typeIndex] + '.md';
                $.ajax({
                    type: "GET",
                    url: welcomeCodeUrl,
                    success: function (data) {
                        element.html(marked(data));
                        element.addClass('welcome-code-loaded');
                    },
                    error: function () {
                        util.errorHandler.error('Failed to load welcome code!');
                    }
                });
            }
        };
    });

    app.directive('renderProjectDescription', function () {
        return {
            link: function (scope, element, attrs) {
                var raw = config.projects[attrs.projectId].description;
                element.html(marked(raw));
                element.addClass(attrs.projectId + '-content-loaded');
            }
        };
    });

    app.directive('renderProjectReadme', function () {
        return {
            link: function (scope, element, attrs) {
                var readmeUrl = config.projects[attrs.projectId].readmeUrl;
                $.ajax({
                    type : "GET",
                    url : readmeUrl
                }).done(function (data) {
                    element.html(marked(atob(data.content)));
                    element.addClass('readme-content-loaded');
                }).fail(function () {
                    util.errorHandler.error('Failed to load project README!');
                });
            }
        };
    });

    app.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.$$route) {
                $rootScope.title = current.$$route.title;
            }
        });
    }]);

    marked.setOptions({
        highlight: function (code, lang) {
            if (lang) {
                return hljs.highlight(lang.toLowerCase(), code).value;
            }
            return code;
        },
        langPrefix: ''
    });

    return app;
});