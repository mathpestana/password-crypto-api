const express = require('express');
const router = express.Router();
const PasswordController = require('../controllers/passwordController');

/**
 * @route   POST /api/password/encrypt
 * @desc    Criptografa uma senha usando diferentes algoritmos
 * @access  Público
 */
router.post('/encrypt', PasswordController.encryptPassword);

/**
 * @route   POST /api/password/validate
 * @desc    Valida a força de uma senha
 * @access  Público
 */
router.post('/validate', PasswordController.validatePassword);

/**
 * @route   POST /api/password/generate
 * @desc    Gera uma senha forte aleatória
 * @access  Público
 */
router.post('/generate', PasswordController.generatePassword);

// Mantém rotas GET para compatibilidade
router.get('/encrypt', PasswordController.encryptPassword);
router.get('/validate', PasswordController.validatePassword);
router.get('/generate', PasswordController.generatePassword);

module.exports = router;