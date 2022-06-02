const router = require('express').Router();
const { Pet } = require('../../models');

//Post Route//
router.post('/', async (req, res) => {
    try {
      const newPet = await Pet.create({
        // ...req.body,
        // user_id: req.session.user_id,
      });
  
      res.status(200).json(newPet);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//Put Route//
router.put('/', async (req, res) => {
    try {
      
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//Delete Route//
router.delete('/:id', async (req, res) => {
    try {
      const projectData = await Project.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!projectData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(projectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });