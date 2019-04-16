const dataSources = [
    {
        data: require('./wars.json'),
        pathname: '/wars',
        component: 'War.js',
        previewComponent: 'WarPreview.js'
    },
    {
        data: require('./countries'),
        pathname: '/countries',
        component: 'Country.js',
        previewComponent: 'CountryPreview.js'
    }
]

module.exports = dataSources;
