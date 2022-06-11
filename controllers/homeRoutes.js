const router = require('express').Router();
const { Pets, Clients, User } = require('../models');
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
    
    res.render('homepage', { 
      pets, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Pet 
router.get('/pet/:id', async (req, res) => {
  try {
    const petData = await Pets.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const pet = petData.get({ plain: true });
    res.render('pet', {
      ...pet,
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
      include: [{ model: Pets }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//New Client Page//
router.get('/newcli', withAuth, async (req, res) => {
  try {
    res.render('newcli', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//View Client Page//
router.get('/viewcli', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['username', 'password'] },
      include: [{ model: Pets }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Calendar//
router.get('/calendar', (req, res) => {
  if (req.session.logged_in) {
    try {
      const calendarData = await Calendar.findAll({
        include: [
          Calendar
        ],
      });
      const calendar = calendarData.map((calendar) => calendar.get({ plain: true }));
    res.render('calendar');

//Login Redirect//
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

module.exports = router;