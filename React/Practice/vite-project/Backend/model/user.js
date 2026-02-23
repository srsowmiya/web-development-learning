const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"] // Regex validation
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
}, { timestamps: true });

module.exports =mongoose.model('User',userSchema)