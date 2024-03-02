const server = import('../dist/angular-vercel-ssr/server/server.mjs');

const app = () => server.app;

export default app;