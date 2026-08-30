import express from 'express';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { transactionsTable } from './src/db/schema.ts';
import { sql } from 'drizzle-orm';

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

// Mandatory, parse incoming JSON requests
app.use(express.json());

// route for handling requests from the Angular client
// app.get('/api/message', async (req: any, res: any) => {

//     const allUsers = await db.select().from(usersTable);

//     res.json({
//         message: 'Hello App is working from the Express server! Now with TS lol, very nice !',
//         users: allUsers
//     });
// });

app.post('/api/create-transaction', async (req: any, res: any) => {
  try {
    const transaction = await db
      .insert(transactionsTable)
      .values({
        // id populated by DB
        createdAt: new Date(req.body.createdAt),
        currencyCode: req.body.currencyCode,
        note: req.body.note,
        createdBy: crypto.randomUUID(),
        categoryId: crypto.randomUUID(),
        workspaceId: crypto.randomUUID(),
      })
      .returning();

    res.json(transaction[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create transaction' });
  }
});

app.listen(3000, async () => {
    console.log('Server listening on port 3000');

    try {
        await db.execute(sql`SELECT 1`);
        console.log('Connected to PostgreSQL');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
});