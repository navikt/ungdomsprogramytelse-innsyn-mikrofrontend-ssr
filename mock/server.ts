import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const api = new Hono();

// Enable CORS for all routes
api.use(
    '/*',
    cors({
        origin: 'http://localhost:4321',
        credentials: true,
    }),
);

serve(api);
