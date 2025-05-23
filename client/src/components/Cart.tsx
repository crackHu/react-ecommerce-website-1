import React, { useEffect, useState } from 'react';
import { CartItem, Product } from '../types';

const Cart: React.FC = () => {
    const [items, setItems] = useState<CartItem[]>([]);

    useEffect(() => {
        // 从 localStorage 读取购物车
        const storedCart = localStorage.getItem('cart');
        const storedProducts = localStorage.getItem('products');
        let products: Product[] = [];
        if (storedProducts) {
            products = JSON.parse(storedProducts);
        }
        if (storedCart && products.length > 0) {
            const cartObj = JSON.parse(storedCart);
            const cartItems: CartItem[] = Object.keys(cartObj).map(productId => {
                const product = products.find(p => p.id === productId);
                return product ? { product, quantity: cartObj[productId] } : null;
            }).filter(Boolean) as CartItem[];
            setItems(cartItems);
        }
    }, []);

    const totalAmount = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return (
        <div className="container">
            <h2 style={{ marginBottom: 24 }}>🛒 你的购物车</h2>
            <button onClick={() => window.location.href = '/payment'} style={{ marginBottom: 24 }}>💳 去支付</button>
            {items.length === 0 ? (
                <p style={{ color: '#888' }}>你的购物车是空的。</p>
            ) : (
                <div>
                    <ul>
                        {items.map(item => (
                            <li key={item.product.id}>
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontWeight: 500 }}>{item.product.name}</span>
                                    <span style={{ marginLeft: 12, color: '#007bff' }}>${item.product.price}</span>
                                    <span style={{ marginLeft: 12 }}>x {item.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3 style={{ textAlign: 'right', marginTop: 24 }}>总计: <span style={{ color: '#e55353' }}>${totalAmount.toFixed(2)}</span></h3>
                </div>
            )}
        </div>
    );
};

export default Cart;