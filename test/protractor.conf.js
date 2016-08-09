exports.config = {
    onPrepare: function () {
        protractor.config = {
            projects : {
                idList: [
                    "learnerbot_github_io",
                    "angular_example",
                    "spring_boot_example",
                    "spring_boot_security_example",
                    "spring_boot_mongodb_example"
                ]
            },
            welcomeCode : {
                typeList: [ "javascript", "java" ]
            }
        };
    }
};