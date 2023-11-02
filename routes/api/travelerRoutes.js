const router = require('express').Router();
const { Traveler, Location, Trips } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const travelerData = await Traveler.findAll();
        res.status(200).json(travelerData);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const travelerData = await Traveler.create(req.body);
        res.status(201).json(travelerData);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const travelerData = await Traveler.findByPK(req.params.id, {
            include: [{ model: Trips } , { model: Location }]
        });
        if(!travelerData){
            res.status(404).json({ message: 'No traveler found with that id!'})
            return;
        }
        res.status(200).json(travelerData);
    } catch(err){
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const travelerData = await Traveler.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!travelerData) {
            res.status(404).json({ message: 'No traveler found with that id!'});
            return;
     
        }
        res.status(200).json(travelerData);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;