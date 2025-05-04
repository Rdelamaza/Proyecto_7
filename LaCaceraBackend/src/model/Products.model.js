import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: true },
},
{
    toJSON:{
        transform :(doc,ret)=>{
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
            // delete ret.isActive;//
            return ret;
        }
    }
},
{
    timestamps: true,
    versionKey: false,
});


export const Products = mongoose.model('products', productSchema); 