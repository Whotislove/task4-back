import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { registerValidation, loginValidation } from './auth.js';
import {
  login,
  register,
  getMe,
  getAll,
  deleteUser,
  updateUser,
} from './controllers/UserController.js';
import checkAuth from './utils/checkAuth.js';

mongoose
  .connect(
    'mongodb+srv://whotislove:wwwwww@cluster0.wextkv2.mongodb.net/task4?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => {
    console.log('DB error', err);
  });

const app = express();

app.use(express.json());
app.use(cors());

app.post('/auth/login', loginValidation, login);
//registerValidation проверяет нашу правильность
app.post('/auth/register', registerValidation, register);

app.get('/auth/me', checkAuth, getMe);

app.get('/users', checkAuth, getAll);

app.delete('/users/:id', checkAuth, deleteUser);

app.patch('/users/:id', checkAuth, updateUser);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server ok');
});
