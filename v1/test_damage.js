
class PlayerState {
    constructor() {
        this.health = 100;
        this.shield = 50;
    }

    takeDamage(amount) {
        console.log(`Taking ${amount} damage. Health: ${this.health}, Shield: ${this.shield}`);
        if (this.shield > 0) {
            const shieldDamage = Math.min(this.shield, amount);
            this.shield -= shieldDamage;
            amount -= shieldDamage;
            console.log(`Shield absorbed ${shieldDamage}. Remaining shield: ${this.shield}. Remaining damage: ${amount}`);
        }
        this.health = Math.max(0, this.health - amount);
        console.log(`Health reduced to ${this.health}`);
        return this.health <= 0;
    }
}

const p = new PlayerState();
console.log("Test 1: Damage < Shield");
p.takeDamage(25); // Shield 25, Health 100
console.log("Dead?", p.health <= 0);

console.log("\nTest 2: Damage == Remaining Shield");
p.takeDamage(25); // Shield 0, Health 100
console.log("Dead?", p.health <= 0);

console.log("\nTest 3: Damage to Health");
p.takeDamage(50); // Shield 0, Health 50
console.log("Dead?", p.health <= 0);

console.log("\nTest 4: Fatal Damage");
p.takeDamage(60); // Shield 0, Health 0
console.log("Dead?", p.health <= 0);
