import React from 'react';
import { Card, CardTitle, CardBody, Row, Col, CardText } from 'reactstrap';
import Layout from './Layout';
import CountryPreview from './CountryPreview';
import TextParser from './TextParser';

const War = ({ pageContext }) => {
    const { name, start, end, participants, desc } = pageContext;

    return (
        <Layout>
            <Card style={ { maxWidth: 400 } }>
                <CardBody>
                    <CardTitle>
                        <h3>{ name }</h3>
                    </CardTitle>
                    <CardText>({ start } - { end })</CardText>
                    <Row>
                        {
                            participants
                                .map(group => <Col>
                                    {
                                        group.map((participant, idx) => <span style={ { display: 'block', paddingBottom: 5 } }>
                                            <CountryPreview key={ idx } data={ { name: participant } } size='small'/>
                                        </span>)
                                    }
                                </Col>)
                                .reduce((prev, cur) => [prev, <Col className='col-md-auto'>
                                    <div style={ { width: 1, height: '100%', borderLeft: '1px solid', margin: 'auto' } }/>
                                </Col>, cur])
                        }
                    </Row>
                    <CardText>
                        <TextParser text={ desc }/>
                    </CardText>
                </CardBody>
            </Card>
        </Layout>
    );
}

export default War;
