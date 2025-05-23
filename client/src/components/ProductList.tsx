import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [cart, setCart] = useState<{ [id: string]: number }>({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                // 存储商品数据到 localStorage，便于购物车页面使用
                localStorage.setItem('products', JSON.stringify(data));
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
        // 初始化购物车
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const handleAddToCart = (productId: string) => {
        setCart(prev => {
            const updated = { ...prev, [productId]: (prev[productId] || 0) + 1 };
            localStorage.setItem('cart', JSON.stringify(updated));
            return updated;
        });
    };

    const handleGoToCart = () => {
        navigate('/cart');
    };

    const handleGoToPayment = () => {
        navigate('/payment');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 24 }}>
                <button onClick={handleGoToCart}>🛒 去购物车</button>
                <button onClick={handleGoToPayment}>💳 去支付</button>
            </div>
            <h2 style={{ marginBottom: 24 }}>商品列表</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ margin: 0 }}>{product.name}</h3>
                            <p style={{ margin: '8px 0 4px 0', color: '#666' }}>{product.description}</p>
                            <p style={{ margin: 0, fontWeight: 500 }}>价格: <span style={{ color: '#007bff' }}>${product.price}</span></p>
                        </div>
                        <div>
                            <button onClick={() => handleAddToCart(product.id)} style={{ marginRight: 8 }}>加入购物车</button>
                            {cart[product.id] && <span style={{ color: '#28a745' }}>已加入: {cart[product.id]}</span>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;