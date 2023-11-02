const router = require('express').Router();
const { Traveler, Location, Trips } = require('../../models')


router.post('/', async (req, res) => {
    try{
        const tripsData = await Trips.create(req.body, {
            include:[{ model: Traveler} , { model: Location }]
        });
        res.status(201).json(travelerData);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const tripsData = await Trips.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!tripsData) {
            res.status(404).json({ message: 'No trip found!'});
            return;
     
        }
        res.status(200).json(tripData);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router




