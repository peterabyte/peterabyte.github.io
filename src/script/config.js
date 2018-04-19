define([], function() {
    "use strict";

    window.config = {
        menu: [{
                name: "home",
                url: "/#/",
                text: "Home",
                icon: "home"
            },
            {
                name: "about",
                url: "/#/#about",
                text: "About",
                icon: "user"
            },
            {
                name: "projects",
                url: "/#/#projects",
                text: "Projects",
                icon: "cog"
            }
        ],
        supportLink: 'https://github.com/learnerbot/learnerbot.github.io/issues',
        projects: [{
                id: "learnerbot_github_io",
                repoUrl: "https://github.com/learnerbot/learnerbot.github.io",
                repoApiUrl: "https://api.github.com/repos/learnerbot/learnerbot.github.io?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/learnerbot.github.io/contents/README.md",
                title: "learnerbot.github.io",
                description: "The **learnerbot.github.io** project is a Single Page Application hosted on GitHub which holds a reference to some of my pet projects.",
                mainLanguageType: 'devicon-angularjs-plain',
                iconTags: [
                    'devicon-javascript-plain',
                    'devicon-angularjs-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: ['TestCafe']
            },
            {
                id: "angular",
                repoUrl: "https://github.com/learnerbot/angular",
                repoApiUrl: "https://api.github.com/repos/learnerbot/angular?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/angular/contents/README.md",
                title: "Angular",
                description: "This is a simple example to understand the basics of *AngularJS*.",
                mainLanguageType: 'devicon-angularjs-plain',
                iconTags: [
                    'devicon-javascript-plain',
                    'devicon-angularjs-plain',
                    'devicon-grunt-plain',
                    'devicon-bower-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: []
            },
            {
                id: "spring_boot",
                repoUrl: "https://github.com/learnerbot/spring-boot",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-boot?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-boot/contents/README.md",
                title: "Spring Boot",
                description: "A simple web application based on *Spring Boot*.",
                mainLanguageType: 'devicon-java-plain-wordmark',
                iconTags: [
                    'devicon-java-plain',
                    'devicon-gradle-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: ['Sping Boot', 'Thymeleaf']
            },
            {
                id: "spring_boot_security",
                repoUrl: "https://github.com/learnerbot/spring-boot-security",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-boot-security?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-boot-security/contents/README.md",
                title: "Spring Boot Security",
                description: "A simple web application based on *Spring Boot* to understand the basics of the *Spring Boot Security* feature.",
                mainLanguageType: 'devicon-java-plain-wordmark',
                iconTags: [
                    'devicon-java-plain',
                    'devicon-gradle-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: ['Sping Boot', 'Thymeleaf']
            },
            {
                id: "spring_boot_mongodb",
                repoUrl: "https://github.com/learnerbot/spring-boot-mongodb",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-boot-mongodb?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-boot-mongodb/contents/README.md",
                title: "Spring Boot MongoDB",
                description: "A simple web application based on *Spring Boot* to understand the basics of the *Spring Boot MongoDB* feature.",
                mainLanguageType: 'devicon-java-plain-wordmark',
                iconTags: [
                    'devicon-java-plain',
                    'devicon-mongodb-plain',
                    'devicon-gradle-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: ['Sping Boot', 'Thymeleaf']
            },
            {
                id: "spring_dynamic_language_support",
                repoUrl: "https://github.com/learnerbot/spring-dynamic-language-support",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-dynamic-language-support?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-dynamic-language-support/contents/README.md",
                title: "Spring Dynamic Language Support",
                description: "This is a simple web application based on *Spring Boot* to understand the basics of *Spring Dynamic Language Support*.",
                mainLanguageType: 'devicon-java-plain-wordmark',
                iconTags: [
                    'devicon-java-plain',
                    'devicon-gradle-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: ['Sping Boot', 'Groovy', 'Thymeleaf']
            },
            {
                id: "selenium",
                repoUrl: "https://github.com/learnerbot/selenium",
                repoApiUrl: "https://api.github.com/repos/learnerbot/selenium?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/selenium/contents/README.md",
                title: "Selenium",
                description: "This project's main goal is to understand the basics of *Selenium*. The project contains a simple web application based on *Spring Boot* and the tests are written with the help of *Cucumber/Gherkin*.",
                mainLanguageType: 'devicon-java-plain-wordmark',
                iconTags: [
                    'devicon-java-plain',
                    'devicon-cucumber-plain',
                    'devicon-gradle-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: ['Sping Boot', 'Thymeleaf']
            },
            {
                id: "d3js",
                repoUrl: "https://github.com/learnerbot/d3js",
                repoApiUrl: "https://api.github.com/repos/learnerbot/d3js?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/d3js/contents/README.md",
                title: "D3.js",
                description: "This is a simple web application powered by *AngularJS* to understand the basics of *D3.js*.",
                mainLanguageType: 'devicon-d3js-plain',
                iconTags: [
                    'devicon-javascript-plain',
                    'devicon-d3js-plain',
                    'devicon-angularjs-plain',
                    'devicon-grunt-plain',
                    'devicon-bower-plain',
                    'devicon-jquery-plain',
                    'devicon-bootstrap-plain',
                ],
                tags: []
            },
            {
                id: "nodejs",
                repoUrl: "https://github.com/learnerbot/nodejs",
                repoApiUrl: "https://api.github.com/repos/learnerbot/nodejs?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/nodejs/contents/README.md",
                title: "NodeJS",
                description: "This is a simple example to understand the basics of *NodeJS*.",
                mainLanguageType: 'devicon-nodejs-plain',
                iconTags: [
                    'devicon-javascript-plain',
                    'devicon-nodejs-plain',
                    'devicon-express-original',
                ],
                tags: []
            },
            {
                id: "nodejs_handlebars",
                repoUrl: "https://github.com/learnerbot/nodejs-handlebars",
                repoApiUrl: "https://api.github.com/repos/learnerbot/nodejs-handlebars?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/nodejs-handlebars/contents/README.md",
                title: "NodeJS with Handlebars",
                description: "This is a simple example to understand the basics of *NodeJS*.",
                mainLanguageType: 'devicon-nodejs-plain',
                iconTags: [
                    'devicon-javascript-plain',
                    'devicon-nodejs-plain',
                    'devicon-express-original',
                ],
                tags: ['Handlebars']
            },
            {
                id: "nodejs_in_docker",
                repoUrl: "https://github.com/learnerbot/nodejs-in-docker",
                repoApiUrl: "https://api.github.com/repos/learnerbot/nodejs-in-docker?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/nodejs-in-docker/contents/README.md",
                title: "NodeJS in Docker",
                description: "This is a simple example to understand the basics of *Docker* with the help of a *NodeJS* web app.",
                mainLanguageType: 'devicon-docker-plain',
                iconTags: [
                    'devicon-javascript-plain',
                    'devicon-docker-plain',
                    'devicon-nodejs-plain',
                    'devicon-express-original',
                ],
                tags: []
            },
            {
                id: "wordpress_on_heroku",
                repoUrl: "https://github.com/learnerbot/wordpress-on-heroku",
                repoApiUrl: "https://api.github.com/repos/learnerbot/wordpress-on-heroku?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/wordpress-on-heroku/contents/README.md",
                title: "WordPress on Heroku",
                description: "Example *WordPress* site running on *Heroku*.",
                mainLanguageType: 'devicon-wordpress-plain',
                iconTags: [
                    'devicon-php-plain',
                    'devicon-wordpress-plain',
                    'devicon-heroku-plain',
                ],
                tags: ['Composer']
            },
            {
                id: "laravel_on_heroku",
                repoUrl: "https://github.com/learnerbot/laravel-on-heroku",
                repoApiUrl: "https://api.github.com/repos/learnerbot/laravel-on-heroku?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/laravel-on-heroku/contents/README.md",
                title: "Laravel on Heroku",
                description: "Example *Laravel* site running on *Heroku*.",
                mainLanguageType: 'devicon-laravel-plain',
                iconTags: [
                    'devicon-php-plain',
                    'devicon-laravel-plain',
                    'devicon-heroku-plain',
                ],
                tags: ['Composer']
            },
            {
                id: "php_in_docker",
                repoUrl: "https://github.com/learnerbot/php-in-docker",
                repoApiUrl: "https://api.github.com/repos/learnerbot/php-in-docker?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/php-in-docker/contents/README.md",
                title: "PHP in Docker",
                description: "This is a simple example to run *PHP* via *Composer* inside *Docker*.",
                mainLanguageType: 'devicon-php-plain',
                iconTags: [
                    'devicon-php-plain',
                    'devicon-docker-plain',
                ],
                tags: ['Composer']
            },
            {
                id: "java_in_docker",
                repoUrl: "https://github.com/learnerbot/java-in-docker",
                repoApiUrl: "https://api.github.com/repos/learnerbot/java-in-docker?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/java-in-docker/contents/README.md",
                title: "Java in Docker",
                description: "This is a simple example to run *Java* via *Gradle* inside *Docker*.",
                mainLanguageType: 'devicon-java-plain-wordmark',
                iconTags: [
                    'devicon-java-plain',
                    'devicon-gradle-plain',
                    'devicon-docker-plain',
                ],
                tags: []
            }
        ],
        iconTooltips: {
            'devicon-java-plain': 'Java',
            'devicon-java-plain-wordmark': 'Java',
            'devicon-gradle-plain': 'Gradle',
            'devicon-cucumber-plain': 'Cucumber',
            'devicon-javascript-plain': 'JavaScript',
            'devicon-d3js-plain': 'D3JS',
            'devicon-angularjs-plain': 'AngularJS',
            'devicon-grunt-plain': 'Grunt',
            'devicon-bower-plain': 'Bower',
            'devicon-jquery-plain': 'JQuery',
            'devicon-nodejs-plain': 'NodeJS',
            'devicon-express-original': 'Express',
            'devicon-bootstrap-plain': 'Bootstrap',
            'devicon-mongodb-plain': 'MongoDB',
            'devicon-wordpress-plain': 'WordPress',
            'devicon-laravel-plain': 'Laravel',
            'devicon-heroku-plain': 'Heroku',
            'devicon-docker-plain': 'Docker',
            'devicon-php-plain': 'PHP',
            'fa fa-github': 'GitHub',
            'fa fa-linkedin-square': 'LinkedIn',
        },
        projectsViewChunkSize: 2,
        welcomeCode: {
            base: "src/content/welcome_code/",
            type: [
                "javascript",
                "java"
            ]
        }
    };

    return window.config;
});