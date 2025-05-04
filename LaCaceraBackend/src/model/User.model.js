import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        nombre: {type: String,required: true },
        apellido: {type: String,required: true },
        email: {type: String,required: true, 
            unique: true, 
            trim:true, 
            lowercase:true,
            match: [/.+@.+\..+/, 'Invalid email'] },
        password: {type: String,required: true, trim:true },
        telefono: {type: String,required: true, trim:true },
        fecha_nacimiento: {type: Date,required: true },
        isActive: {type: Boolean,default: true },
        isAdmin: {type: Boolean,default: false },
    },
    {   
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password;
                delete ret.__v;
                delete ret.createdAt;
                delete ret.updatedAt;
                delete ret.isActive;
                delete ret.isAdmin;
                return ret;
            }
        }, 
        versionkey: false, 
        timestamps: true 
    }
);

export const Users = mongoose.model('users', usersSchema);