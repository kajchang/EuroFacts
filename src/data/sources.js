const DataSource = (data, resourceName, pathname) => {
    return Object.freeze({
        data,
        resourceName,
        pathname,
        component: `${ resourceName }.js`,
        previewComponent: `${ resourceName }Preview.js`
    });
}

const dataSources = [
    DataSource(require('./wars.json'), 'War', '/wars'),
    DataSource(require('./countries.json'), 'Country', '/countries')
];

exports.sources = dataSources;

exports.getDataSource = resourceName => dataSources.find(source => source.resourceName === resourceName);
