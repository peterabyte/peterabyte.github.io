import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const environment = args.env || 'local';

const envConfig = {
    local: {
        baseUrl: 'http://localhost:11001'
    },
    prod: {
        baseUrl: 'http://learnerbot.github.io'
    }
};

module.exports = {
    env: envConfig[environment],
    general: {}
};