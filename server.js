import express from 'express';

const app = express();
app.use(express.json());

const user = []

//Criar dados / usuarios / fazer requisição POST
app.post('Users', (req, res) =>{
    users.push(req.body);
    res.status(201).json(users);
})

//Mostrar / dados / usuarios / fazer requisição GET
app.get('/users', (req, res) => {
    //res.status(200).json(users);
    res.status(200).json(users);
});

//ip 127.0.0.1:8080*/
app.listen(8080);