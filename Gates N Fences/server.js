const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to handle quote submission
app.post('/submit-quote', (req, res) => {
    const { name, email, service, message } = req.body;
    
    // In a real project, you would save this to a database like MongoDB
    console.log(`New Lead Received: 
    Name: ${name}
    Email: ${email}
    Service: ${service}
    Message: ${message}`);

    // Feedback to user (Conversion Success Message)
    res.send(`<h1>Thank you, ${name}!</h1><p>Our team will contact you within 24 hours with your free estimate.</p><a href="/">Back to Home</a>`);
});

app.listen(PORT, () => {
    console.log(`Optimization Project running at http://localhost:${PORT}`);
});