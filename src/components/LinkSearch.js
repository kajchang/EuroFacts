import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';
import Layout from './Layout';

const LinkSearch = ({ pageContext }) => {
    const { data, pathname, previewComponent } = pageContext;
    const [search, setSearch] = useState('');

    const PreviewComponent = require(`./${ previewComponent }`).default;

    return (
        <Layout>
            <div>
                <Input placeholder={ `Search ${ pathname.charAt(1).toUpperCase().concat(pathname.slice(2)) }...` } type='text' value={ search } onChange={ event => setSearch(event.target.value) } style={ { fontSize: 20, marginBottom: 10, padding: 20 } }/>
                <ListGroup>
                    {
                        data
                            .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
                            .slice(0, 10)
                            .map((data , idx) =>
                                <ListGroupItem key={ idx }>
                                    <PreviewComponent data={ data } size='medium'/>
                                </ListGroupItem>
                            )
                    }
                </ListGroup>
            </div>
        </Layout>
    );
}

LinkSearch.propTypes = {
    pageContext: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
        })),
        pathname: PropTypes.string.isRequired
    })
}

export default LinkSearch;
