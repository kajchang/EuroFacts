import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

import slugify from 'slugify';
import Wars from '../data/wars.json';

const IndexPage = () => (
    <Layout>
        <h2>Wars</h2>
        {
            Wars.map(({ name }) => (
                <Link to={ `wars/${ slugify(name, { lower: true }) }` }>
                    <p>{ name }</p>
                </Link>
            ))
        }
    </Layout>
);

export default IndexPage;
