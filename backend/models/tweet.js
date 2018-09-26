import mongoose, {Schema} from 'mongoose'

const tweetSchema = new Schema({
    
    text: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    timestamp: {type: Number, default: Date.now()},
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    replies: [{ type: Schema.Types.ObjectId, ref: 'Tweet' }],
    replyingTo: { type: Schema.Types.ObjectId, ref: 'Tweet' },
})

const Tweet = mongoose.model('Tweet', tweetSchema)

export default Tweet;