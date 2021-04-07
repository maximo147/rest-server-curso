const { Router } = require('express')
const { usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosPATCH,
    usuariosDELETE } = require('../controller/users.controller')

const router = Router()

router.get('/', usuariosGET )
router.post('/', usuariosPOST)
router.put('/:id', usuariosPUT)
router.patch('/', usuariosPATCH)
router.delete('/', usuariosDELETE)


module.exports = router