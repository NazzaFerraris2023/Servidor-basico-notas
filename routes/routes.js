import { Router } from "express";
import notaValida from "../middlewares/datosValidos.js"
import alumnosRoutes from "./alumnosRoutes.js";

const routes = Router()

routes.use("/alumnos",alumnosRoutes)


export default routes