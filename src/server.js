const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    switch (request.url) {
      case '/home': {
        fs.readFile('./src/pages/home.html', (err, data) => {
          if (err) {
            response.write('500 some error occured');
            response.end();
          } else {
            console.log(data);
            response.write(data);
            response.end();
          }
        });
        break;
      }

      case '/about': {
        fs.readFile('./src/pages/about.html', (err, data) => {
          if (err) {
            response.write('500 some error occured');
            response.end();
          } else {
            response.write(data);
            response.end();
          }
        });

        break;
      }

      case '/favicon.ico': {
        const data = fs.readFileSync('./src/favicon.ico');
        response.write(data);
        response.end();
        break;
      }
        
      default:
        response.write('404 not found');
        response.end();
    }

});

server.listen(3003);
console.log('server is listening http://localhost:3003/');
