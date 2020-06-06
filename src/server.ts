import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Takato',
    'Dede',
    'Ticos'
  ]);
});

app.listen(3333);
