const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const comprasController = require('../controllers/comprasController');
const asientosController = require('../controllers/asientosController');
const pasajesController = require('../controllers/pasajesController');
const vuelosController = require('../controllers/vuelosController');
const preciosController = require('../controllers/preciosController');
const clientesController = require('../controllers/clientesController');

router.get('/', customerController.list);
//router.post('/add',customerController.save);
//router.get('/delete/:id', customerController.delete);
//router.get('/update/:id', customerController.edit);
//router.post('/update/:id', customerController.update);

router.get('/compras',comprasController.list);
router.post('/comprasadd',comprasController.save);
router.get('/comprasupdate/:idcompra', comprasController.edit);
router.post('/comprasupdate/:idcompra', comprasController.update);
router.get('/comprasdelete/:idcompra', comprasController.delete);

router.get('/asientos',asientosController.list);
router.post('/asientosadd',asientosController.save);
router.get('/asientosdelete/:idasiento', asientosController.delete);
router.get('/asientosupdate/:idasiento',asientosController.edit);
router.post('/asientosupdate/:idasiento', asientosController.update);

router.get('/pasajes',pasajesController.list);
router.post('/pasajesadd',pasajesController.save);
router.get('/pasajesdelete/:idpasaje/:idvuelo', pasajesController.delete);
router.get('/pasajesupdate/:idpasaje/:idvuelo',pasajesController.edit);
router.post('/pasajesupdate/:idpasaje/:idvuelo', pasajesController.update);

router.get('/vuelos',vuelosController.list);
router.post('/vuelosadd',vuelosController.save);
router.get('/vuelosupdate/:idvuelo', vuelosController.edit);
router.post('/vuelosupdate/:idvuelo', vuelosController.update);
router.get('/vuelosdelete/:idvuelo', vuelosController.delete);

router.get('/precios',preciosController.list);
router.post('/preciosadd',preciosController.save);
router.get('/preciosupdate/:idvuelo/:idasiento', preciosController.edit);
router.post('/preciosupdate/:idvuelo/:idasiento', preciosController.update);
router.get('/preciosdelete/:idvuelo/:idasiento', preciosController.delete);

router.get('/clientes',clientesController.list);
router.post('/clientesadd',clientesController.save);
router.get('/clientesupdate/:idpersona', clientesController.edit);
router.post('/clientesupdate/:idpersona', clientesController.update);
router.get('/clientesdelete/:idpersona', clientesController.delete);


module.exports = router;