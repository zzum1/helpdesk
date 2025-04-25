const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("email").isEmail().withMessage("Please enter a valid email format"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 symbols"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstErrorMessage = errors.array()[0];
      return res.status(400).json({
        success: false,
        message: firstErrorMessage.msg,
      });
    }
    next();
  },
];

const validateLogin = [
  body("email").isEmail().withMessage("Please enter a valid email format"),

  body("password").notEmpty().withMessage("Please enter a password"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstErrorMessage = errors.array()[0];
      return res.status(400).json({
        success: false,
        message: firstErrorMessage.msg,
      });
    }
    next();
  },
];

module.exports = {
  validateLogin,
  validateRegister,
};
