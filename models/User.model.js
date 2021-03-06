const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    role: {
      type: String,
      enum: ['USER', 'RENTER', 'ADMIN'],
      default: 'USER'
    }
  },
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User
