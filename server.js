const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Manual Routing Experiment</h1>");
    res.write("<p>Server is running. Use the /students routes in your code.</p>");
    res.end();
});

server.listen(process.env.PORT || 4001, () => {
    console.log("Server running");
});
