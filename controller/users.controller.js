const { response } = require('express')

const usuariosGET = (request, response) => {
    const query = request.query
    response.json({
        ok: 'true',
        message: 'get API - usuariosGET',
        query
    })
}

const usuariosPOST = (request, response) => {
    const {name, lastName} = request.body;
    response.json({
        ok: 'true',
        message: 'post API - usuariosPOST',
        name, lastName
    })
}

const usuariosPUT = (request, response) => {
    const id = request.params.id
    response.json({
        ok: 'true',
        message: 'put API - usuariosPUT',
        id
    })
}

const usuariosPATCH = (request, response) => {
    response.json({
        ok: 'true',
        message: 'patch API - usuariosDELETE'
    })
}

const usuariosDELETE = (request, response) => {
    response.json({
        ok: 'true',
        message: 'delete API - usuariosGET'
    })
}


module.exports = {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosPATCH,
    usuariosDELETE
}