const stats = {
  satiety: {
    baseValue: 100,
    maxBaseValue: 100,
    isLevelChange: true,
    isTimeChange: true,
    growthAtLvl: 0.2,
    speedOfDecrease: 0.2,
    derivativeDecrSpeed: 0.2
  },
  hygiene: {
    baseValue: 100,
    maxBaseValue: 100,
    isLevelChange: true,
    isTimeChange: true,
    growthAtLvl: 0.2,
    speedOfDecrease: 0.2,
    derivativeDecrSpeed: 0.2
  },
  hapiness: {
    baseValue: 100,
    maxBaseValue: 100,
    isLevelChange: true,
    isTimeChange: true,
    growthAtLvl: 0.2,
    speedOfDecrease: 0.2,
    derivativeDecrSpeed: 0.2
  },
  energy: {
    baseValue: 100,
    maxBaseValue: 100,
    isLevelChange: true,
    isTimeChange: true,
    growthAtLvl: 0.2,
    speedOfDecrease: 0.2,
    derivativeDecrSpeed: 0.2,
  },
  health: {
    baseValue: 100,
    maxBaseValue: 100,
    isLevelChange: false,
    isLevelChange: true,
    isTimeChange: false,
    growthAtLvl: 0.2,
    speedOfDecrease: 0.2,
    derivativeDecrSpeed: 0.2,
  }
}

const levels = [
      {exp:  0, maxGold:10000}, // 0
      {exp:100, maxGold:10000}, // 1
      {exp:110, maxGold:10500}, // 2
      {exp:121, maxGold:11000}, // 3
      {exp:133, maxGold:11500}, // 4
      {exp:146, maxGold:12000}, // 5
      {exp:161, maxGold:12500}, // 6
      {exp:177, maxGold:13000}, // 7
      {exp:195, maxGold:13500}, // 8
      {exp:214, maxGold:14000}, // 9
      {exp:236, maxGold:14500}, // 10
      {exp:259, maxGold:15000}, // 11
      {exp:285, maxGold:15500}, // 12
      {exp:314, maxGold:16000}, // 13
      {exp:345, maxGold:16500}, // 14
      {exp:380, maxGold:17000}, // 15
      {exp:418, maxGold:17500}, // 16
      {exp:459, maxGold:18000}, // 17
      {exp:505, maxGold:18500}, // 18
      {exp:556, maxGold:19000}, // 19
      {exp:612, maxGold:19500} // 20
];

const inflenses = [{
  gold: 100,
  exp: 20,
  name: "some",
  perks : {
    satiety: {
      value: 10,
    },
    hygiene: {
      value: 10
    },
    hapiness: {
      value: 10
    },
    energy: {
      value: 10
    },
    health: {
      value: 10,
    }
  }
}]
module.exports.inflenses = inflenses;
module.exports.stats = stats;
module.exports.levels = levels;
