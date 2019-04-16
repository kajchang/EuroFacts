import React from 'react';
import Layout from './Layout'
import { Card, CardBody, CardTitle } from 'reactstrap'
import WarPreview from './WarPreview';
import CardText from 'reactstrap/es/CardText'

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
                            require('../data/wars')
                                .filter(({ participants }) => participants.some(group => group.includes(name)))
                                .map(war => <WarPreview data={ war } size='tiny'/>
                            )
                        }
                    </CardText>
                </CardBody>
            </Card>
        </Layout>
    );
}

export default Country;
