import mongoose, { Schema } from "mongoose";

const loginSchema = new Schema({
    email: String,
    password: String
},{timestamps:true});

const Login = mongoose.models.Topic || mongoose.model("Login", loginSchema);

export default Login;