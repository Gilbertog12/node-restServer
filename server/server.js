require('./config/config')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/usuario', function(req, res) {
    res.json({
        usuario: "Gilbertog12"
    })
})
app.post('/usuario', function(req, res) {

    let body = req.body

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            msj: "el nombre es necesario",
            // err: errors
        })

    } else {

        res.json({
            body
        })
    }

})
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    res.json({
        usuario: "put Gilbertog12",
        id
    })
})
app.delete('/usuario', function(req, res) {
    res.json({
        usuario: "delete Gilbertog12"
    })
})

app.listen(process.env.PORT, () => { console.log(`escuchando por el puerto ${process.env.PORT}`) })