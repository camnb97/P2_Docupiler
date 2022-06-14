const router = require('express').Router();
const { Clients, Pets } = require('../../models');
const withAuth = require('../../utils/auth');

//Get//
router.get("/", async (req, res) => {
  try {
    const clientData = await Clients.findAll({
      include: [
        Pets
      ],
    });
    res.status(200).json(clientData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Post//
router.post('/new', withAuth, async (req, res) => {
  try {
    const newClient = await Clients.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newClient);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Put//
router.put('/:id', withAuth, async (req, res) => {
  try {
      const clientData = await Clients.findByPk({
          where: {
              id: req.params.ids,
          },
      });
      res.status(200).json(clientData);
  } catch (err) {
      res.status(500).json(err);
  }
});

//Delete//
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const clientData = await Clients.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!clientData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(clientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
