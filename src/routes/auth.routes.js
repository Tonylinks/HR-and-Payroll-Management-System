import Router from 'express'
import signUpController from '../controllers/auth/signUpController.js'
import signInController from '../controllers/auth/signInController.js'
import signUpValidation from '../middlewares/auth/signUpValidation.js'
import signInValidation from '../middlewares/auth/signInValidation.js'

const authRouter = Router()

authRouter.post('/sign-up', signUpValidation, signUpController)

authRouter.post('/sign-in', signInValidation, signInController)

authRouter.post('/sign-out', (req, res) => {
  // Handle user logout
  res.send('Logout endpoint')
})

export default authRouter
