import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby';

import { join } from 'path';
import slugify from 'slugify';

const Flag = ({ countryName, size }) => {
    let height;

    switch (size) {
        case 'small':
            height = 15;
            break;
        case 'medium':
            height = 19;
            break;
        default:
            height = null;
            break;
    }

    return (
        <img
            src={ require(`../images/flags/${ countryName }.png`) }
            alt={ countryName }
            title={ countryName }
            height={ height }
            onClick={ () => navigateTo(join('/', 'countries', slugify(countryName, { lower: true }))) }
            className='spaced-icon'
        />
    );
};

Flag.propTypes = {
    countryName: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export default Flag;
