import express, { urlencoded } from "express"
import routes from "./routes/routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Uso rutas: 
app.use("/",routes)

//Atajo bad request: 
app.use((req,res,next) => {
    res.status(400).send("Bad request")
})

app.listen(8080,() => {
    console.log("Estas escuchando el puerto: ",8080)
})