import React from 'react';

import Hero from './components/Hero';
import Product from './components/Product';
import Footer from './components/Footer';

import products from './products'

import './App.sass';

const App = () => {
    return (
        <div>
            <Hero></Hero>
            {
                products.map((product) => {
                    return <Product key={product.id} product={product} />
                })
            }
            <Footer></Footer>
        </div>
    );
}

export default App;