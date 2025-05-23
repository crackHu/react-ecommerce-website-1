import React from 'react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Our E-Commerce Store</h1>
            <ProductList />
        </div>
    );
};

export default Home;