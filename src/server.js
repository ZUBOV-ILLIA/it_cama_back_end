const http = require('http');

let requestsCount = 0;

const server = http.createServer((request, response) => {

  requestsCount++;

  switch (request.url) {
            case '/students':
      response.write('STUDENTS ');
      break;
    case '/':
    case '/courses':
      response.write('FRONT + BACK ');
      break;
    case '/favicon.ico':
      requestsCount--;
      break;
    default:
      response.write('404 not found ');
  }

  response.write('IT-KAMASUTRA: ' + requestsCount);
  response.end();
});

server.listen(3003);
console.log('server is listening port 3003');
