import userModel from '../models/user.model.js';


export const createUser = async (userData) => {
    try {
         const hashedPassword = await userModel.hashPassword(password);

         // Create new user
         const newUser = await userModel.create({
           email,
           password: hashedPassword,
           fullname,
         });
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}