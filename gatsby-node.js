const { resolve, join } = require('path');
const slugify = require('slugify');

const dataSources = require('./src/data/sources');

exports.createPages = ({ actions }) => {
    console.log(dataSources);

    const { createPage } = actions;

    dataSources.forEach(({ data, path, component }) => {
        createPage({
            path,
            component: resolve('src/components/LinkSearch.js'),
            context: {
                data,
                path_: 'wars'
            }
        });

        data.forEach(entry => createPage({
            path: join(path, slugify(entry.name, { lower: true })),
            component,
            context: entry
        }));
    });
}
