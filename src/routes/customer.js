const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const comprasController = require('../controllers/comprasController');
const asientosController = require('../controllers/asientosController');


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


module.exports = router;