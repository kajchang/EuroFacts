import React from 'react';

import Layout from './Layout';

const War = ({ pageContext }) => {
    const { name } = pageContext;

    return (
        <Layout>
            <span>{ name }</span>
        </Layout>
    );
}

export default War;
