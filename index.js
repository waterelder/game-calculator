const Pet = require("./pet");
const config = require("./config");
const myPet = new Pet(config.stats, 0, 0, 0, 1000);

// ПИСАТЬ ТУТ

myPet.switchTime(100);
myPet.applyInfluence(config.inflenses[0]);


//////////////////////

process.exit(0);
