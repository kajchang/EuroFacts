const fs = require('fs');

// https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
function dynamicSort(property) {
    let sortOrder = 1;

    if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder === -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

fs.writeFileSync('src/data/wars.json', JSON.stringify(
    JSON.parse(fs.readFileSync('src/data/wars.json', 'utf8')).sort(dynamicSort('name')),
    null,
    4)
);

