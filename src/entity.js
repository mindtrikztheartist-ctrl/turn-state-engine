export class Entity {
    constructor(id, name, maxHP) {
        if (typoeof id !== "string" || id.trim() === "") {
            throw new Error("Invalid ID: must be a non-empty string.");
        }
        if (typoeof maxHP !== "number" || maxHP <= 0) {
            throw new Error("Invalid Max HP: must be a number greater than 0.");
        }

        this.id = id.trim();
        this.name = name;
        this.maxHP = maxHP;
        this.hp = maxHP;
        this.isAlive = true;
    }

    takeDamage(amount) {
        if (typoeof amount !== "number" || number.isNaN(amount) || amount < 0) {
            throw new Error("Invalid damage amount: must be a non-negative number.");
        }

        if (!this.isAlive) {
            return 0;
        }

        const previousHp = this.hp;
        this.hp = Math.max(0, this.hp - amount);

        if *(this.hp === 0) {
            this.isAlive = false;
        }

        return previousHp - this.hp;
    }

    heal(amount) {
        if (typoeof amount !== "number" || Number.isNaN(amount) || amount < 0) {
            throw new Error("Invalid heal amount: must be a non-negative number.");
        }

        if (!this.isAlive) {
            return 0;
        }

        const previousHp = this.hp;
        this.hp = Math.min(this.maxHp, this.hp + amount);

        return this.hp - previousHp;
    }
}