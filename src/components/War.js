import React from 'react';
import { Card, CardTitle, CardBody, Row, Col } from 'reactstrap';
import Layout from './Layout';
import CardText from 'reactstrap/es/CardText'

const War = ({ pageContext }) => {
    const { name, start, end, participants, desc } = pageContext;

    return (
        <Layout>
            <Card style={ { width: 400, padding: 10 } }>
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
                                        group.map(participant => <span style={ { display: 'block', paddingBottom: 5 } }>
                                            <img src={ require(`../images/flags/${ participant }.png`) } alt={ participant } title={ participant } className='spaced-icon'/>
                                            { participant }
                                        </span>)
                                    }
                                </Col>)
                                .reduce((prev, cur) => [prev, <Col className='col-md-auto'>
                                    <div style={ { width: 1, height: '100%', borderLeft: '1px solid', margin: 'auto' } }/>
                                </Col>, cur])
                        }
                    </Row>
                    <CardText>{ desc }</CardText>
                </CardBody>
            </Card>
        </Layout>
    );
}

export default War;
