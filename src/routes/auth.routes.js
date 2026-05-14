import Router from 'express'
import signUpController from '../controllers/auth/signUpController.js'
import signInController from '../controllers/auth/signInController.js'
import signUpValidation from '../middlewares/auth/signUpValidation.js'
import signInValidation from '../middlewares/auth/signInValidation.js'
import clockinValidation from '../middlewares/auth/clockinValidation.js'
import clockoutValidation from '../middlewares/auth/clockoutValidation.js'
import clockIn from '../controllers/auth/clockinController.js'
import clockOut from '../controllers/auth/clockoutController.js'

const authRouter = Router()

authRouter.post('/sign-up', signUpValidation, signUpController)

authRouter.post('/sign-in', signInValidation, signInController)
authRouter.post('/clockout/:id', clockoutValidation, clockOut)
authRouter.post('/clockin/:id', clockinValidation, clockIn)

authRouter.post('/sign-out', (req, res) => {
  // Handle user logout
  res.send('Logout endpoint')
})

export default authRouter
