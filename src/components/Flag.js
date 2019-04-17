import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby';

import { join } from 'path';
import slugify from 'slugify';

const Flag = ({ countryName }) => (
    <img
        src={ require(`../images/flags/${ countryName }.png`) }
        alt={ countryName }
        title={ countryName }
        onClick={ () => navigateTo(join('/', 'countries', slugify(countryName, { lower: true }))) }
        className='spaced-icon'
    />
);

Flag.propTypes = {
    countryName: PropTypes.string.isRequired
}

export default Flag;
