import { body } from 'express-validator';

export const registerValidation = [
  body('email').isEmail(),
  body('password'),
  body('fullName').isLength({ min: 5 }),
];
