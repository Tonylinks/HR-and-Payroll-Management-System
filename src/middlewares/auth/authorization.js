const authorization = (...assignedRoles) => {
  return (req, res, next) => {
    const roles = [...assignedRoles]
    const userRole = req.user.role
    if (!roles.includes(userRole)) {
      return res
        .status(403)
        .json({ success: false, error: { message: 'Unauthorized!' } })
    }
    next()
  }
}

export default authorization
