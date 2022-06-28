const Router = require('express');
const typeController = require('../controllers/typeController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');

const router = new Router();

router.post('/', checkRole('ADMIN'), typeController.create);
router.get('/', typeController.getAll);

module.exports = router;
