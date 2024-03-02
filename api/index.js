async function loadServer() {
    const serverModule = await import('../dist/angular-vercel-ssr/server/server.mjs');
    return serverModule.app;
}

export default loadServer().then(app => app());