// Import Modules.
const express = require('express');
const mongoose = require('mongoose');

// Mongoose.
mongoose.connect('mongodb://admin:password@ds231529.mlab.com:31529/example_db');

const Schema = mongoose.Schema;

const exampleDataSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    value: String
}, {
    collection: 'example-data'
});

const exampleData = mongoose.model('ExampleData', exampleDataSchema);

// Express.
const server = express();
const serverPort = 5000;

server.get('/api/example', (request, response) => {
    let example = [
        {
            'key': 'value',
        }
    ];

    response.json(example);
});

// Initialise API Server.
server.listen(serverPort, () => console.log(`Server started on port ${serverPort}`));
