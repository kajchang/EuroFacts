import React from 'react';
import PropTypes from 'prop-types';

const TextParser = ({ text }) => {
    return text.split(/([A-z][a-z]+\((?:(?:[A-Za-z\-']+ ?)+)\))/g).map(part => {
        const match = /([A-z][a-z]+)\(((?:[A-Za-z\-']+ ?)+)\)/g.exec(part);
        if (match) {
            const [ , component, name ] = match;
            const PreviewComponent = require(`./${ component }Preview`).default;
            return <PreviewComponent data={ { name } } size='inline'/>;
        } else {
            return part;
        }
    });
};

TextParser.propTypes = {
    text: PropTypes.string.isRequired
}

export default TextParser;
