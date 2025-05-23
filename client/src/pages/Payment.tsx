import React from 'react';
import PaymentPage from '../components/PaymentPage';

const Payment: React.FC = () => {
    return (
        <div className="container">
            <h1 style={{ marginBottom: 24 }}>💳 支付</h1>
            <PaymentPage />
        </div>
    );
};

export default Payment;