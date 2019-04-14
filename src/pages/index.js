import React from 'react';
import Layout from '../components/Layout';
import LinkDisplay from '../components/LinkDisplay';

import dataSources from '../data/sources';

import '../css/index.css';

const IndexPage = () => (
    <Layout>
        {
            dataSources.map((source, idx) =>
                <LinkDisplay key={ idx } { ...source }/>
            )
        }
    </Layout>
);

export default IndexPage;
