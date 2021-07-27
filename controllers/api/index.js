const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const opportunityRoutes = require('./JobDetails-route');


router.use(require('./JobDetails-route'));
router.use('/preferences', require('./preferences-routes'));
router.use(require('./user-page-routes'));
router.use('/users', userRoutes);


module.exports = router;
