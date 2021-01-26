import React from 'react';

const Product = (props) => {
    return (
        <section className="section">
            <div className="container">
            <h1 className="title">{props.product.name}</h1>
            <h2 className="subtitle">{`$ ${props.product.price.toFixed(2)}`}</h2>
            <p>{props.product.description}</p>
            </div>
        </section>
    );
}

export default Product;