const generator = require('generate-password');

/**
 * Utilitários para manipulação e validação de senhas
 */
const PasswordUtils = {
  /**
   * Valida a força de uma senha
   * @param {string} password - Senha a ser validada
   * @returns {Object} Resultado da validação com pontuação e feedback
   */
  validateStrength: (password) => {
    if (!password) {
      return {
        score: 0,
        strength: 'Muito fraca',
        feedback: ['A senha não pode ser vazia']
      };
    }

    let score = 0;
    const feedback = [];

    // Verifica o comprimento da senha
    if (password.length < 8) {
      feedback.push('A senha deve ter pelo menos 8 caracteres');
    } else {
      score += password.length > 12 ? 2 : 1;
    }

    // Verifica presença de letras minúsculas
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Adicione letras minúsculas');
    }

    // Verifica presença de letras maiúsculas
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Adicione letras maiúsculas');
    }

    // Verifica presença de números
    if (/\d/.test(password)) {
      score += 1;
    } else {
      feedback.push('Adicione números');
    }

    // Verifica presença de caracteres especiais
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      score += 1;
    } else {
      feedback.push('Adicione caracteres especiais');
    }

    // Penaliza senhas comuns
    const commonPasswords = ['123456', 'password', 'qwerty', 'admin', '123456789', '12345678'];
    if (commonPasswords.includes(password.toLowerCase())) {
      score = 0;
      feedback.push('Esta é uma senha muito comum');
    }

    // Determina a força da senha com base na pontuação
    let strength;
    if (score === 0) {
      strength = 'Muito fraca';
    } else if (score <= 2) {
      strength = 'Fraca';
    } else if (score <= 4) {
      strength = 'Média';
    } else if (score <= 5) {
      strength = 'Forte';
    } else {
      strength = 'Muito forte';
    }

    return {
      score,
      strength,
      feedback: feedback.length ? feedback : ['Senha adequada']
    };
  },

  /**
   * Gera uma senha aleatória com base nos parâmetros fornecidos
   * @param {Object} options - Opções para geração da senha
   * @returns {string} Senha gerada
   */
  generatePassword: (options = {}) => {
    const defaultOptions = {
      length: 12,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
      excludeSimilarCharacters: true
    };

    const passwordOptions = { ...defaultOptions, ...options };
    return generator.generate(passwordOptions);
  }
};

module.exports = PasswordUtils;