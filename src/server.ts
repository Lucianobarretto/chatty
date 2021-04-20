import express from 'express';

const app = express();


/**
 * GET = Buscar
 * POST = Criar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get("/", (request, response) => {
  // return response.send('Olá NLW 05'); => OU usando Json abaixo!!!
  return response.json({
    message: 'Olá NLW 05!',
  });
});

app.post('/', (request, response) => {
  return response.json({ message: 'Usuário salvo com sucesso!' });
});

app.listen(3333, () => console.log('Server is running on port 3333'));
