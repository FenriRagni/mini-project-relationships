const Location = require('./Location');
const Traveler = require('./Traveler');
const Trips = require('./Trips');


Traveler.hasMany(Location, {
  foreignKey: 'id',
});

Location.hasMany(Traveler, {
  through: Trips,
  foreignKey: 'id'
})


module.exports = {
    Location,
    Traveler,
    Trips,
  };