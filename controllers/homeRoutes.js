const router = require('express').Router();
const { Pets, Clients, User, Calendar } = require('../models');
const withAuth = require('../utils/auth');
//Get All Pets//
router.get('/', async (req, res) => {
  try {
    const petData = await Pets.findAll({
      include: [
        Clients
      ],
    });
    const pets = petData.map((pet) => pet.get({ plain: true }));
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
<<<<<<< HEAD
    res.render('login', { 
=======
    res.render('all', { 
>>>>>>> amiel
      pets, 
      logged_in: req.session.logged_in 
=======
>>>>>>> develop
    res.render('login', {
      pets,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//User Profile//
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['username', 'password'] },
      include: [{ model: Pets, Calendar, Clients }],
    });
    const user = userData.get({ plain: true });
    res.render('menu', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//Login Redirect//
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});
module.exports = router;
