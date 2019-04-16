import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { join } from 'path';
import slugify from 'slugify';

const Flag = ({ countryName }) => (
    <Link to={ join('/', 'countries', slugify(countryName, { lower: true })) }>
        <img src={ require(`../images/flags/${ countryName }.png`) } alt={ countryName } title={ countryName } className='spaced-icon'/>
    </Link>
);

Flag.propTypes = {
    countryName: PropTypes.string.isRequired
}

export default Flag;
