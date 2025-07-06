const PasswordModel = require('../models/passwordModel');

/**
 * Controlador para operações relacionadas a senhas
 */
const PasswordController = {
  /**
   * Criptografa uma senha usando diferentes algoritmos
   * @param {object} req - Requisição Express
   * @param {object} res - Resposta Express
   */
  encryptPassword: async (req, res) => {
    try {
      // Aceita tanto query parameter quanto body
      const password = req.query.password || req.body.password;
      
      if (!password) {
        return res.status(400).json({
          success: false,
          message: 'Senha não fornecida. Use ?password=suaSenha na URL ou envie no body da requisição'
        });
      }
      
      const result = await PasswordModel.encryptPassword(password);
      
      res.json({
        success: true,
        message: 'Senha criptografada com sucesso',
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao criptografar senha',
        error: error.message
      });
    }
  },

  /**
   * Valida a força de uma senha
   * @param {object} req - Requisição Express
   * @param {object} res - Resposta Express
   */
  validatePassword: (req, res) => {
    try {
      // Aceita tanto query parameter quanto body
      const password = req.query.password || req.body.password;
      
      if (!password) {
        return res.status(400).json({
          success: false,
          message: 'Senha não fornecida. Use ?password=suaSenha na URL ou envie no body da requisição'
        });
      }
      
      const validation = PasswordModel.validatePassword(password);
      
      res.json({
        success: true,
        message: 'Senha validada com sucesso',
        data: {
          password: password,
          ...validation
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao validar senha',
        error: error.message
      });
    }
  },

  /**
   * Gera uma senha forte aleatória
   * @param {object} req - Requisição Express
   * @param {object} res - Resposta Express
   */
  generatePassword: (req, res) => {
    try {
      const { length, numbers, symbols, uppercase, lowercase } = req.query;
      
      const options = {
        length: length ? parseInt(length) : 12,
        numbers: numbers !== 'false',
        symbols: symbols !== 'false',
        uppercase: uppercase !== 'false',
        lowercase: lowercase !== 'false'
      };
      
      const result = PasswordModel.generatePassword(options);
      
      res.json({
        success: true,
        message: 'Senha gerada com sucesso',
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao gerar senha',
        error: error.message
      });
    }
  }
};

module.exports = PasswordController;
