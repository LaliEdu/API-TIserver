import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const app = express();
app.use(express.json());

//Criar dados / usuarios / fazer requisição POST
app.post('/users',async(req, res) =>{

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    users.push(req.body);
})
//Mostrar / dados / usuarios / fazer requisição GET
app.get('/users', async (req, res) =>{

     const users = await prisma.user.findMany();
    res.status(200).json(users);
});

//ip 127.0.0.1:8080*/
app.listen(8080);