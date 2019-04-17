import React from 'react';
import { Card, CardTitle, CardBody, Row, Col, CardText } from 'reactstrap';
import Layout from './Layout';
import CountryPreview from './CountryPreview';
import TextParser from './TextParser';

const WarPage = ({ pageContext }) => {
    const { name, start, end, participants, desc } = pageContext;

    let elIdx = 0;

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
                                .map(group => <Col key={ elIdx++ }>
                                    {
                                        group.map((participant, idx) => <span key={ idx } style={ { display: 'block', paddingBottom: 5 } }>
                                            <CountryPreview data={ { name: participant } } size='small'/>
                                        </span>)
                                    }
                                </Col>)
                                .reduce((prev, cur) => [prev, <Col key={ elIdx++ } className='col-md-auto'>
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

export default WarPage;
