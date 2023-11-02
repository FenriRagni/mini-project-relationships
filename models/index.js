const location = require('./location');
const traveler = require('./traveler');
const trips = require('./trips');


traveler.hasMany(location, {
  foreignKey: 'id',
});

location.hasMany(traveler, {
  through: trips,
  foreignKey: 'id'
})


module.exports = {
    location,
    traveler,
    trips,
  };