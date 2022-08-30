const http = require('http') // request is an event
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => { //creating new HTTP-server and returning it. req is request, and res is response.
    res.statusCode = 200 // means successful fullfil of operation
    res.setHeader('Content-Type', 'text/plain') //establishing the Header "Content-Type"
    res.end('Hello World\n') // finishing the response preparation using method "end"
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})