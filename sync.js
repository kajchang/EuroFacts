const fs = require('fs');
const path = require('path');

const stringify = require('json-stringify-pretty-compact');
const sharp = require('sharp');

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

fs.writeFileSync('src/data/wars.json', stringify(
    JSON.parse(fs.readFileSync('src/data/wars.json', 'utf8')).sort(dynamicSort('name')),
));

fs.readdirSync('src/images/flags').forEach(flag => {
    const buffer = fs.readFileSync(path.join('src/images/flags', flag));
    fs.unlinkSync(path.join('src/images/flags', flag));
    sharp(buffer)
        .resize(25, 15)
        .png()
        .toFile(path.join('src/images/flags', flag.replace(/\..+/, '.png')), (err, info) => {});
});
