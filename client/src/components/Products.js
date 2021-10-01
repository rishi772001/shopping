import React, { useEffect, useState } from 'react';
import ProductService from '../services/ProductService';
import ProductCard from './ProductCard';

function Products(props) {
    const [state, setState] = useState();
    useEffect(() => {
        ProductService.getAllProducts().then((res) => {
            // console.log(res.data.data)
            setState(res.data.data);
        })
    }, [])
    return (
        <div>
            {state && state.length > 0 && state.map((product) => 
                <ProductCard id={product["_id"]} img={product["img"]} name={product["name"]} price={product["price"]} />
            )}
        </div>
    );
}

export default Products;