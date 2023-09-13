import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    password: String
}, { timestamps: true })

const User = models.user || mongoose.model('user', userSchema)
export default User