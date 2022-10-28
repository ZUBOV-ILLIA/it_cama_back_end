const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    switch (request.url) {
      case '/home':
        const data = 'best free online course';
        response.write(data);
        break;
      default:
        response.write('404 not found');
    }

    response.end();
});

server.listen(3003);
console.log('server is listening http://localhost:3003/');
