const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const opportunityRoutes = require('./opportunity-routes');


router.use('/submit', opportunityRoutes);
router.use(require('./preferences-routes'));
router.use(require('./user-page-routes',));
router.use('/users', userRoutes);


module.exports = router;
