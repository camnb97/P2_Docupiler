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
    
<<<<<<< HEAD
    res.render('login', { 
=======
    res.render('all', { 
>>>>>>> amiel
      pets, 
      logged_in: req.session.logged_in 
=======
    res.render('login', {
      pets,
      logged_in: req.session.logged_in
>>>>>>> 748fa1787e5cf71bdb230e75756c92e8fab60951
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
<<<<<<< HEAD

=======
>>>>>>> 748fa1787e5cf71bdb230e75756c92e8fab60951
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
<<<<<<< HEAD


=======
>>>>>>> 748fa1787e5cf71bdb230e75756c92e8fab60951
//Login Redirect//
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});
<<<<<<< HEAD

=======
>>>>>>> 748fa1787e5cf71bdb230e75756c92e8fab60951
module.exports = router;