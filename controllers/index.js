const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html-routes');
const opportunityRoutes = require('./opportunity-routes')

router.use('/', htmlRoutes);
router.use('/opportunity', opportunityRoutes);
router.use('/api', apiRoutes);
router.get('/', (req, res) => {
    res.locals.username = req.session.username;
    res.render('index', { user: req.user });
});

module.exports = router;
