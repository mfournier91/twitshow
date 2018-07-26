import User from '../models/user'

module.exports = {
    getUsers: (req, res) => {
        User.find((err, users) => {
            if (err) return res.json({ error: err });
            return res.json(users);
        })
    }
}