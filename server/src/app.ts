import express from 'express';
import bodyParser from 'body-parser';
import cartRoutes from './routes/cart';
import paymentRoutes from './routes/payment';
import productsRoutes from './routes/products';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/cart', cartRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});