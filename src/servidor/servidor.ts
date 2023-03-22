import express from 'express';

const servidor = express();


servidor.get('/', (req, res) => {

    return res.send('Hello World!');

});


export { servidor };