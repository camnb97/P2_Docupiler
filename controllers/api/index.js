
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const clientRoutes = require('./clientRoutes');

router.use('/users', userRoutes);

router.use('/pets', petRoutes);
router.use('/client', clientRoutes);



module.exports = router;