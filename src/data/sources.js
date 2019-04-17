const DataSource = (data, resourceName, pathname, numShown=5) => {
    return Object.freeze({
        data,
        resourceName,
        pathname,
        component: `${ resourceName }Page.js`,
        previewComponent: `${ resourceName }Preview.js`,
        numShown
    });
}

const dataSources = [
    DataSource(require('./wars.json'), 'War', '/wars'),
    DataSource(require('./countries.json'), 'Country', '/countries', 10)
];

exports.sources = dataSources;

exports.getDataSource = resourceName => dataSources.find(source => source.resourceName === resourceName);
