const router = require('express').Router();



router.use(require('./opportunity-routes'));
router.use(require('./preferences-routes'));
router.use(require('./user-page-routes'));
router.use(require('./user-routes'));



module.exports = router;