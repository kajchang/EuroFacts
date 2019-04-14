import React, { useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';
import Layout from './Layout';

import { join } from 'path';
import slugify from 'slugify';

const LinkSearch = ({ pageContext }) => {
    const { data, path_ } = pageContext;
    const [search, setSearch] = useState('');

    return (
        <Layout>
            <div style={ { paddingLeft: 50, paddingRight: 50, paddingTop: 25 } }>
                <Input placeholder='Search...' type='text' value={ search } onChange={ event => setSearch(event.target.value) } style={ { fontSize: 20, marginBottom: 10 } }/>
                <ListGroup>
                    {
                        data
                            .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
                            .slice(0, 10)
                            .map(({ name }, idx) => <Link to={ join(path_, slugify(name, { lower: true })) }>
                                <ListGroupItem key={ idx }>{ name }</ListGroupItem>
                            </Link>)
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
            path_: PropTypes.string.isRequired
        }))
    })
}

export default LinkSearch;
