import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true, // Elimina los espacios en blanco antes y despues del texto.
  },
  rol: {
    type: String,
    required: true,
    enum: ["Admin", "Usuario"], // Limita las opciones a estas dos.
  },
  correo: {
    type: String,
    required: true, // Requerido.
    unique: true, // Asegura que los correos sean unicos.
    match: [
     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address.",
    ],
  },
  contraseña: {
    type: String,
    required: true,
  },
});

/** Asignamos el esquema a nuestra colleción "Usuarios" en la base de datos */
const Usuario = model("usuarios", usuarioSchema);

/** Exportamos Usuario para reutilizarla en otros lugares. */
export { Usuario };
