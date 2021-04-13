const http = require("http");

const server = http.createServer((req, res) => {
    res.sendDate("Hello Wolrd!");
})

server.listen(4242, () => {
    console.log('Server is running..., 4242');
})