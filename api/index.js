const server = await import('../dist/angular-vercel-ssr/server/server.mjs');

module.exports = server.app();