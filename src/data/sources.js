const dataSources = [
    {
        data: require('./wars.json'),
        pathname: '/wars',
        component: 'War.js',
        previewComponent: 'WarPreview.js'
    }
]

module.exports = dataSources;
