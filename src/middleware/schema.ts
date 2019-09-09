const Joi = require('joi');

const schema = {
  register: Joi.object().keys(
    {
      email: Joi.string().email().required(),
      firstName: Joi.string().min(4).required(),
      lastName: Joi.string().min(4).required(),
      phone: Joi.string().min(11).max(11).required(),
      company: Joi.string().alphanum().required(),
    },
  ),

  user: Joi.object().keys(
    {
      id: Joi.string().min(24).max(24).alphanum().required(),
    },
  ),

  signin: Joi.object().keys(
    {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).alphanum().required(),
    },
  ),
};


module.exports = schema;
