import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de users');

  response.json([
    'Vinicius',
    'Diego',
    'Wesley'
  ]);
});

app.listen(3333);