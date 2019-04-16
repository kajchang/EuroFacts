# louis

louis is an european history wiki made using Gatsby.

It's live on github pages [here](https://kajchang.github.io/louis/).

### Development

#### Gatsby

[Gatsby Getting Started](https://www.gatsbyjs.org/docs/)

#### Adding Data

The wiki is built from `.json` files located in `src/data`.

The usage of the data sources is defined in `src/data/sources.js`:

```js
const DataSource = (data, resourceName, pathname) => {
    return Object.freeze({
        data,
        resourceName,
        pathname,
        component: `${ resourceName }Page.js`,
        previewComponent: `${ resourceName }Preview.js`
    });
}

const dataSources = [
    DataSource(require('./wars.json'), 'War', '/wars'),
    DataSource(require('./countries.json'), 'Country', '/countries')
];
```

`data` is the raw json data.

`resourceName` is the display name for the data.

`pathname` is the path under which the pages are created.

`component` and `previewComponent` are derived from `resourceName` and map to the corresponding components for the pages.

#### Helper Files

`sync.js` is a helper file that you should run after adding assets. It will sort the json data in `src/data` and resize and reformat the images in `images/flags` and `images/icons`. It also compiles a list of countries from other data sources.

`publish.js` is a shortcut to push to github pages without having to go through a Travis build.

### Text Formatting

Text in descriptions and in the future other fields is run through a parser located in `src/components/TextParser` that transforms calls like `CountryPage(Great Britain)` into a link and preview to the corresponding page.
