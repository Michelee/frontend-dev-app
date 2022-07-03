const fs = require('fs');
const http = require('http');
const PORT = 3005;

const server = http.createServer(async (request, response) => {
	if (request.method === 'GET' && request.url === '/getPosts') {
		try {
			let allTopics = fs.readFileSync('api/posts.json', 'utf8');
			allTopics = JSON.parse(allTopics);

			response.writeHead(200, {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			});
			response.end(JSON.stringify(allTopics));
		}
		catch (err) {
			console.error(err);
		}
	}

	else {
		response.statusCode = 404;
		response.end('Page not found');
	}
});

console.info(`API running in http://localhost:${PORT}/`);
server.listen(PORT);
