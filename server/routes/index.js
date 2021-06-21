const Router = require('express');
const router = new Router();

const achievesRouter = require('./achievesRoutes')
const adminRouter = require('./adminRoutes')
const newsRouter = require('./newsRoutes')
const userRouter = require('./userRoutes')
const teacherRouter = require('./teacherRoutes')
const lessonRouter = require('./lessonRoutes')


router.use('/user', userRouter)
router.use('/admin', adminRouter)
router.use('/achieves', achievesRouter)
router.use('/news', newsRouter)
router.use('/teachers', teacherRouter)
router.use('/lessons', lessonRouter)



module.exports = router