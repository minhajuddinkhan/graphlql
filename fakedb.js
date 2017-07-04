
let dota = require('./dummy_data.json');
let _ = require('lodash');

let findHeroById = (heroId) => _.find(dota.heroes, (o) => o.id == heroId);



module.exports = {
    findHeroById
};

