const { resolve, join } = require('path');
const slugify = require('slugify');

const dataSources = require('./src/data/sources');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;

    dataSources.forEach(({ data, pathname, component, previewComponent }) => {
        createPage({
            path: pathname,
            component: resolve('src/components/LinkSearch.js'),
            context: {
                data,
                pathname,
                previewComponent
            }
        });

        data.forEach(entry => createPage({
            path: join(pathname, slugify(entry.name, { lower: true })),
            component: resolve(join('src', 'components', component)),
            context: entry
        }));
    });
}

// exports.createPages({actions: {createPage: () => {}}});
