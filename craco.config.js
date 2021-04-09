const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#FBA657',
                            '@text-color': '#666666',
                            '@border-radius-base': '12px',
                            '@box-shadow-base': 'unset',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
