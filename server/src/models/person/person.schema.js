import mongoose from "mongoose";
import mongoConstants from "../mongo-constants";


const personSchema = new mongoose.Schema({
    name:{
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    email:{
        type: mongoose.SchemaTypes.String,
        required: true,
        lowercase: true,
    },
    address:{
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    phoneNo:{
        type: Number,
        required: true,
    },
});

export default mongoose.model(mongoConstants.PERSON,personSchema);