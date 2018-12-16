define(['angular',
        'angularRoute',
        'angularSanitize',
        'bootstrap',
        'config',
        'util',
        'header',
        'marked',
        'hljs',
        'jquery'
    ],
    function(angular,
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

        var app = angular.module('peterabyte-web', [
            'ngRoute',
            'ngSanitize'
        ]);

        var initCtrl = function() {
            util.errorHandler.reset();
        };

        var helper = {
            initCtrl: function() {
                util.errorHandler.reset();
            },

            getProjectById: function(projectId) {
                var project,
                    i;

                for (i = 0; i < config.projects.length; i = i + 1) {
                    if (config.projects[i].id === projectId) {
                        project = config.projects[i];
                        break;
                    }
                }

                return project;
            },

            getTooltipById: function(iconId) {
                return config.iconTooltips[iconId];
            },

            shuffle: function(array) {
                var currentIndex = array.length,
                    temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }
        };

        app.constant("config", config);

        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when("/", { templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home" })
                .when("/home", { templateUrl: "src/view/partial/home.html", controller: "HomeCtrl", title: "Home" })
                .when("/projects/:id", { templateUrl: "src/view/partial/project.html", controller: "ProjectCtrl", title: "Project" })
                .otherwise({ templateUrl: "src/view/partial/404.html", controller: "NotFoundCtrl", title: "404 Not Found" });
        }]);

        app.controller('BasePageCtrl', function($scope, config) {
            $scope.config = config;
        });

        app.controller('HeaderHelperCtrl', function() {
            header.init();
        });

        app.controller('FooterHelperCtrl', function() {});

        app.controller('ErrorHelperCtrl', function() {});

        app.controller('HomeCtrl', function($scope, $routeParams, config) {
            initCtrl();
            if ($routeParams.code) {
                $scope.welcomeCodeId = $routeParams.code;
            }

            var techKeysWithIcon = {},
                techKeysWithoutIcon = {},
                i,
                j;
            for (i = 0; i < config.projects.length; i++) {
                for (j = 0; j < config.projects[i].iconTags.length; j++) {
                    techKeysWithIcon[config.projects[i].iconTags[j]] = 1;
                }
                for (j = 0; j < config.projects[i].tags.length; j++) {
                    techKeysWithoutIcon[config.projects[i].tags[j]] = 1;
                }
            }
            $scope.techsWithIcon = helper.shuffle(Object.keys(techKeysWithIcon));
            $scope.techsWithoutIcon = helper.shuffle(Object.keys(techKeysWithoutIcon));

            var slicedProjects = [],
                chunkSize = config.projectsViewChunkSize;
            for (i = 0; i < Math.ceil(config.projects.length / chunkSize); i++) {
                slicedProjects[i] = config.projects.slice(i * chunkSize, (i + 1) * chunkSize);
            }
            $scope.slicedProjects = slicedProjects;
            $scope.chunkSize = chunkSize;
        });

        app.controller('NotFoundCtrl', function($rootScope) {
            initCtrl();
            $rootScope.title = '404 Not Found';
        });

        app.controller('ProjectCtrl', function($scope, $routeParams, config, $rootScope, $route) {
            initCtrl();
            $scope.projectFound = false;
            if ($routeParams.id) {
                var project = helper.getProjectById($routeParams.id);
                if (project) {
                    $scope.projectId = project.id;
                    $scope.project = project;
                    $rootScope.title = $route.current.$$route.title + ': ' + project.title;
                    $scope.projectFound = true;
                }
            }
        });

        app.directive('renderIconTooltip', function() {
            return {
                link: function(scope, element, attrs) {
                    var tooltip = helper.getTooltipById(attrs.class);
                    if (tooltip) {
                        var $element = $(element);
                        $element.attr('title', tooltip);
                        $element.attr('data-toggle', 'tooltip');
                        $element.tooltip();
                    }
                }
            };
        });

        app.directive('renderProjectDescription', function() {
            return {
                link: function(scope, element, attrs) {
                    var project = helper.getProjectById(attrs.projectId);
                    if (project) {
                        var raw = project.description;
                        element.html(marked(raw));
                        element.addClass(attrs.projectId + '-content-loaded');
                    }
                }
            };
        });

        app.directive('renderProjectReadme', function() {
            return {
                link: function(scope, element, attrs) {
                    var project = helper.getProjectById(attrs.projectId);
                    if (project) {
                        var readmeUrl = project.readmeUrl;
                        $.ajax({
                            type: "GET",
                            url: readmeUrl,
                            dataType: "json",
                            timeout: 2500
                        }).done(function(data) {
                            element.html(marked(atob(data.content)));
                            element.addClass('readme-content-loaded');
                        }).fail(function() {
                            element.empty();
                            util.errorHandler.error('Failed to load project README!');
                        });
                    }
                }
            };
        });

        app.directive('renderProjectsBadge', function() {
            return {
                link: function(scope, element, attrs) {
                    var numberOfProjects = config.projects.length;
                    element.html(numberOfProjects);
                }
            };
        });

        app.run(['$location', '$rootScope', function($location, $rootScope) {
            $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
                if (current.$$route) {
                    $rootScope.title = current.$$route.title;
                }
            });
        }]);

        marked.setOptions({
            highlight: function(code, lang) {
                if (lang) {
                    return hljs.highlight(lang.toLowerCase(), code).value;
                }
                return code;
            },
            langPrefix: ''
        });

        return app;
    });