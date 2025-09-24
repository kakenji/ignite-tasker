import fs from 'node:fs/promises';

const databasePath = '../db.json'

export class Database{
    #database = {}

    
//like a java class
//build the constructor
//write the methods that operates inside the array declared 

    constructor(){
        fs.readFile(databasePath, 'utf-8')
        .then((data) => {
            this.#database = JSON.parse(data);            
        })
        .catch(() => {
            // #persist();
        })
    }

    #persist(){

    }

    insert(data, table){
        this.#database[table].push(data);
    }
}