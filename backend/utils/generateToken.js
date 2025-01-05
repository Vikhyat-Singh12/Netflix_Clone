import jwt from 'jsonwebtoken';
import {ENV_VARS} from '../config/envVar.js';

export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},ENV_VARS.JWT_SECRET,{expiresIn: '1d'});

    res.cookie('jwt-netflix',token,{
        maxAge: 1*24*60*60*1000,   // 1 days
        httpOnly: true,
        sameSite:"strict",
        secure: ENV_VARS.NODE_ENV !== "Development",
    })

    return token;
};