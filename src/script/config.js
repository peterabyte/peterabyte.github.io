define([], function () {
    "use strict";

    window.config = {
        menu: [
            {
                name: "home",
                url: "/#/home",
                text: "Home"
            },
            {
                name: "projects",
                url: "/#/projects",
                text: "Projects"
            },
            {
                name: "support",
                url: "/#/support",
                text: "Support"
            }
        ],
        supportLink: 'https://github.com/learnerbot/learnerbot.github.io/issues',
        projects: {
            learnerbot_github_io : {
                repoUrl: "https://github.com/learnerbot/learnerbot.github.io",
                repoApiUrl: "https://api.github.com/repos/learnerbot/learnerbot.github.io?callback",
                readmeUrl: "https://api.github.com/repos/learnerbot/learnerbot.github.io/contents/README.md",
                title: "learnerbot.github.io",
                description: "The **learnerbot.github.io** project is a Single Page Application hosted on GitHub which holds a reference to some of my pet projects."
            }
        },
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