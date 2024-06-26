import mongoose from "mongoose"

//schema is a kind of rules for user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default :'https://images.app.goo.gl/Mxh5RJ3cfdkzijZC9'
    }
}, {
     timestamps:true                //time of user creation and update time
}
);

const User=mongoose.model('User', userSchema)
export default User