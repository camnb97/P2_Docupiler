const router = require('express').Router();
const { Pets, Clients } = require('../../models');
const withAuth = require('../../utils/auth');

//Get//
router.get("/", async (req, res) => {
  try {
    const petData = await Pets.findAll({
      include: [
        Clients
      ],
    });
    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Post//
router.post('/new', withAuth, async (req, res) => {
  try {
    const newPet = await Pets.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Put//
router.put('/:id', withAuth, async (req, res) => {
  try {
      const petData = await Pets.findByPk({
          where: {
              id: req.params.ids,
          },
      });
      res.status(200).json(petData);
  } catch (err) {
      res.status(500).json(err);
  }
});

//Delete//
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petData = await Pets.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
