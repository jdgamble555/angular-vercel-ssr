async function loadServer() {
    const serverModule = await import('../dist/apps/{your-app}/server/server.mjs');
    return serverModule.app;
}

export default loadServer().then(app => app());