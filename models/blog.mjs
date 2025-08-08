import { Schema, model } from "mongoose";
const blogSchema = new Schema({
    titulo: {
        type: String, 
        required: true,
    },
    contenido: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now,

    },
    autor: {
        type: String,
        required: true,

    }
}, {collection:"blog"})


const Blog = model("blog", blogSchema)

export {Blog}