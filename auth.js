import { body } from 'express-validator';

export const loginValidation = [body('email', 'Неверный формат почты').isEmail(), body('password')];
export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password'),
  body('fullName', 'Укажите имя'),
];
