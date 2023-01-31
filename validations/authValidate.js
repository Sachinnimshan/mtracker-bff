import joi from "joi";

const validation = joi.object({
  name: joi.string().min(5).required(),
  email: joi.string().email().required(),
  password: joi.string().trim(true).min(8).required(),
});

export const userValidate = async (req, res, next) => {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const { error } = validation.validate(payload);
  if (error) {
    res.status(401).send(error);
  } else {
    next();
  }
};
