// Vercel Serverless Function: /api/cart

let cart = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(cart);
  } else if (req.method === 'POST') {
    const { action, item } = req.body;
    if (action === 'add') {
      cart.push(item);
      res.status(201).json(item);
    } else if (action === 'remove') {
      cart = cart.filter(ci => ci.productId !== item.productId);
      res.status(204).end();
    } else if (action === 'clear') {
      cart = [];
      res.status(204).end();
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
