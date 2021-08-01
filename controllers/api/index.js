const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const opportunityRoutes = require('./opportunity-routes')

router.use('/JobDetails', require('./JobDetails-routes'));
router.use('/preferences', require('./preferences-routes'));
router.use('/opportunity', opportunityRoutes);
router.use('/userinfo', require('./user-page-routes'));
router.use('/submit', require('./submit-routes'))
router.use('/users', userRoutes);


module.exports = router;
