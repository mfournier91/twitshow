import Message from '../models/message'

module.exports = {
    getJelloWorld: (req, res) => {
        //res.json({ message: 'Jello, World!' });
        Message.find((err, message) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, message: message });
        })
    }
}