import http from 'node:http'

const database = []

//bring database
export const routes = [
    {
        path: '/tasks',
        method: 'POST',
        handler: (req, res) => {
            console.log(req.body);
            const { title, description } = req.body;
            const obj = {
                title: title,
                description: description,
                createdAt: Date.now()
            }

            database.push(obj);
            res.writeHead(201).end();
        }
    },
    {
        path: '/tasks',
        method: 'GET',
        handler: (req, res) => {
            console.log('this route was requested');
            const db = JSON.parse(database)
            res.writeHead(200).end(db);
        }
    },
    {
        path: '/tasks/:id',
        method: 'PUT',
        handler: (req, res) => {

        }
    },
    {
        path: '/tasks/:id/complete',
        method: 'PATCH',
        handler: (req, res) => {

        }
    },
    {
        path: '/tasks/:id',
        method: 'DELETE',
        handler: (req, res) => {

        }
    }
]