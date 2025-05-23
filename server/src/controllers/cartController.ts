import { Request, Response } from 'express';
import { CartItem } from '../types';

class CartController {
    private cart: CartItem[] = [];

    public getCart(req: Request, res: Response): void {
        res.json(this.cart);
    }

    public addItem(req: Request, res: Response): void {
        const newItem: CartItem = req.body;
        this.cart.push(newItem);
        res.status(201).json(newItem);
    }

    public removeItem(req: Request, res: Response): void {
        const { productId } = req.body;
        this.cart = this.cart.filter(item => item.productId !== productId);
        res.status(204).send();
    }

    public clearCart(req: Request, res: Response): void {
        this.cart = [];
        res.status(204).send();
    }
}

export default new CartController();