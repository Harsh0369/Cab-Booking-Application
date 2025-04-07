import userModel from '../models/user.model.js';


export const createUser = async ({email,password,fullname}) => {
    try {
         

         // Create new user
         const newUser = await userModel.create({
           email,
           password,
           fullname,
         });
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error('Error creating user: ' + error.message);
    }
}