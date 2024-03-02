const server = async () => (await import('../dist/angular-vercel-ssr/server/server.mjs')).app();

module.exports = server;