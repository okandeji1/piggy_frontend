module.exports = {
    apps: [{
        name: 'piggyalpha',
        script: 'npm',
        args: ['start'],
        watch: false,
        autorestart: true,
        restart_delay: 1000,
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        },
    }, ],
};