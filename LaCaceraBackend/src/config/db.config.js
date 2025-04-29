
import mongoose from 'mongoose';
import {envs} from './envs.config.js';

const {db} = envs;


export const dbConnect = async() =>{
    try {
        await mongoose.connect(db.uri);
        console.log('Database MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);

        
        
    }
};