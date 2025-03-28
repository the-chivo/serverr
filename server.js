const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const frutas = ["manzana"]
app.get("/frutas", (req, res) => {
    res.json
})

app.post("/frutas", (req, res) => {
    const fruta = req.body.fruta;
    console.log("esto ha llegado desde el cliente:", fruta)
    frutas.push(frutas)
    res.json(frutas)
})

app.listen(3000, () => console.log("servidor funcionando en 3000"))