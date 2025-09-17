import http from 'node:http'
import { routes } from './routes.js';

const server = http.createServer( async (req, res) => {
    //brings the method and url from the req
    const { method, url } = req; 

    // await json(req, res);

    const route = routes.find(route => {
        return route.method === method && route.url === url;
    })
    // console.log(req);
});

console.log('server running at http://localhost:3333');
server.listen(3333);