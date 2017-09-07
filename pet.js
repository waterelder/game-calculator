const config = require('./config');

class Pet {
  constructor(stats, gold, exp, level, maxGold) {
    this.stats = stats;
    this.gold = gold;
    this.maxGold = maxGold;
    this.exp = exp;
    this.level = level;
    this.time = 0;
    this.print = this.print.bind(this);
    this.applyInfluence = this.applyInfluence.bind(this);
    this.checkLevelUp = this.checkLevelUp.bind(this);
    this.levelUp = this.levelUp.bind(this);
    this.switchTime = this.switchTime.bind(this);
    const opts = {
      errorEventName: 'info',
      logDirectory: 'logs',
      fileNamePattern: 'roll-<DATE>.log',
      dateFormat: 'YYYY.MM.DD'
    };
    this.logger = require('simple-node-logger').createRollingFileLogger(opts);
    this.logger.setLevel('info');
  }

  print() {
    const output = "Stats:\n"+ "\n " +
     "Satiety: " + this.stats.satiety.baseValue + "\n " +
     "Higiene: " + this.stats.hygiene.baseValue + "\n " +
     "Happiness: " + this.stats.hapiness.baseValue + "\n " +
     "Energy: " + this.stats.energy.baseValue + "\n " +
     "Health: " + this.stats.health.baseValue + "\n " +
     "Gold: " + this.gold + "\n " +
     "Max Gold: " + this.maxGold + "\n " +
     "Exp: " + this.exp + "\n " +
     "Level: " + this.level + "\n " +
     "Time: " + this.time + "\n " +
     "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n\n" + "\n ";
    this.logger.info(output);
    console.log(output);
  };

  applyInfluence(influence) {
    const output = "\n\n########################################"+ "\n " +
    "Apply influence \""+ influence.name +"\""+ "\n " +
    "########################################\n";
    this.logger.info(output);
    console.log(output);
    Object.keys(influence.perks).forEach((key, index) => {
      Object.keys(this.stats).forEach((statsKey) => {
        if (statsKey === key) {
          this.stats[key].baseValue += influence.perks[key].value;
          if (this.stats[key].baseValue > this.stats[key].maxBaseValue) {
            this.stats[key].baseValue = this.stats[key].maxBaseValue;
          }
        }
      })
    });
    this.exp += influence.exp;
    this.gold +=influence.gold;
    if (this.gold > this.maxGold) {
      this.gold = this.maxGold
    }
    this.checkLevelUp();
    this.print();
  };

  switchTime(time) {
    for (let i = 0; i < time; i++) {
      this.time++;
      Object.keys(this.stats).forEach((key,index) => {
        if (this.stats[key].isTimeChange) {
          const value = this.stats[key];
          value.baseValue = value.baseValue - value.speedOfDecrease;
        }
      });
      this.gold++;
      if (this.gold > this.maxGold) {
        this.gold = this.maxGold;
      }
    }
    const output = "\n\n########################################"+ "\n " +
    "Time warp!!: " + time + " minutes"+ "\n " +
    "########################################\n";
    this.logger.info(output);
    console.log(output);
    this.print();
  };

  checkLevelUp() {
    if (config.levels[this.level].exp <= this.exp) {
      this.levelUp();
    }
  };

  levelUp() {
    const output = "\n\n########################################"+ "\n " +
    "Level Up!"+ "\n " +
    "########################################\n";
    this.level++;
    this.maxGold = config.levels[this.level].maxGold;
    Object.keys(this.stats).forEach((key, index) => {
      if (this.stats[key].isLevelChange) {
        const value = this.stats[key];
        value.maxBaseValue = value.maxBaseValue + (value.maxBaseValue * value.growthAtLvl);
        value.growthAtLvl = value.growthAtLvl + (value.growthAtLvl * value.speedOfDecrease);
      }
    });
    this.logger.info(output);
    console.log(output);
    this.print();
  }
}

module.exports = Pet;
