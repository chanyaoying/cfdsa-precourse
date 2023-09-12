const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response(Bun.file("./workshop01/index.html"));
    if (url.pathname === "/script.js") return new Response(Bun.file("./workshop01/script.js"));
    return new Response("404!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
