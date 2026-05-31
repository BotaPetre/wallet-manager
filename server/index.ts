//server.js

import express from 'express';

const app = express();

// handling CORS
app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route for handling requests from the Angular client
app.get('/api/message', (req: any, res: any) => {
    res.json({
        message: 'Hello App is working from the Express server! Now with TS lol, very nice !'
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});