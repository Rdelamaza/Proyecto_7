import { DataBaseError } from '../../errors/TypeError.js';
import {Products} from '../../model/Products.model.js';


export const updateDocsDb = async ()=>{
    try {
        await Products.updateMany(
            {isActive:{$exists:false} },
            {$set: {isActive:true} },
            
        );
        await Products.updateMany(
            {image :{$exists:false} },
            { $set: { image: null} },
        );

    } catch (error) {
        throw new DataBaseError(' Error updating the database',500, error);
    }
};