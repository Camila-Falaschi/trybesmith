import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().integer().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const orderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().integer().min(1)).required(),
});

export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});