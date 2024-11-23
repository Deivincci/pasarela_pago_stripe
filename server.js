const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_API_KEY_PRIVATE'); // Cambia por tu clave secreta de Stripe



const app = express();
app.use(cors());
app.use(express.json());

let cart = []; // Almacenará los productos en el carrito (solo para pruebas)

// Ruta para agregar productos al carrito
app.post('/add-to-cart', (req, res) => {
    const { name, price, quantity } = req.body;
    cart.push({ name, price, quantity });
    res.json({ message: 'Producto añadido al carrito', cart });
});

// Ruta para ver el carrito
app.get('/cart', (req, res) => {
    res.json(cart);
});

// Ruta para crear una sesión de Stripe
app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cart.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: { name: item.name },
                    unit_amount: Math.round(item.price * 100), // Stripe trabaja en centavos
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        // Vaciar el carrito después de crear la sesión
        cart = [];
        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Algo salió mal' });
    }
});

// Ruta para el éxito del pago
app.get('/success', (req, res) => {
    res.send('<h1>Pago realizado con éxito</h1>');
});

// Ruta para cancelar el pago
app.get('/cancel', (req, res) => {
    res.send('<h1>El pago ha sido cancelado</h1>');
});

// Servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});