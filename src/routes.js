import http from 'node:http'

//bring database
export const routes = [
    {
        path: '/tasks',
        method: 'POST',
        handler: (req, res) => {
            //...
        }
    },
    {
        path: '/tasks',
        method: 'GET',
        handler: (req, res) => {
            console.log('this route was requested');
            res.writeHead(200).end()
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