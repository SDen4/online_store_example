const Router = require('express');
const deviceController = require('../controllers/deviceController.js');

const router = new Router();

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router;
