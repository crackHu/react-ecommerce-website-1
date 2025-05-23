export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export const addItemToCart = (cart: CartItem[], item: CartItem): CartItem[] => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        return cart.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
        );
    }
    return [...cart, item];
};

export const removeItemFromCart = (cart: CartItem[], itemId: string): CartItem[] => {
    return cart.filter(cartItem => cartItem.id !== itemId);
};

export const calculateTotal = (cart: CartItem[]): number => {
    return cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
};