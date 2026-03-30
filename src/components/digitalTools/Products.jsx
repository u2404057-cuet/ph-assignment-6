import React, { use } from 'react';

const Products = ({productPromise}) => {

    const products = use(productPromise);
    console.log(products);
    return (
        <div>
            
        </div>
    );
};

export default Products;