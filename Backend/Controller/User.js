const UserModel  = require('../Models/User');
const bcrypt = require('bcrypt');


//User Data
//done with Database read and write operations performed

const getOne = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ Message: "All fields are required" });
    }

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ Message: 'The user not found!' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ Message: 'Invalid credentials!' });
        }

        const { password: _, ...userWithoutPassword } = user._doc;
        res.status(200).json({ Message: 'User Found!', Userdata: userWithoutPassword });

    } catch (err) {
        console.error('Error finding user:', err);
        res.status(500).json({ Message: 'There was a server error.' });
    }
};

const postOne = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ Message: "All fields are required" });
    }

    try {
        if(await UserModel.findOne({ email })) {
            return res.status(400).json({ Message: 'User already exists!' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await UserModel.create({ name, email, password: hashedPassword });

        const { password: _, ...userWithoutPassword } = user._doc;
        res.status(201).json({ Message: 'User Created!', Userdata: userWithoutPassword });

    } catch (err) {
        console.error('Error finding user:', err);
        res.status(500).json({ Message: 'There was a server error.' });
    }
}


const putOne = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ Message: "All fields are required" });
    }

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ Message: "User not found" });
        }

        const isSameName = user.name === name;
        const isSameEmail = user.email === email;
        const isSamePassword = await bcrypt.compare(password, user.password);

        if (isSameName && isSameEmail && isSamePassword) {
            return res.status(200).json({ Message: "All input are same", Userdata: {
                name: user.name,
                email: user.email
            }});
        }

        user.name = name;
        user.email = email;

        const saltRounds = 10;
        user.password = await bcrypt.hash(password, saltRounds);

        await user.save();

        const { password: _, ...userWithoutPassword } = user._doc;
        res.status(200).json({ Message: 'User Updated!', Userdata: userWithoutPassword });

    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ Message: 'There was a server error.' });
    }
};


module.exports = {
    getOne,
    postOne,
    putOne
};