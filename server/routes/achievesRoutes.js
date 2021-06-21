const Router = require('express');
const router = new Router();
const achievesController = require('./../controllers/achievesController');
const checkRole = require('./../middleware/checkRoleMiddleware');

router.post('/',checkRole('ADMIN'),achievesController.create)
router.get('/',achievesController.getAll)




module.exports = router