const { body, validationResult } = require("express-validator");

const validateFeedback = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Nome é obrigatório")
    .isLength({ min: 2, max: 100 })
    .withMessage("Nome deve ter entre 2 e 100 caracteres"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Mensagem é obrigatória")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Mensagem deve ter entre 10 e 1000 caracteres"),

  body("rating")
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating deve ser um número entre 1 e 5"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array().map((err) => ({
          field: err.path,
          message: err.msg,
        })),
      });
    }
    next();
  },
];

module.exports = { validateFeedback };
