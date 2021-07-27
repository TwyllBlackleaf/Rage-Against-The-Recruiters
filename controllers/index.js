const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html-routes');

router.use('/', htmlRoutes);

router.use('/api', apiRoutes);
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
