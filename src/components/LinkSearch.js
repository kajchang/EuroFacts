import React, { useState } from 'react';
import { Input, ListGroup, ListGroupItem, Button } from 'reactstrap';
import Layout from './Layout';

const LinkSearch = ({ pageContext }) => {
    const { data, pathname, numShown, previewComponent } = pageContext;

    const [search, setSearch] = useState('');
    const [start, setStart] = useState(0);

    const PreviewComponent = require(`./${ previewComponent }`).default;

    const results = data
        .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));

    return (
        <Layout>
            <div>
                <Input placeholder={ `Search ${ pathname.charAt(1).toUpperCase().concat(pathname.slice(2)) }...` } type='text' value={ search } onChange={ event => {
                    setSearch(event.target.value);
                    setStart(0);
                } } style={ { fontSize: 20, marginBottom: 10, padding: 20 } }/>
                <ListGroup>
                    {
                        results
                            .slice(start, start + numShown)
                            .map((data, idx) =>
                                <ListGroupItem key={ idx } style={ { padding: 10 } }>
                                    <PreviewComponent data={ data } size='medium'/>
                                </ListGroupItem>
                            )
                    }
                </ListGroup>
                <Button onClick={ () => setStart(start - numShown) } style={ { marginLeft: 25, marginTop: 15 } } disabled={ start - numShown < 0 }>
                    Previous Page
                </Button>
                <Button onClick={ () => setStart(start + numShown) } style={ { float: 'right', marginRight: 25, marginTop: 15 } } disabled={ start + numShown > results.length }>
                    Next Page
                </Button>
            </div>
        </Layout>
    );
}

export default LinkSearch;
