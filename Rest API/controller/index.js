const Joi = require("joi");
const bcrypt = require("bcrypt");
const User = require("../models/index");
const register = async (req, res, next) => {
  const registerSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
  });
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return next(error);
  }
  try {
    const exist = await User.exists({ email: req.body.email });
    if (exist) {
      return next(
        CustomErrorHandler.alreadyExist("This email is already taken.")
      );
    }
  } catch (error) {
    return next(err);
  }

  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    const result = await user.save();
  } catch (error) {
    return next(err);
  }
  res.json({ msg: "hello from express" });
};

module.exports = register;
