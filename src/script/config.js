define([], function () {
    "use strict";

    window.config = {
        menu: [
            {
                name: "home",
                url: "/#/home",
                text: "Home",
                icon: "home"
            },
            {
                name: "projects",
                url: "/#/projects",
                text: "Projects",
                icon: "cog"
            },
            {
                name: "support",
                url: "/#/support",
                text: "Support",
                icon: "question-sign"
            }
        ],
        supportLink: 'https://github.com/learnerbot/learnerbot.github.io/issues',
        projects: [
            {
                id: "learnerbot_github_io",
                repoUrl: "https://github.com/learnerbot/learnerbot.github.io",
                repoApiUrl: "https://api.github.com/repos/learnerbot/learnerbot.github.io?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/learnerbot.github.io/contents/README.md",
                title: "learnerbot.github.io",
                description: "The **learnerbot.github.io** project is a Single Page Application hosted on GitHub which holds a reference to some of my pet projects.",
                tags: ["project"]
            },
            {
                id: "angular_example",
                repoUrl: "https://github.com/learnerbot/angular",
                repoApiUrl: "https://api.github.com/repos/learnerbot/angular?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/angular/contents/README.md",
                title: "Angular",
                description: "This is a simple example to understand the basics of *AngularJS*.",
                tags: ["example"]
            },
            {
                id: "spring_boot_example",
                repoUrl: "https://github.com/learnerbot/spring-boot",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-boot?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-boot/contents/README.md",
                title: "Spring Boot",
                description: "A simple web application based on *Spring Boot*.",
                tags: ["example"]
            },
            {
                id: "spring_boot_security_example",
                repoUrl: "https://github.com/learnerbot/spring-boot-security",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-boot-security?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-boot-security/contents/README.md",
                title: "Spring Boot Security",
                description: "A simple web application based on *Spring Boot* to understand the basics of the *Spring Boot Security* feature.",
                tags: ["example"]
            },
            {
                id: "spring_boot_mongodb_example",
                repoUrl: "https://github.com/learnerbot/spring-boot-mongodb",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-boot-mongodb?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-boot-mongodb/contents/README.md",
                title: "Spring Boot MongoDB",
                description: "A simple web application based on *Spring Boot* to understand the basics of the *Spring Boot MongoDB* feature.",
                tags: ["example"]
            },
            {
                id: "spring_dynamic_language_support_example",
                repoUrl: "https://github.com/learnerbot/spring-dynamic-language-support",
                repoApiUrl: "https://api.github.com/repos/learnerbot/spring-dynamic-language-support?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/spring-dynamic-language-support/contents/README.md",
                title: "Spring Dynamic Language Support",
                description: "This is a simple web application based on *Spring Boot* to understand the basics of *Spring Dynamic Language Support*.",
                tags: ["example"]
            },
            {
                id: "selenium_example",
                repoUrl: "https://github.com/learnerbot/selenium",
                repoApiUrl: "https://api.github.com/repos/learnerbot/selenium?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/selenium/contents/README.md",
                title: "Selenium",
                description: "This project's main goal is to understand the basics of *Selenium*. The project contains a simple web application based on *Spring Boot* and the tests are written with the help of *Cucumber/Gherkin*.",
                tags: ["example"]
            },
            {
                id: "d3js_example",
                repoUrl: "https://github.com/learnerbot/d3js",
                repoApiUrl: "https://api.github.com/repos/learnerbot/d3js?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/d3js/contents/README.md",
                title: "D3.js",
                description: "This is a simple web application powered by *AngularJS* to understand the basics of *D3.js*.",
                tags: ["example"]
            }
        ],
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
