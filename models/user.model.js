const mongoose = require("mongoose");
const { isEmail } = require("validator");
// if email if valid
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 40,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      // we put a long password length because it will be crypted
      max: 1030,
      minLength: 6
    },
    kickers: {
      type: [String]
    },
    kicked: {
      type: [String]
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png"
    },
    stars: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);
// before saving we crypt our password for that reason we used bcrypt library and the function .pre
userSchema.pre("save",async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password,salt);
  next();
});
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
