// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js")

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);


let round = 0;
while (heracles.life > 0 && nemean.life > 0) {
    round++;
    console.log(`🕛 round number : ${round}`);
    heracles.fight(nemean);
    console.log(`🧔 Heracles is fighting 🦁 Nemean Lion and let him only ${nemean.life} Hp left`);
    if (nemean.life > 0) {
        nemean.fight(heracles);
        console.log(`🧔 Nemean Lion is fighting 🧔 Heracles and let him only ${heracles.life} Hp left`);
    }
    if (heracles.life <= 0) {
        console.log(`${heracles.name} is dead 💀, ${nemean.name} won this fight 🏆`);
    } else if (nemean.life <= 0) {
        console.log(`${nemean.name} is dead 💀, ${heracles.name} won this fight 🏆`);
    }
}
