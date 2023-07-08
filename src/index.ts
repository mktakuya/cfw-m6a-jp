import { Hono } from 'hono';

const app = new Hono();

app.get('/hello', (c) => c.json({
  status: "ok",
}, 200));

app.all('*', (c) => fetch(c.req.raw))


export default app;
