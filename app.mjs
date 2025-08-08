import express from "express";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { rutasUsuario } from "./routes/user.mjs";
import { rutablog } from "./routes/blog.mjs";

/**
 * La libreria de dotenv nos permitira leer "variables de entorno" del archivo
 * `.env` de nuestro repositorio. En este caso, a la ruta de nuestra base de
 * datos en MongoDB. Siempre la llamamos en el principio para que carguen las
 * variables necesarias. Estas variables quedan disponibles en el metodo
 * `process.env`.
 */
dotenv.config();

const rutaMongo = process.env.MONGODB_URL;
/* Obtenemos el nombre de nuestra base de datos de las variables de entorno. */
const nombreDB = process.env.BASE_DE_DATOS;

/* --------- Inicializamos la conexion a MongoDB --------- */

/**
 * Conexión hecha con mongoose. Le proporcionamos el nombre de nuestra base de
 * datos.
 */
mongoose
  .connect(rutaMongo, { dbName: nombreDB })
  .then(() => console.log("🚀 Conectado a MongoDB 🚀"))
  .catch((err) =>
    console.error("🚫 No se pudo conectar a MongoDB: ", err.message)
  );

/** La misma conexion pero con el cliente de MongoDB y sin usar "dotenv". */

// const client = new MongoClient("mongodb://localhost:27017/");
// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }
// let db = conn.db("red-social");

/* --------- Inicializamos el servidor de Node con Express JS --------- */

/**
 * Creamos el servidor de ExpressJS y luego le iremos agregando herramientas y
 * rutas.
 */
const app = express();

/** Necesitamos usar la libreria "cors" para poder conectarnos al servidor desde cualquier applicación. */
app.use(cors());
app.use(express.json());
/**
 * Si el puerto que pusimos en el archivo `.env` no se encuentra disponible,
 * usamos el puerto 8000 por defecto.
 */
const puerto = process.env.PUERTO || 8000;

/** Nuestra ruta base, en este caso, un simple mensaje de bienvenida 😁 */
app.get("/api", (req, res) => {
  res.send("Bienvenidos a mi servidor en ExpressJS del proyecto final.");
});

/** Cargamos las rutas de "Usuarios". */
app.use("/api/usuarios", rutasUsuario);
app.use("/api/blogs", rutablog);


app.listen(puerto, () => {
  console.log(`Example app listening on port ${puerto}`);
});
