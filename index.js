/// importar express
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Itapu')
})

app.get('/api', (req, res) => {
    res.send(process.env.IMAGEN)
})

app.post('/api', (req, res) => {
    res.send('Post')
})

app.listen(process.env.PORT, ()=>{
    console.log('Server corriendo el el puerto', process.env.PORT);
})