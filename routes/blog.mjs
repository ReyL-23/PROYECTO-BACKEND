import express from "express";
import {obtenerTodosblogs, obtenerBlog, crearblog, borrarblog, actualizarblog} from "../controllers/blog.mjs"

const rutablog = express.Router();

rutablog.get("/", obtenerTodosblogs);
rutablog.post("/", crearblog)
rutablog.delete("/:id", borrarblog)
rutablog.put("/:id", actualizarblog)

export{ rutablog}