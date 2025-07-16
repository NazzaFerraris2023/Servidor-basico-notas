import { v4 as uuidv4} from "uuid";

class Alumnos {
    alumnos = []

    traerTodosLosAlumnos = async () => {
        //return this.notas
        return this.alumnos
    }

    traerAlumnoPorId = async (id) => {
         const alumno = this.alumnos.find((e) => e.id === id)

         return alumno
    }

    agregarAlumno = async (params) => {
        const data = {
            id: uuidv4(),
            nombre : params.nombre,
            apellido : params.apellido,
            nota : Number(params.nota)
        }

        this.alumnos.push(data)
        console.log(data)
        return data
    }


    agruparAlumnos = async (params) => {
       const agrupados = []

       params.forEach(alumno => {
        const existente = agrupados.find((a) => a.nombre === alumno.nombre && a.apellido === alumno.apellido)

        if(existente){
            existente.notas.push(alumno.nota)
        }else{
            agrupados.push({
                nombre:alumno.nombre,
                apellido:alumno.apellido,
                notas:[Number(alumno.nota)]
                }
            )
            console.log(typeof alumno.nota)
            
        }


       });

       return agrupados
    }
}

export default Alumnos