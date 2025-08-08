/*
 * Aqui colocamos todos los controladores para nuestras rutas de la colección
 * "Usuarios". Esto viene siendo todas las funciones utilizadas dentro de los
 * metodos `get`, `post`, `patch`, `delete` que conforman el "CRUD" en nuestars
 * rutas.
 *
 * Con esto se nos facilita organizar el codigo y hacerlo mas reutilizable.
 */
import { Usuario } from "../models/user.mjs";
import { ObjectId } from "mongodb";
/**
 * Devuelve todos los documents de la base de datos "Usuarios".
 *
 * @param {*} req
 * @param {*} res
 */
export const obtenerTodosUsuarios = async (req, res) => {
  /** Usamos un "try-catch" para capturar los errores que puedan pasar
   * (servidor caido, no se conecto, etc). Devolvemos la lista de usuarios si
   * todo sale bien 😁
   */
  try {
    const usuarios = await Usuario.find({});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Devuelve un document usando el id de la base de datos "Usuarios".
 *
 * @param {*} req
 * @param {*} res
 */
export const obtenerUsuario = async (req, res) => {
  try {
    /**
     * Obtenemos el id de los parametros que se pasan a traves de la petición.
     */
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    /** Valida si no existe (no se pudo encontrar). */
    if (!usuario) {
      res.status(500).json({ message: '❌ No se pudo encontrar el usuario.' });
      return;
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const crearusuario = async (req, res) => {
    const nuevodocumento = req.body;
    const blog = await Usuario.insertOne(nuevodocumento)
    res.status(200).json(blog)
}

export const borrarusuario = async (req, res) => {
    const {id} = req.params
    const resultado = await Usuario.deleteOne({_id:new ObjectId(id)})
    res.status(200).json({message:"Se ha borrado el usuario"})

}