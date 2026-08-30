import express from 'express';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './src/db/schema.ts';

const app = express();

// DB connection
const db = drizzle(process.env.DATABASE_URL!);

// handling CORS
app.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route for handling requests from the Angular client
// app.get('/api/message', async (req: any, res: any) => {

//     const allUsers = await db.select().from(usersTable);

//     res.json({
//         message: 'Hello App is working from the Express server! Now with TS lol, very nice !',
//         users: allUsers
//     });
// });

app.post('/api/create-transaction', async (req: any, res: any) => {

   console.log('Created transaction');

    res.json({
        message: 'test',
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});