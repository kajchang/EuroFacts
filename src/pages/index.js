import React from 'react';
import Layout from '../components/Layout';
import LinkDisplay from '../components/LinkDisplay';

import '../css/index.css';

import Wars from '../data/wars.json';

const IndexPage = () => (
    <Layout>
        <LinkDisplay data={ Wars } path={ '/wars' }/>
    </Layout>
);

export default IndexPage;
