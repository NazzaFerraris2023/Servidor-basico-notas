const datosValidos =async (req,res,next) => {

    let {nota,nombre,apellido} = req.body
    nota = Number(nota)
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
    
    if(!Number.isInteger(nota) ||  nota < 0 || nota > 10 || !soloLetras.test(nombre) || !soloLetras.test(apellido)){
        res.status(400).send({ message: "Los datos ingresados no son validos" });
        return 
    }

    next()
}

export default datosValidos