const server = import('../dist/angular-vercel-ssr/server/server.mjs');

export default () => server.app;