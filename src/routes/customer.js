const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');
const comprasController = require('../controllers/comprasController');



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



module.exports = router;