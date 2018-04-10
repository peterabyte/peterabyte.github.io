exports.config = {
    onPrepare: function() {
        protractor.config = {
            projects: {
                idList: [
                    "learnerbot_github_io",
                    "angular",
                    "spring_boot",
                    "spring_boot_security",
                    "spring_boot_mongodb",
                    "spring_dynamic_language_support",
                    "selenium",
                    "d3js",
                    "nodejs",
                    "nodejs_in_docker",
                    "wordpress_on_heroku",
                    "laravel_on_heroku",
                    "php_in_docker",
                    "java_in_docker"
                ]
            },
            welcomeCode: {
                typeList: ["javascript", "java"]
            }
        };
    }
};