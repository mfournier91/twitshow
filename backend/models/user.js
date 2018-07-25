import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    _id: String,
    name: { type: String, required: true },
    avatarURL: String,
    tweets: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }]
})

const User = mongoose.model('User', userSchema)

export default User;