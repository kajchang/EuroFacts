const path = require('path');

const slugify = require('slugify');
const Wars = require('./src/data/wars.json');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;

    Wars.forEach(war => createPage({
        path: `wars/${ slugify(war.name, { lower: true }) }`,
        component: path.resolve('src/components/War.js'),
        context: war
    }));
}
