console.log("JS carregou");

let level = 1;


let maxHp = 100;
let hp = 100;

let maxMana = 50;
let mana = 50;

let maxXp = 100;
let xp = 0;

let potions = 3;


const hpBar = document.getElementById("hp-bar");
const manaBar = document.getElementById("mana-bar");
const xpBar = document.getElementById("xp-bar");

const hpText = document.getElementById("hp-text");
const manaText = document.getElementById("mana-text");
const xpText = document.getElementById("xp-text");
const levelText = document.getElementById("level-text");

const inventoryList = document.getElementById("inventory-list");

const battleBtn = document.getElementById("battle-btn");
const potionBtn = document.getElementById("potion-btn");

function updateUI() {

hpText.innerText = `${hp} / ${maxHp}`;
manaText.innerText = `${mana} / ${maxMana}`;
xpText.innerText = `${xp} / ${maxXp}`;
levelText.innerText = level;

inventoryList.innerHTML = `<li>Poção x${potions}</li>`;

}

function levelUp() {
level++;
xp = 0;
maxHp += 20;
maxMana += 10;
hp = maxHp;
mana = maxMana;

}

battleBtn.addEventListener("click",() => {
xp += 20;
mana -= 5;
hp -= 15;

if (xp >= maxXp) {

    levelUp();
 }

if (mana < 0) mana = 0;

updateUI();

}); 

potionBtn.addEventListener("click", () => {

if(potions > 0 && hp < maxHp) {
    hp += 30;
    if(hp > maxHp) hp = maxHp;
    potions --;
    updateUI();
}

});

updateUI();
