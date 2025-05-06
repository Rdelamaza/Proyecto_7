
import mongoose from 'mongoose';
import {envs} from './envs.config.js';
import {DataBaseError} from '../errors/TypeError.js';
import { updateDocsDb } from '../services/db/updateDocsDb.js';

const {db} = envs;


export const dbConnect = async ({ updateDocs = false} = {} ) => {
    try {
        await mongoose.connect(db.uri);
        console.log('Database MongoDB connected successfully');

        if(updateDocs){
            await updateDocsDb();
            console.log('Database MongoDB updated successfully');
            
        }
    } catch (error) {
        throw new DataBaseError ('Error connecting to the database',500, error);
    }
};