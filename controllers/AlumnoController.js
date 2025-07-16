import AlumnoServices from "../services/AlumnosServices.js";
import NotaServices from "../services/AlumnosServices.js";

const alumnoServices = new AlumnoServices();

class AlumnoController {
  getAllAlumnosController = async (req, res) => {
    try {
      const alumnos = await alumnoServices.getAllAlumnos();
      if (alumnos === null) {
        return res
          .status(400)
          .json({ success: false, message: "No hay alumnos en el servidor" });
      }

      return res.status(200).json({ success: true, message: alumnos });
    } catch (error) {
      return res.status(500).send("Error en el servidor", error);
    }
  };
  getAlumnoById = async (req, res) => {
    try {
      const alumno = await alumnoServices.getAlumnoById(req.params.id);

      if (!alumno) {
        return res.status(400).send("No existe el alumno en el servidor");
      }

      return res.status(200).json({ success: true, message: alumno });
    } catch (error) {
      return res.status(500).send("Error en el servidor", error);
    }
  };
  postAlumnoController = async (req, res) => {
    try {
      const alumno = await alumnoServices.getAlumnoById(req.params.id);

      if (alumno) {
        return res.status(204).send("El alumno ya existe");
      }

      const nuevoAlumno = await alumnoServices.postNuevoAlumno(req.body);
      console.log("Nuevo alumno:", nuevoAlumno);
      return res.status(200).json({ success: true, message: nuevoAlumno });
    } catch (error) {
      return res.status(500).send("Error en el servidor", error);
    }
  };

  agrupados = async (req, res) => {
    try {
        console.log("entra al try")
      const alumnos = await alumnoServices.getAllAlumnos();
      console.log("Obtiene los alumnos")
      if (alumnos === null) {
        return res
          .status(400)
          .json({ success: false, message: "No hay alumnos en el servidor" });
      }

      const alumnosAgrupados = await alumnoServices.getAlumnosAgrupados(alumnos)
       return res.status(200).json({ success: true, message: alumnosAgrupados });

    } catch (error) {}
  };
}

export default AlumnoController;
