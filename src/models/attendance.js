import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: '',
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    clockIn: {
      type: Date,
      required: true
    },

    clockOut: {
      type: Date,
      default: null
    },

    totalHours: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

const Attendance = mongoose.model('Attendance', userSchema)

export default Attendance
