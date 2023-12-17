import User from "../../config/models/userModel/userModel.js";
import bcrypt from "bcrypt";

const userLoginPage = (req, res)=>{
    res.send("Login Page");
}

const createUser = async (req, res)=>{
    const {email, user_name, password} = req.body;
    try {
        // Validation
        if (!email || !user_name || !password){
            return res.status(400).json({message: "The following fields are required!"})
        }
        // checking if the user exists
        const userExists = User.findOne({where: {email: email}});
        if (userExists){
            return res.status(400).json({message: "User already exists!!!"});
        }
        // creating hash and salt
        const salt = 10;
        const hashedPassword = bcrypt.hash(password, salt);
        // creating new user
        const newUser = await User.create({
            email: email,
            userName: user_name,
            password: hashedPassword
        });
        return res.status(200).json({message: "User created successfully!", newUser});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error."});
    }
};

export {
    userLoginPage,
    createUser
}