exports.config = {
    onPrepare: function () {
        protractor.config = {
            projects : {
                idList: [
                    "learnerbot_github_io",
                    "angular_example",
                    "spring_boot_example",
                    "spring_boot_security_example",
                    "spring_boot_mongodb_example",
                    "spring_dynamic_language_support_example",
                    "selenium_example",
                    "d3js_example",
                    "nodejs_example",
                    "nodejs_in_docker",
                    "wordpress_on_heroku_example",
                    "laravel_on_heroku_example"
                ]
            },
            welcomeCode : {
                typeList: [ "javascript", "java" ]
            }
        };
    }
};