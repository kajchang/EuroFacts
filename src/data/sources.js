const { resolve } = require('path');

const dataSources = [
    {
        data: require('./wars.json'),
        path: 'wars',
        component: resolve('src/components/War.js')
    }
]

module.exports = dataSources;
