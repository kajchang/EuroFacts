import React from 'react';
import Layout from './Layout'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import WarPreview from './WarPreview';
import Flag from './Flag';

import { getDataSource } from '../data/sources';

const CountryPage = ({ pageContext }) => {
    const { name } = pageContext;

    return (
        <Layout>
            <Card style={ { maxWidth: 400 } }>
                <CardBody>
                    <CardTitle>
                        <Flag countryName={ name } size='medium'/><h3 style={ { display: 'inline', marginBottom: 0 } }>{ name }</h3>
                        <h4>Wars</h4>
                    </CardTitle>
                    <CardText>
                        {
                            getDataSource('War')
                                .data
                                .filter(({ participants }) => participants.some(group => group.includes(name)))
                                .map((war, idx) => <WarPreview key={ idx } data={ war } size='small'/>
                            )
                        }
                    </CardText>
                </CardBody>
            </Card>
        </Layout>
    );
}

export default CountryPage;
