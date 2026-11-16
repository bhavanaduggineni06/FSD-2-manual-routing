const http=require('http');
const server=http.createServer((req, res) => {
    if(req.method=='POST' && req.url==="/students") {
        res.writeHead(200, {"Content-type": "text/html"});
        res.write("<h1>Student created.</h1>");
        res.end();
    }
    else if(req.method=='GET' && req.url==="/students") {
        res.writeHead(200, {"Content-type": "text/html"});
        res.write("<h1>Students list</h1>");
        res.end();
    }
    else if(req.method=='GET' && req.url.startsWith("/students")) {
        res.writeHead(200, {"Content-type":"text/html"});
        res.write("<h1>Student Details</h1>");
        res.end();
    }
    else if(req.method=='PUT' && req.url.startsWith("/students/1")) {
        res.writeHead(200, {"Content-type":"text/html"});
        res.write("<h1>Student updated</h1>");
        res.end();
    }
    else if(req.method=='DELETE' && req.url.startsWith("/students/1")) {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>Student deleted</h1>");
        res.end();
    }else {
        res.writeHead(404, {"Content-type":"text/html"});
        res.write("<h1>Page not found</h1>");
        res.end();
    }
});
server.listen(4001, () => {
    console.log("Server running at http://localhost:4001/students");
});