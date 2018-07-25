import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String
}, {collection: 'message'})

const Message = mongoose.model('Message', MessageSchema)
export default Message