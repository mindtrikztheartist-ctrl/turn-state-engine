import { Entity } from "./entitiy.js";

Const logBox = document.getElementById("log");

function log(message) {
    console.log(message);
    logBox.textContent += message + "/n";
}

const hero = new Entity("unit-01", "Vangaurd", 100);
log('Spawned: ${hero.name} [${hero.hp}/${hero.maxHp} HP]');

const dealt = hero.takeDamage(35);
log('Dealt ${dealt} dmg -> HP: ${hero.hp} | Alive: ${hero.isAlive}');

const healed = hero.heal(58);
log('Heald ${healed} HP -> HP: ${hero.hp} | Alive: ${hero.isAlive}');