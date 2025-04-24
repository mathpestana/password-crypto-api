const bcrypt = require('bcrypt');
const CryptoJS = require('crypto-js');
const crypto = require('crypto');

/**
 * Utilitários para diferentes métodos de hash/criptografia
 */
const HashUtils = {
  /**
   * Gera um hash usando bcrypt
   * @param {string} password - Senha a ser criptografada
   * @param {number} saltRounds - Número de rounds de salt (default: 10)
   * @returns {string} Hash da senha
   */
  bcryptHash: async (password, saltRounds = 10) => {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (error) {
      throw new Error(`Erro ao gerar hash bcrypt: ${error.message}`);
    }
  },

  /**
   * Criptografa uma senha usando SHA-256
   * @param {string} password - Senha a ser criptografada
   * @returns {string} Hash da senha em hexadecimal
   */
  sha256: (password) => {
    try {
      return crypto.createHash('sha256').update(password).digest('hex');
    } catch (error) {
      throw new Error(`Erro ao gerar hash SHA-256: ${error.message}`);
    }
  },

  /**
   * Criptografa uma senha usando MD5 (não recomendado para senhas reais)
   * @param {string} password - Senha a ser criptografada
   * @returns {string} Hash da senha em hexadecimal
   */
  md5: (password) => {
    try {
      return crypto.createHash('md5').update(password).digest('hex');
    } catch (error) {
      throw new Error(`Erro ao gerar hash MD5: ${error.message}`);
    }
  },

  /**
   * Criptografa uma senha usando AES
   * @param {string} password - Senha a ser criptografada
   * @param {string} secretKey - Chave secreta para criptografia
   * @returns {string} Texto criptografado
   */
  aesEncrypt: (password, secretKey) => {
    try {
      return CryptoJS.AES.encrypt(password, secretKey).toString();
    } catch (error) {
      throw new Error(`Erro ao criptografar com AES: ${error.message}`);
    }
  }
};

module.exports = HashUtils;