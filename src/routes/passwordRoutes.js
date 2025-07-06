const express = require('express');
const router = express.Router();
const PasswordController = require('../controllers/passwordController');

/**
 * @route   GET /api/password/encrypt
 * @desc    Criptografa uma senha usando diferentes algoritmos
 * @access  Público
 */
router.get('/encrypt', PasswordController.encryptPassword);

/**
 * @route   POST /api/password/encrypt
 * @desc    Criptografa uma senha usando diferentes algoritmos
 * @access  Público
 */
router.post('/encrypt', PasswordController.encryptPassword);

/**
 * @route   GET /api/password/validate
 * @desc    Valida a força de uma senha
 * @access  Público
 */
router.get('/validate', PasswordController.validatePassword);

/**
 * @route   POST /api/password/validate
 * @desc    Valida a força de uma senha
 * @access  Público
 */
router.post('/validate', PasswordController.validatePassword);

/**
 * @route   GET /api/password/generate
 * @desc    Gera uma senha forte aleatória
 * @access  Público
 */
router.get('/generate', PasswordController.generatePassword);

module.exports = router;
