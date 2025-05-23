import React, { useState } from 'react';

const PaymentPage: React.FC = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPaymentDetails({
            ...paymentDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement payment processing logic here
        console.log('Payment details submitted:', paymentDetails);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto', background: '#f7f8fa', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ marginBottom: 18 }}>
                <label>卡号:
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', marginTop: 6 }}
                        placeholder="请输入16位卡号"
                    />
                </label>
            </div>
            <div style={{ marginBottom: 18 }}>
                <label>有效期:
                    <input
                        type="text"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', marginTop: 6 }}
                        placeholder="MM/YY"
                    />
                </label>
            </div>
            <div style={{ marginBottom: 18 }}>
                <label>CVV:
                    <input
                        type="text"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', marginTop: 6 }}
                        placeholder="三位数CVV"
                    />
                </label>
            </div>
            <button type="submit" style={{ width: '100%' }}>立即支付</button>
        </form>
    );
};

export default PaymentPage;