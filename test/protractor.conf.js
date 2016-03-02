exports.config = {
    onPrepare: function () {
        protractor.config = {
            projects : {
                idList: [ "learnerbot_github_io" ]
            },
            welcomeCode : {
                typeList: [ "javascript", "java" ]
            }
        };
    }
};