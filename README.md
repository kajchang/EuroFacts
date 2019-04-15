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
const dataSources = [
    {
        data: require('./wars.json'),
        pathname: 'wars',
        component: resolve('src/components/War.js'),
        previewComponent: 'WarPreview'
    }
]
```

`data` is the raw json data.

`pathname` is the path under which the pages are created.

`component` is the path to the component for the page.

`previewComponent` is a component for displaying a preview of the page's data in searches or on the index.

#### Helper Files

`sync.js` is a helper file that you should run after adding assets. It will sort the json data in `src/data` and resize and reformat the images in `images/flags` and `images/icons`.

`publish.js` is a shortcut to push to github pages without having to go through a Travis build.
