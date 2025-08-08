## Tutorial de ExpressJS + MongoDB
- Clonar el respositorio.
- Abrir cmd o la linea de de comandos de su preferencia (powershell, git bash).
(tener node instalado)
- Ubicar la carpeta raiz del proyecto (donde se guardaron los archivos del repositorio).
- Ejecutar el comando `npm install`.
- Para ejecutar el servidor usamos en el comando `node app.mjs`.
- En el navegador accedemos a la siguiente http://localhost:3000/api/ y debería ser recibido con un mensaje de bienvenida.
- Si desea ver la lista de usuarios o de blogs, navegamos a las siguientes rutas:

- `http://localhost:3000/api/usuarios`
- `http://localhost:3000/api/blogs`

-Tenga en cuenta que debe configurar el nombre de la base de datos de MongoDB por medio del archivo `.env` que se encuentra en este repositorio. Por defecto, la variable `BASE_DE_DATOS` tiene assignado como valor `red-social`. Usted puede cambiarla a la que maneje de manera local.

-Para crear o eliminar un usuario o blog, es recomendable realizarlo a traves de una aplicación llamada Postman.

