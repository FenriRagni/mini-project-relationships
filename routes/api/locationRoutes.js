const router = require('express').Router();
const { Location, Trips } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);        
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        res.status(201).json(locationData);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            include: { model : Trips }
        })
        if(!locationData){
            res.status(404).json({ message: 'No location found with that id!'})
            return;
        }
        res.status(200).json(locationData);
    } catch(err){
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        });
        if(!locationData){
            res.status(404).json({ message: "No location found with that id!"})
            return;
        }
        res.status(200).json(locationData);
    } catch(err){
        res.status(500).json(err);
    }
})