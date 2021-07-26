const router = require('express').Router();



router.use(require('./opportunity-routes'));
router.use(require('./preferences-routes'));
router.use(require('./user-page-routes'));
router.use(require('./user-routes'));


//---- Sue's update ---//
module.exports = router;
const userRoutes = require('./user-routes.js');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;
