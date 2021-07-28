const router = require('express').Router();
const userRoutes = require('./user-routes.js');

router.use('/JobDetails', require('./JobDetails-routes'));
router.use('/preferences', require('./preferences-routes'));
router.use('/opportunity', require('./opportunity-routes'));
router.use('/userinfo', require('./user-page-routes'));
router.use('/submit', require ('./submit-routes'))
router.use('/users', userRoutes);


module.exports = router;
