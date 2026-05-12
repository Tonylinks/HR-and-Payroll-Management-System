import bcrypt from 'bcrypt'
import User from '../../models/userModel.js'

const signInValidation = async (req, res, next) => {
  const { email, password } = req.body

  if (!email?.trim() || !password?.trim()) {
    return res
      .status(400)
      .json({ success: false, error: { message: 'all fields are required' } })
  }

  const emailReg = /^[^\s@\.]+@[^\s@\.]+\.[^\s@\.]+$/

  if (!emailReg.test(email?.trim())) {
    return res
      .status(400)
      .json({ success: false, error: { message: 'invalid email format' } })
  }

  let existingUser

  try {
    existingUser = await User.findOne({ email })

    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, error: { message: 'invalid credentials' } })
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    )

    if (!isValidPassword) {
      return res
        .status(400)
        .json({ success: false, error: { message: 'invalid credentials' } })
    }
  } catch (err) {
    console.error(err.message)
    return res
      .status(500)
      .json({ success: false, error: { message: 'an error occurred' } })
  }

  req.user = existingUser

  next()
}

export default signInValidation
