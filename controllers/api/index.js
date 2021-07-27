const router = require('express').Router();
const userRoutes = require('./user-routes.js');


router.use(require('./opportunity-routes'));
router.use('/preferences', require('./preferences-routes'));
router.use(require('./user-page-routes'));
router.use('/users', userRoutes);


module.exports = router;
