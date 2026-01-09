const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve your HTML/CSS files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse the data coming from your form
app.use(express.urlencoded({ extended: true }));

// THE FIX: This route handles the form submission
app.post('/submit-quote', (req, res) => {
    const { name, email, service, message } = req.body;
    
    // Log the data to your terminal to prove it works
    console.log(`--- New Lead Captured ---`);
    console.log(`Customer: ${name} | Service: ${service}`);

    // This response replaces the error with a success message
    res.send(`
        <div style="font-family: sans-serif; text-align: center; padding: 100px; background: #f4f7f6; height: 100vh;">
            <div style="background: white; padding: 50px; display: inline-block; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                <h1 style="color: #002e5d;">Request Submitted!</h1>
                <p>Thank you, <strong>${name}</strong>. Your request for <b>${service}</b> has been received.</p>
                <a href="/" style="display: inline-block; margin-top: 20px; padding: 12px 30px; background: #d4af37; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Return to Home</a>
            </div>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Project live at http://localhost:${PORT}`);
});
