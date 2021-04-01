const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#36CFCA',
                            '@link-color': '#36CFCA',
                            '@border-radius-base': '99999px',
                            '@btn-padding-horizontal-base': '25px',
                            '@input-padding-horizontal': '25px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
