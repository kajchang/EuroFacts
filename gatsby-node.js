const { resolve, join } = require('path');
const slugify = require('slugify');

const { sources } = require('./src/data/sources');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;

    sources.forEach(({ data, pathname, component, previewComponent, numShown }) => {
        createPage({
            path: pathname,
            component: resolve('src/components/LinkSearch.js'),
            context: {
                data,
                pathname,
                previewComponent,
                numShown
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
