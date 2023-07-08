import { Hono } from 'hono';

const app = new Hono();

app.all('*', (c) => fetch(c.req.raw))

export default app;
