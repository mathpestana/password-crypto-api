const HashUtils = require('../utils/hashUtils');
const PasswordUtils = require('../utils/passwordUtils');

/**
 * Modelo para operações relacionadas a senhas
 */
const PasswordModel = {
  /**
   * Criptografa uma senha usando vários algoritmos
   * @param {string} password - Senha a ser criptografada
   * @returns {Promise<Object>} Diferentes hashes da senha
   */
  encryptPassword: async (password) => {
    try {
      if (!password) {
        throw new Error('Senha não fornecida');
      }

      // Gera uma chave secreta aleatória para AES
      const secretKey = require('crypto').randomBytes(16).toString('hex');

      // Calcula os diferentes tipos de hash
      const bcryptHash = await HashUtils.bcryptHash(password);
      const sha256Hash = HashUtils.sha256(password);
      const md5Hash = HashUtils.md5(password);
      const aesEncrypted = HashUtils.aesEncrypt(password, secretKey);

      return {
        original: password,
        bcrypt: bcryptHash,
        sha256: sha256Hash,
        md5: md5Hash,
        aes: {
          encrypted: aesEncrypted,
          key: secretKey
        },
        note: "MD5 não é recomendado para senhas reais por ser inseguro"
      };
    } catch (error) {
      throw error;
    }
  },

  /**
   * Valida a força de uma senha
   * @param {string} password - Senha a ser validada
   * @returns {Object} Resultado da validação com pontuação e feedback
   */
  validatePassword: (password) => {
    if (!password) {
      throw new Error('Senha não fornecida');
    }
    return PasswordUtils.validateStrength(password);
  },

  /**
   * Gera uma senha aleatória com base nos parâmetros fornecidos
   * @param {Object} options - Opções para geração da senha
   * @returns {Object} Senha gerada e sua avaliação
   */
  generatePassword: (options) => {
    const password = PasswordUtils.generatePassword(options);
    const validation = PasswordUtils.validateStrength(password);

    return {
      password,
      validation
    };
  }
};

module.exports = PasswordModel;