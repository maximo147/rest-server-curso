const express = require('express')
const cors = require('cors')


class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/users'
        //Middleware
        this.middlewares()
        //Rutas
        this.routers()
    }

    middlewares() {
        //Cors
        this.app.use(cors())
        //Lectura y parse  de JSON
        this.app.use(express.json())
        //Directorio publico
        this.app.use(express.static('public'))
    }

    routers() {
        this.app.use(this.usuariosPath, require('../routes/user.router'))
    }

    listen() {
        this.app.listen(this.port, () => console.log('Puerto', this.port))
    }

}

module.exports = Server