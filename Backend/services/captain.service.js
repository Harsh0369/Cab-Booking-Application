import captainModel from "../models/captain.model.js";

export const createCaptain = async (fullname,email,password,color,plate,capacity,vehicleType) => {
    if(!fullname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are required");
    }
    const newCaptain = captainModel.create({
        fullname,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return newCaptain;
}