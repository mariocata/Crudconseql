const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const comprasController = require('../controllers/comprasController');
const asientosController = require('../controllers/asientosController');
const pasajesController = require('../controllers/pasajesController');
const vuelosController = require('../controllers/vuelosController');
const preciosController = require('../controllers/preciosController');
const clientesController = require('../controllers/clientesController');
const rutasController = require('../controllers/rutasController');
const avionesController = require('../controllers/avionesController');
const proveedoresController = require('../controllers/proveedoresController');
const mantenimientosController = require('../controllers/mantenimientosController');
const compradoresController = require('../controllers/compradoresController');
const avion_rutasController = require('../controllers/avion_rutasController');
const pistasController = require('../controllers/pistasController');
const aereopuertosController = require('../controllers/aereopuertosController');
const masvistadosController  = require('../controllers/masvistadosController');
const avionesalquiladosController  = require('../controllers/avionesalquiladosController');

//querys
router.get('/', customerController.list);
//router.get('/buscarpista/:IATA_ubicacion', customerController.list1);
router.get('/destinosmasvisitados', masvistadosController.list);
router.get('/avionesalquilados', avionesalquiladosController.list);

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

router.get('/rutas',rutasController.list);
router.post('/rutasadd',rutasController.save);
router.get('/rutasupdate/:idruta', rutasController.edit);
router.post('/rutasupdate/:idruta', rutasController.update);
router.get('/rutasdelete/:idruta', rutasController.delete);

router.get('/aviones',avionesController.list);
router.post('/avionesadd',avionesController.save);
router.get('/avionesdelete/:idavion', avionesController.delete);
router.get('/avionesupdate/:idavion', avionesController.edit);
router.post('/avionesupdate/:idavion', avionesController.update);

router.get('/proveedores',proveedoresController.list);
router.post('/proveedoresadd',proveedoresController.save);
router.get('/proveedoresdelete/:idproveedor', proveedoresController.delete);
router.get('/proveedoresupdate/:idproveedor', proveedoresController.edit);
router.post('/proveedoresupdate/:idproveedor', proveedoresController.update);

router.get('/mantenimientos',mantenimientosController.list);
router.post('/mantenimientosadd',mantenimientosController.save);
router.get('/mantenimientosdelete/:idmantenimiento', mantenimientosController.delete);
router.get('/mantenimientosupdate/:idmantenimiento', mantenimientosController.edit);
router.post('/mantenimientosupdate/:idmantenimiento', mantenimientosController.update);

router.get('/compradores',compradoresController.list);
router.post('/compradoresadd',compradoresController.save);
router.get('/compradoresdelete/:idcomprador', compradoresController.delete);
router.get('/compradoresupdate/:idcomprador', compradoresController.edit);
router.post('/compradoresupdate/:idcomprador', compradoresController.update);

router.get('/avion_rutas',avion_rutasController.list);
router.post('/avion_rutasadd',avion_rutasController.save);
router.get('/avion_rutasdelete/:idavion/:idruta', avion_rutasController.delete);
router.get('/avion_rutasupdate/:idavion/:idruta', avion_rutasController.edit);
router.post('/avion_rutasupdate/:idavion/:idruta', avion_rutasController.update);

router.get('/pistas',pistasController.list);
router.post('/pistasadd',pistasController.save);
router.get('/pistasdelete/:idpista', pistasController.delete);
router.get('/pistasupdate/:idpista', pistasController.edit);
router.post('/pistasupdate/:idpista', pistasController.update);

router.get('/aereopuertos',aereopuertosController.list);
router.post('/aereopuertosadd',aereopuertosController.save);
router.get('/aereopuertosdelete/:IATA', aereopuertosController.delete);
router.get('/aereopuertosupdate/:IATA', aereopuertosController.edit);
router.post('/aereopuertosupdate/:IATA', aereopuertosController.update);


module.exports = router;