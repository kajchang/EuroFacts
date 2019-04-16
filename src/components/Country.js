import React from 'react';
import Layout from './Layout'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import WarPreview from './WarPreview';

import { getDataSource } from '../data/sources';

const Country = ({ pageContext }) => {
    const { name } = pageContext;

    return (
        <Layout>
            <Card style={ { maxWidth: 400 } }>
                <CardBody>
                    <CardTitle>
                        <h3>{ name }</h3>
                    </CardTitle>
                    <CardText>
                        <h4>Wars</h4>
                        {
                            getDataSource('War')
                                .data
                                .filter(({ participants }) => participants.some(group => group.includes(name)))
                                .map(war => <WarPreview data={ war } size='small'/>
                            )
                        }
                    </CardText>
                </CardBody>
            </Card>
        </Layout>
    );
}

export default Country;
