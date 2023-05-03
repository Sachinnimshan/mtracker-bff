import jwt from 'jsonwebtoken';


export const generateToken=(user)=>{
    return jwt.sign({
        _id: user._id,
        name: user.Name,
        email: user.Email,
    }, process.env.JWT_SECRET || 'SomethingSecret',
    {
        expiresIn: '30d'
    });
};