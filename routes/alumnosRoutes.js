import { Router } from "express";
import datosValidos from "../middlewares/datosValidos.js"
import AlumnoController from "../controllers/AlumnoController.js";
const alumnosRoutes = Router()

const alumnoController = new AlumnoController()

alumnosRoutes.get("/",alumnoController.getAllAlumnosController)
alumnosRoutes.get("/agrupados",alumnoController.agrupados)
alumnosRoutes.get("/:id",alumnoController.getAlumnoById)
alumnosRoutes.post("/",datosValidos,alumnoController.postAlumnoController)


export default alumnosRoutes
