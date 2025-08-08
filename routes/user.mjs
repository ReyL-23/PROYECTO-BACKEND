/**
 * Inicializamos todas las rutas de ExpressJS para nuestras operaciones de la
 * colección "Usuarios".
 */
import express from "express";
import { obtenerTodosUsuarios, obtenerUsuario, crearusuario, borrarusuario } from "../controllers/user.mjs";

/** Creamos un objeto con todas las rutas para "Usuarios". Este debe ser
 * exportado para ser utilizado en nuestro archivo "index.js" principal. */
const rutasUsuario = express.Router();

/** 
 * Definimos una ruta base para leer todos los usuarios de la base de datos. La
 * ruta base siempre será "/". Como nosotros definimos la ruta padre en el
 * archivo "index.mjs", la cual fue "/api/usuarios", entonces el solo "/"
 * implica la misma ruta.
 */
rutasUsuario.get("/", obtenerTodosUsuarios);

/**
 * Si accedemos a "api/usuarios/abc244", nos devolvera el usuario que tiene ese id
 * en especifico, si no existe, nos devolvera un mensaje de error diciendo que
 * no se pudo encontrar.
 */
rutasUsuario.get("/:id", obtenerUsuario);
rutasUsuario.post("/", crearusuario);
rutasUsuario.delete("/:id", borrarusuario);

export { rutasUsuario };
