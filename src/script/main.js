$(document).ready(function() {
    var config = {
        projects: [{
                id: "peterabyte_github_io",
                gitHubUrl: "https://github.com/peterabyte/peterabyte.github.io",
                title: "peterabyte.github.io",
                description: "The **peterabyte.github.io** project is a Single Page Application hosted on GitHub which holds a reference to some of my pet projects.",
                mainLanguageIcon: 'fab fa-js',
                techBadges: ['Bootstrap', 'JQuery', 'Handlebars']
            },
            {
                id: "hello_spring",
                gitHubUrl: "https://github.com/peterabyte/hello-spring",
                title: "Hello Spring Boot",
                description: "This is a simple web application based on **Spring Boot**. It showcases features such as *Spring Boot Web*, *Spring Boot Data JPA*, *Spring Boot Mail*, *Spring Boot Security*, *Thymeleaf*, *H2 Database*, *Selenium*, *Cucumber*.",
                mainLanguageIcon: 'fab fa-java',
                techBadges: ['Sping Boot', 'Gradle', 'Thymeleaf', 'Selenium']
            },
            {
                id: "spring_scripting",
                gitHubUrl: "https://github.com/peterabyte/spring-scripting",
                title: "Spring Scripting",
                description: "This is a simple web application based on *Spring Boot* to understand the basics of **Spring Dynamic Language Support**.",
                mainLanguageIcon: 'fab fa-java',
                techBadges: ['Sping Boot', 'Groovy']
            },
            {
                id: "d3js",
                gitHubUrl: "https://github.com/peterabyte/d3js",
                title: "D3.js",
                description: "This is a simple web application powered by *AngularJS* to understand the basics of **D3.js**.",
                mainLanguageIcon: 'fab fa-js',
                techBadges: ['D3.js']
            },
            {
                id: "java_in_docker",
                gitHubUrl: "https://github.com/peterabyte/java-in-docker",
                title: "Java in Docker",
                description: "This is a simple example to run **Java** via *Gradle* inside **Docker**.",
                mainLanguageIcon: 'fab fa-docker',
                techBadges: ['Java']
            },
            {
                id: "nodejs_in_docker",
                gitHubUrl: "https://github.com/peterabyte/nodejs-in-docker",
                title: "NodeJS in Docker",
                description: "This is a simple example to understand the basics of **Docker** with the help of a **NodeJS** web app.",
                mainLanguageIcon: 'fab fa-docker',
                techBadges: ['NodeJS']
            },
            {
                id: "php_in_docker",
                gitHubUrl: "https://github.com/peterabyte/php-in-docker",
                title: "PHP in Docker",
                description: "This is a simple example to run **PHP** via *Composer* inside **Docker**.",
                mainLanguageIcon: 'fab fa-docker',
                techBadges: ['PHP']
            },
            {
                id: "wordpress_on_heroku",
                gitHubUrl: "https://github.com/peterabyte/wordpress-on-heroku",
                title: "WordPress on Heroku",
                description: "Example *WordPress* site running on **Heroku**.",
                mainLanguageIcon: 'fab fa-wordpress',
                techBadges: ['Heroku']
            },
            {
                id: "laravel_on_heroku",
                gitHubUrl: "https://github.com/peterabyte/laravel-on-heroku",
                title: "Laravel on Heroku",
                description: "Example *Laravel* site running on **Heroku**.",
                mainLanguageIcon: 'fab fa-laravel',
                techBadges: ['Heroku']
            },
        ],
        iconTooltips: {
            'fab fa-java': 'Java',
            'fab fa-java': 'Java',
            'fab fa-js': 'JavaScript',
            'fab fa-wordpress': 'WordPress',
            'fab fa-laravel': 'Laravel',
            'fab fa-docker': 'Docker',
            'fa fa-github': 'GitHub',
            'fa fa-linkedin-square': 'LinkedIn',
        }
    };

    var main = {
        init : function() {
            this._renderNumOfProjects();
            this._renderProjects();
            this._initTooltips();
        },

        _renderNumOfProjects : function() {
            var template = Handlebars.compile($('#numOfProjectsTemplate').html());
            $('#numOfProjectsText').replaceWith(template({ numOfProjects : config.projects.length }));
        },

        _renderProjects : function() {
        	var template = Handlebars.compile($('#projectTemplate').html()),
                techIconTemplate = Handlebars.compile($('#techIconTemplate').html())
                techBadgeTemplate = Handlebars.compile($('#techBadgeTemplate').html());

        	$('#projectsContainer').empty();

        	for (var i = 0; i < config.projects.length; i++) {
        		var project = config.projects[i],
        			mainLanguageIcon = config.projects[i].mainLanguageIcon,
                    techs = "";
                for (var j = 0; j < project.techBadges.length; j++) {
                    techs += " " + techBadgeTemplate({
                            techBadge : project.techBadges[j],
                            techBadgeTooltip : project.techBadges[j]
                        });
                }
        		var templateData = {
        			mainLanguageIcon : mainLanguageIcon,
        			mainLanguageTooltip : config.iconTooltips[mainLanguageIcon],
        			title : project.title,
        			description : marked(project.description),
        			techs : techs,
        			gitHubUrl : project.gitHubUrl,
                    projectClass : ((i % 2 == 0) ? "border border-light rounded bg-light" : "")
        		};
        		$('#projectsContainer').append(template(templateData));
        	}
        },

        _initTooltips : function() {
        	$('[data-toggle="tooltip"]').tooltip();
        }
    };

    main.init();
});
