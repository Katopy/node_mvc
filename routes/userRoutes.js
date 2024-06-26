import express from "express";
import { formularioLogin, authenticate, formularioRegister, register, confirm, confirmToken, newPassword, formularioForgotPassword, resetPassword, } from "../controllers/usuarioController.js";

const router = express.Router();

//Routing (diferentes endpoints que soporta nuestra app)
// To log in
router.get('/login', formularioLogin)
router.post('/login', authenticate)

// To register
router.get('/register', formularioRegister)
router.post('/register', register)

router.get('/forgot-password', formularioForgotPassword)
router.post('/forgot-password', resetPassword)

// Luego de enviar el correo, pagina para confirmar cuenta
// Routing dinamico --> controller
router.get('/confirm/:token', confirm)

// Mostrar al abrir el link
router.get('/forgot-password/:token', confirmToken)
router.post('/forgot-password/:token', newPassword)

export default router