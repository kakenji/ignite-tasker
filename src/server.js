import http from 'node:http'
import { routes } from './routes.js';
import { json } from '../src/middlewares/json.js';

const server = http.createServer( async (req, res) => {
    //brings the method and url from the req
    const { method, url } = req; 

    await json(req, res);
    // console.log(url);

    //search for the route and if it founds, return true
    const route = routes.find(route => { //the .find method goes through the entire array like a foreach loop
        return route.method === method && route.path === url; //returns true or false, not the route 
    })
    
    if(route){
        console.log(req.body);
        route.handler(req, res);
    }

});

console.log('server running at http://localhost:3333');
server.listen(3333);

