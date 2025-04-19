const UserModel  = require('../Models/User');

const getOne = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ Message: "All fields are required" });
    }

    try {
        const user = await UserModel.findOne({ email, password });

        if (!user) {
            return res.status(404).json({ Message: 'The user not found!' });
        }

        res.status(200).json({ Message: 'User Found!', Userdata: user });
    } catch (err) {
        console.error('Error finding user:', err);
        res.status(500).json({ Message: 'There was a server error.' });
    }
};

module.exports = {
    getOne
};