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
                            '@link-color': '#FBA657',
                            '@border-radius-base': '12px',
                            '@box-shadow-base': 'unset'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
