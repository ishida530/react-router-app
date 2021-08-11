import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductList = ({ match }) => {
    return (
        <>
            <h3>Strona produktu</h3>
            <Product id={match.params.id} />
            <Link to='/products' >pworot do listy produktow </Link>
        </>
    );
}

export default ProductList;