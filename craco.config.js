const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#39C8C2',
                            '@link-color': '#39C8C2',
                            '@border-radius-base': '99999px',
                            '@btn-padding-horizontal-base': '15px',
                            '@input-padding-horizontal': '15px',
                            '@box-shadow-base': 'unset',
                            '@background-color-base': '#EEEEEF',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
