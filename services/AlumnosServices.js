import Alumnos from "../Dao/Alumnos.js";

const alumnos = new Alumnos();

class AlumnoServices {
  getAllAlumnos = async () => {
    const data = await alumnos.traerTodosLosAlumnos();

    if (data.length === 0) {
      return null;
    }

    return data;
  };

  getAlumnoById = async (id) => {

   const data = await alumnos.traerAlumnoPorId(id)

    return data;
  };

  postNuevoAlumno = async (params) => {
    
    const nuevoAlumno = await alumnos.agregarAlumno(params)
    return nuevoAlumno
  }


  getAlumnosAgrupados = async (params) => {
    const alumnosAgrupados = await alumnos.agruparAlumnos(params)
    return alumnosAgrupados
  } 
}

export default AlumnoServices;
