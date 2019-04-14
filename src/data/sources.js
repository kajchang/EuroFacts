const { resolve } = require('path');

const dataSources = [
    {
        data: require('./wars.json'),
        pathname: 'wars',
        component: resolve('src/components/War.js'),
        previewComponent: 'WarPreview'
    }
]

module.exports = dataSources;
