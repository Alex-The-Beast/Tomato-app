import express from 'express'
import { loginUser ,registerUser } from '../controllers/userController.js'

const usesrRouter =express.Router()

usesrRouter.post('/register' ,registerUser)
usesrRouter.post('/login',loginUser)

export default usesrRouter