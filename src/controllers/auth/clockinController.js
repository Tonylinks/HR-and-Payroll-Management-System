import Attendance from '../../models/attendance.js'

const clockIn = async (req, res) => {
  try {
    const { employeeId } = req.body

    const attendance = await Attendance.create({
      employeeId,
      date: new Date(),
      clockIn: new Date()
    })

    const populateAttendance = await Attendance.findById(
      attendance._id
    ).populate('employeeId', 'email role')

    res.status(201).json({
      success: true,
      message: 'Clock in successful',
      data: populateAttendance
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export default clockIn
