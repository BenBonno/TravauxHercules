/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, life = MAX_LIFE) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }
    fight(enemy) {
        let damage = Math.floor((Math.random() * this.strength) + 1) - enemy.dexterity;
        if (damage > 0) {
            this.life -= damage;
            return this.life;
        }
    }
}

module.exports = Fighter