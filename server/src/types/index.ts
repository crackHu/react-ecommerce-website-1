export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface PaymentDetails {
    cardNumber: string;
    cardExpiry: string;
    cardCvc: string;
    amount: number;
}