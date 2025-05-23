// Vercel Serverless Function: /api/products

export default function handler(req, res) {
  // Mock product data
  const products = [
    {
      id: '1',
      name: 'Product A',
      price: 99.99,
      description: 'A great product',
      imageUrl: '/images/product-a.jpg',
    },
    {
      id: '2',
      name: 'Product B',
      price: 149.99,
      description: 'Another awesome product',
      imageUrl: '/images/product-b.jpg',
    },
  ];
  res.status(200).json(products);
}
