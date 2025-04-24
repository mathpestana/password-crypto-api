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
      // Verifica se os dados vêm do body ou query
      const password = req.body.password || req.query.password;
      
      if (!password) {
        return res.status(400).json({
          success: false,
          message: 'Senha não fornecida. Envie a senha no corpo da requisição ou como parâmetro.'
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
      // Verifica se os dados vêm do body ou query
      const password = req.body.password || req.query.password;
      
      if (!password) {
        return res.status(400).json({
          success: false,
          message: 'Senha não fornecida. Envie a senha no corpo da requisição ou como parâmetro.'
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
      // Verifica se os dados vêm do body ou query
      const body = req.body;
      const query = req.query;
      
      const options = {
        length: parseInt(body.length || query.length) || 12,
        numbers: body.numbers !== undefined ? body.numbers : (query.numbers !== 'false'),
        symbols: body.symbols !== undefined ? body.symbols : (query.symbols !== 'false'),
        uppercase: body.uppercase !== undefined ? body.uppercase : (query.uppercase !== 'false'),
        lowercase: body.lowercase !== undefined ? body.lowercase : (query.lowercase !== 'false')
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