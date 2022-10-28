const http = require('http');
const fs = require('fs');

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const server = http.createServer(async (request, response) => {
  switch (request.url) {
    case '/home': {
      try {
        const data = await readFile('./src/pages/home.html');

        response.write(data);
        response.end();
      } catch (error) {
        const data = fs.readFileSync('./src/img.jpeg');
        response.write(data);
        response.end();
      }

      break;
    }

    case '/about': {
      try {
        await delay(3000);
        const data = await readFile('./src/pages/aboutt.html');
        response.write(data);
        // response.write('ABOUT COURES');
        response.end();
      } catch (error) {
        const data = fs.readFileSync('./src/img.jpeg');
        response.write(data);
        response.end();
      }

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
