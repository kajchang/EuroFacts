import React from 'react';
import Layout from '../components/Layout';
import LinkDisplay from '../components/LinkDisplay';

import { sources } from '../data/sources';

const IndexPage = () => (
    <Layout>
        {
            sources.map((source, idx) =>
                <LinkDisplay key={ idx } { ...source }/>
            )
        }
    </Layout>
);

export default IndexPage;
