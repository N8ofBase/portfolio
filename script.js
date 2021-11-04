function displayTable(id) {

  id.attributes.class.value = "d-block";


}

function closeTable(id) {
  id.attributes.class.value = "d-none";

}

function displayIt(id) {
  if (id.style.display == "none") {
    id.style.display = "block";
  } else {
    id.style.display = "none";
  }
}


let playerName = document.getElementById("name");
let heroName = document.getElementById("heroName");
let heroBar = document.getElementById("heroBar");
let heroCard = document.getElementById("heroCard");
let heroHead = document.getElementById("heroHead");
let heroStats = document.getElementById("heroStats");
let heroLifeTxt = document.getElementById("heroLifeTxt");
let heroLife = document.getElementById("heroLife");
let heroAttackTxt = document.getElementById("heroAttackTxt");
let heroAttack = document.getElementById("heroAttack");
let heroDefenseTxt = document.getElementById("heroDefenseTxt");
let heroDefense = document.getElementById("heroDefense");
let heroMagicTxt = document.getElementById("heroMagicTxt");
let heroMagic = document.getElementById("heroMagic");
let heroSpeedTxt = document.getElementById("heroSpeedTxt");
let heroSpeed = document.getElementById("heroSpeed");
let heroCharmTxt = document.getElementById("heroCharmTxt");
let heroCharm = document.getElementById("heroCharm");
let heroEquipTxt = document.getElementById("heroEquipTxt");
let heroEquip = document.getElementById("heroEquip");
let heroAbilities = document.getElementById("heroAbilities");
let heroAttackBtn = document.getElementById("heroAttackBtn");
let heroAAbilityBtn = document.getElementById("heroAAbilityBtn");
let heroMAbilityBtn = document.getElementById("heroMAbilityBtn");
let heroSAbilityBtn = document.getElementById("heroSAbilityBtn");
let heroCAbilityBtn = document.getElementById("heroCAbilityBtn");
let heroLog = document.getElementById("heroLog");
let rivalLog = document.getElementById("rivalLog");
let enhanceBtn = document.getElementById("echoose");
let statModal = document.getElementById("statModal");




function displayTable() {
  document.getElementById('table').style.display = 'block';
  document.getElementById('tableButton').innerHTML = '<button class="btn-secondary btn-lg" onclick="closeTable()">Close Table</button>';
}

function closeTable() {
  document.getElementById('table').style.display = 'none';
  document.getElementById('tableButton').innerHTML = '<button class="btn-secondary btn-lg" onclick="displayTable()">Calamities and Enhancements</button>';
}

function displayRoles() {
  document.getElementById('roles').style.display = 'block';
  document.getElementById('roleButton').innerHTML = '<button id="closeButton" class="btn-secondary btn-lg my-4" onclick="closeRoles()">Close</button>';
}

function closeRoles() {
  document.getElementById('roles').style.display = 'none';
  document.getElementById('roleButton').innerHTML = '<button id="roleButton" class="btn-secondary btn-lg my-4" onclick="displayRoles()">Choose Your Role</button>';
}

function alertBox(id) {
  
}

function calamityRoll(being) {
  let calamityRoll = being.rollD20();
  switch (calamityRoll) {
    case 1:
      being.life = Math.round(being.life / 2);
      heroLife.innerText = being.life;
      being.attack --;
      heroAttack.innerText = being.attack;
      being.magic --;
      heroMagic.innerText = being.magic;
      being.speed --;
      heroSpeed.innerText = being.speed;
      being.charm --;
      heroCharm.innerText = being.charm;
      heroLog.innerHTML = "<p><b>Ouch! " + being.name + " rolled a " + calamityRoll + ", shaking their will. " + being.name + "'s current life is cut in half and Attack, Magic, Speed, and Charm are all reduced by 1.</b></p>";
      break;
    case 2:
      
      heroAAbilityBtn.disabled = "true";
      being.attackAbility.turn = being.attackAbility.cooldown;
      heroMAbilityBtn.disabled = "true";
      being.magicAbility.turn = being.magicAbility.cooldown;
      heroSAbilityBtn.disabled = "true";
      being.speedAbility.turn = being.speedAbility.cooldown;
      heroCAbilityBtn.disabled = "true";
      being.charmAbility.turn = being.charmAbility.cooldown;
      heroLog.innerHTML = "<p><b>For some reason " + being.name + " can't remember any of their abilities.</b></p>";
      break;
    case 3:
      being.life = Math.round(being.life / 2);
      heroLife.innerText = being.life;
      heroLog.innerHTML = "<p><b>" + being.name + " doesn't quite feel 100% Maybe it was some bad Jeewa Fruit? " + being.name + "'s life is cut in half.</b></p>";
      break;
    case 4:
      being.weapon = 1;
      being.defense = 10;
      heroDefense.innerText = being.defense;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have paid a little more for the premium gear. " + being.name + "'s weapon and armor are broken.</b></p>";
      break;
    case 5:
      being.attack --;
      heroAttack.innerText = being.attack;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have done those few extra push ups yesterday. " + being.name + "'s Attack is reduced by 1.</b></p>";
      break;
    case 6:
      being.speed --;
      heroSpeed.innerText = being.speed;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should not have skipped leg day yesterday. " + being.name + "'s Speed is reduced by 1.</b></p>";
      break;
    case 7:
      being.defense --;
      heroDefense.innerText = being.defense;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have practiced more dodging yesterday. " + being.name + "'s Defense is reduced by 1.</b></p>";
      break;
    case 8:
      being.magic --;
      heroMagic.innerText = being.magic;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have spent some more time meditating yesterday. " + being.name + "'s Magic is reduced by 1.</b></p>";
      break;
    case 9:
      being.charm --;
      heroCharm.innerText = being.charm;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have done some more vocal exercises yesterday. " + being.name + "'s Charm is reduced by 1.</b></p>";
      break;
    case 10:
      being.attack --;
      heroAttack.innerText = being.attack;
      heroLog.innerHTML = "<p><b>" + being.name + " probably shouldn't have done all of those extra push ups yesterday. " + being.name + "'s Attack is reduced by 1.</b></p>";
      break;
    case 11:
      being.speed --;
      heroSpeed.innerText = being.speed;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should not have run up all of those stairs in the tower yesterday. " + being.name + "'s Speed is reduced by 1.</b></p>";
      break;
    case 12:
      being.defense --;
      heroDefense.innerText = being.defense;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have fixed that gap in their armor yesterday. " + being.name + "'s Defense is reduced by 1.</b></p>";
      break;
    case 13:
      being.magic --;
      heroMagic.innerText = being.magic;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have re-read the ancient texts yesterday. " + being.name + "'s Magic is reduced by 1.</b></p>";
      break;
    case 14:
      being.charm --;
      heroCharm.innerText = being.charm;
      heroLog.innerHTML = "<p><b>" + being.name + " probably shouldn't have eaten that many Char Beans yesterday. " + being.name + "'s Charm is reduced by 1.</b></p>";
      break;
    case 15:
      heroAAbilityBtn.disabled = "true";
      being.attackAbility.turn = being.attackAbility.cooldown;
      heroMAbilityBtn.disabled = "true";
      being.magicAbility.turn = being.magicAbility.cooldown;
      heroSAbilityBtn.disabled = "true";
      being.speedAbility.turn = being.speedAbility.cooldown;
      heroCAbilityBtn.disabled = "true";
      being.charmAbility.turn = being.charmAbility.cooldown;
      heroLog.innerHTML = "<p><b>For some reason " + being.name + " can't remember any of their abilities.</b></p>";
      break;
    case 16:
      being.life = Math.round(being.life / 2);
      heroLife.innerText = being.life;
      heroLog.innerHTML = "<p><b>" + being.name + " doesn't quite feel 100% Probably should have boiled that batch of Halowart before they ate it yesterday. " + being.name + "'s life is cut in half.</b></p>";
      break;
    case 17:
      being.weapon = 1;
      being.defense = 10;
      heroDefense.innerText = being.defense;
      heroLog.innerHTML = "<p><b>" + being.name + " probably shouldn't have gotten gear from the discount bin. " + being.name + "'s weapon and armor are broken.</b></p>";
      break;
    case 18:
      being.life = Math.round(being.life / 2);
      heroLife.innerText = being.life;
      heroLog.innerHTML = "<p><b>" + being.name + " doesn't quite feel 100% Maybe that wasn't actually Healing Water they drank yesterday. " + being.name + "'s life is cut in half.</b></p>";
      break;
    default:
      heroLog.innerHTML = "<p><b>" + being.name + " luckily avoided a calamity.";
  }
}

function enhanceRoll(being) {
  let enhanceRoll = being.rollD20();
  switch (enhanceRoll) {
    case 1:
      heroLog.innerHTML = "<p><b>Wow! " + being.name + " rolled a " + enhanceRoll + " for their enhancement which means they get nothing. " + being.name + " is unlucky even when getting lucky...</b></p>";
      break;
    case 2:
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      heroLog.innerHTML = `<div class="col m-0"><p><b>That extra practice paid off, ` + being.name + ` gets to increase their Attack, Magic, Speed, OR Charm by 1.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/qdh6gqcb9585xb7/statDie.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#statModal"></div></div>`;
      break;
    case 3:
      being.maxLife += 5;
      heroLife.innerText = being.maxLife;
      heroLog.innerHTML = "<p><b>" + being.name + " feels renewed motivation and energy! " + being.name + "'s life increases by 5.</b></p>";
      break;
    case 4:
      if(!hero.pack.includes(healingWater)) {
      hero.pack.push(healingWater);
      heroLog.innerHTML = "<p><b>" + being.name + " is so lucky that a vial of healing water magically appears in their pack.</b></p>";
      break;
    } else {
      hero.pack[0].increase();
      heroLog.innerHTML = "<p><b>" + being.name + " is so lucky that a vial of healing water magically appears in their pack.</b></p>";
      break;
    }
    case 5:
      weaponUpgrade(being);
      heroLog.innerHTML = "<p><b>" + being.name + " has gained confidence in using their weapon.</b></p>";
      break;
    case 6:
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      heroLog.innerHTML = `<div class="col m-0"><p><b>` + being.name + `'s abilities have improved through hard work! Choose an ability to upgrade.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/7jr3euvmeuw0hre/abilityup.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#abilityModal"></div></div>`;
      break;
    case 7:
    if(!hero.pack.includes(healingWater)) {
      hero.pack.push(healingWater);
      heroLog.innerHTML = "<p><b>" + being.name + " is so lucky that a vial of healing water magically appears in their pack.</b></p>";
      break;
    } else {
      hero.pack[0].increase();
      heroLog.innerHTML = "<p><b>" + being.name + " is so lucky that a vial of healing water magically appears in their pack.</b></p>";
      break;
    }
      
    case 8:
      being.maxLife += 10;
      heroLife.innerText = being.maxLife;
      heroLog.innerHTML = "<p><b>" + being.name + " feels renewed motivation and energy! " + being.name + "'s life increases by 10.</b></p>";
      break;
    case 9:
      being.charm --;
      heroCharm.innerText = being.charm;
      heroLog.innerHTML = "<p><b>" + being.name + " probably should have done some more vocal exercises yesterday. " + being.name + "'s Charm is reduced by 1.</b></p>";
      break;
    case 10:
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      heroLog.innerHTML = `<div class="col m-0"><p><b>That extra practice paid off, ` + being.name + ` gets to increase their Attack, Magic, Speed, OR Charm by 1.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/qdh6gqcb9585xb7/statDie.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#statModal"></div></div>`;
      break;
    case 11:
      being.maxLife += 5;
      weaponUpgrade(being);
      heroLog.innerHTML = "<p><b>" + being.name + " has gained confidence increasing their Life by 5 and improving their weapon handling.</b></p>";
      break;
    case 12:
      being.maxLife += 5;
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      
      heroLog.innerHTML = `<div class="col m-0"><p><b>` + being.name + ` gains 5 Life and their abilities have improved through hard work! Choose an ability to upgrade.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/7jr3euvmeuw0hre/abilityup.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#abilityModal"></div></div>`;
      break;
    case 13:
      being.maxLife += 5;
      if(!being.pack.includes(healingWater)) {
      hero.pack.push(healingWater);
      heroLog.innerHTML = "<p><b>" + being.name + " is so lucky that a vial of healing water magically appears in their pack and their Life increased by 5!</b></p>";
      break;
    } else {
      being.pack[0].increase();
      heroLog.innerHTML = "<p><b>" + being.name + " is so lucky that a vial of healing water magically appears in their pack and their Life increased by 5!</b></p>";
      break;
    }
    case 14:
      being.maxLife += 10;
      heroLog.innerHTML = "<p><b>" + being.name + " feels a surge of energy increasing Life by 10!</b></p>";
      break;
    case 15:
      defenseIncrease(being, heroDefense);
      heroLog.innerHTML = "<p><b>After working on their footwork, " + being.name + "'s Defense increases by 1!</b></p>";
      break;
    case 16:
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      heroLog.innerHTML = `<div class="col m-0"><p><b>That extra practice paid off, ` + being.name + ` gets to increase their Attack, Magic, Speed, OR Charm by 1.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/qdh6gqcb9585xb7/statDie.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#statModal"></div></div>`;
      break;
    case 17:
      being.maxLife += 10;
      being.life = being.maxLife;
      heroLife.innerText = being.life;
      heroLog.innerHTML = "<p><b>" + being.name + " gets a second wind, restoring Life and increasing it by 10!</b></p>";
      break;
    case 18:
      being.maxLife += 10;
      being.life = being.maxLife;
      heroLife.innerText = being.life;
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      heroLog.innerHTML = `<div class="col m-0"><p><b>After getting some really good sleep last night, ` + being.name + ` gains 10 Life and an increase to Attack, Magic, Speed, OR Charm by 1.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/qdh6gqcb9585xb7/statDie.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#statModal"></div></div>`;
      
      break;
      case 19:
      weaponUpgrade(being);
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      heroLog.innerHTML = `<div class="col m-0"><p><b>That extra practice last night, gave ` + being.name + `'s weapon better balance and an increase to Attack, Magic, Speed, OR Charm by 1.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/qdh6gqcb9585xb7/statDie.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#statModal"></div></div>`;
      
      break;
      case 20:
      being.maxLife += 10;
      being.life = being.maxLife;
      heroLife.innerText = being.life;
      defenseIncrease(being, heroDefense);
      heroAttackBtn.disabled = "true";
      heroAAbilityBtn.disabled = "true";
      heroMAbilityBtn.disabled = "true";
      heroSAbilityBtn.disabled = "true";
      heroCAbilityBtn.disabled = "true";
      heroLog.innerHTML = `<div class="col m-0"><p><b>Luck smiles on ` + being.name + `. Granting + 10 to Life, +1 to Defense, and an increase to Attack, Magic, Speed, OR Charm by 1.</b></p><div class='text-center m-3'><img src="https://www.dropbox.com/s/qdh6gqcb9585xb7/statDie.png?raw=1" type="button" style="width:100px" class="btn" data-bs-toggle="modal" data-bs-target="#statModal"></div></div>`;
      
  }
}

class Weapon {
  constructor(name, die, die2) {
    this.name=name; this.die=die; this.die2=die2;
  }
}

class Loot {
  constructor(name, info, quantity) {
    this.name = name; this.info = info; this.quantity = quantity;
  }

  increase() {
    this.quantity++;
  }
  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

}

class Food extends Loot {
  constructor(name, info, quantity, healing) {
    super(name, info, quantity);
    this.healing = healing;
  }
}


class Cache {
  constructor(contents) {
    this.contents = contents;
  }
  select() {
    let selectRoll = Math.floor(Math.random() * this.contents.length);
    let selected = this.contents[selectRoll];
    return selected;
  }
}
class Ability {
  constructor(name, info, die, die2, cooldown, turn) {
    this.name = name; this.info = info; this.die = die; this.die2=die2; this.cooldown = cooldown; this.turn = turn;
  }
}

class Being {
  constructor(name, title, maxLife, life, attack, defense, magic, speed, charm, weapon, pack) {
    this.name = name; this.title = title; this.maxLife = maxLife; this.life = life; this.attack = attack; this.defense = defense; this.magic = magic; this.speed = speed; this.charm = charm; this.weapon = weapon; this.pack = pack;
  }

  rollD20() {
    let roll = Math.floor(Math.random() * 20) + 1;
    return roll;
  }


  attackTarget(target) {
    let attackRoll = this.rollD20();
    let bonus = this.attack;
    let attackNum = attackRoll + bonus;

    switch (attackRoll) {
      case 1:
    }

    if (attackNum <= target.defense) {
      document.getElementById("heroLogTurn").style.display = 'block';
      heroLog.innerHTML = '<p><b>' + this.name + ' rolls an attack of : ' + attackRoll + ' + Attack(' + this.attack + ') which does not overcome ' + target.name + "'s defenses</b></p>";
    } else {
      document.getElementById("heroLogTurn").style.display = 'block';
      let weapon = Math.floor(Math.random() * this.weapon) + 1;
      let damage = weapon + bonus;
      console.log(damage);
      target.life = target.life - damage;
      document.getElementById("heroLogTurn").innerHTML = '<p><b>' + this.name + ' rolls an attack of : ' + attackRoll + ' + Attack(' + this.attack + ') which penetrates ' + target.name + "'s defenses doing " + damage + ' damage!</b></p>';

    }
  }
  search() {
    let searchRoll = this.rollD20() + this.charm;
    return searchRoll;
  }

  orderRoll() {
    let orderRoll = this.rollD20() + this.speed;
    return orderRoll;
  }

  consume(loot) {
    let healing = loot.healing;
    if (this.life < this.maxLife) {
      this.life = this.life + healing;
      loot.quantity--;
      if (this.life > this.maxLife) {
        this.life = this.maxLife;
      }
    } else {
      return 'Not Hungry'
    }
  }

}

class Hero extends Being {
  constructor(name, title, maxLife, life, attack, defense, magic, speed, charm, attackAbility, magicAbility, speedAbility, charmAbility, weapon, pack) {
    super(name, title, maxLife, life, attack, defense, magic, speed, charm, weapon, pack);
    this.attackAbility = attackAbility; this.magicAbility = magicAbility; this.speedAbility = speedAbility; this.charmAbility = charmAbility;
  }
}

class Champion extends Hero {


  overpower() {
    let disabled = document.createAttribute("disabled");
    heroAAbilityBtn.setAttribute(disabled);
    this.attackAbility.turn = this.attackAbility.cooldown;
    let d20 = this.rollD20();
    let abilityRoll = d20 + this.attack;
    let damageDie = Math.floor(Math.random() * this.attackAbility.dice) + 1;

    if (abilityRoll > rival.defense) {
      let damage = this.attack + damageDie;
      rival.life = rival.life - damage;
    }
  }

  attackAbilityIncrease() {
    let abilityDie = this.attackAbility.die;
    let abilityDie2 = this.attackAbility.die2;
    if(abilityDie == 4 && abilityDie2 == 0) {
      this.attackAbility.die = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 0) {
      this.attackAbility.die = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 0) {
      this.attackAbility.die = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 0) {
      this.attackAbility.die = 12;
    }
    if(abilityDie == 12 && abilityDie2 == 0) {
      this.attackAbility.die = 6;
      this.attackAbility.die2 = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 6) {
      this.attackAbility.die = 8;
      this.attackAbility.die2 = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 8) {
      this.attackAbility.die = 10;
      this.attackAbility.die2 = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 10) {
      this.attackAbility.die = 12;
      this.attackAbility.die2 = 12;
    }
  }

  magicAbilityIncrease() {
    let abilityDie = this.magicAbility.die;
    let abilityDie2 = this.magicAbility.die2;
    if(abilityDie == 4 && abilityDie2 == 0) {
      this.magicAbility.die = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 0) {
      this.magicAbility.die = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 0) {
      this.magicAbility.die = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 0) {
      this.magicAbility.die = 12;
    }
    if(abilityDie == 12 && abilityDie2 == 0) {
      this.magicAbility.die = 6;
      this.magicAbility.die2 = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 6) {
      this.magicAbility.die = 8;
      this.magicAbility.die2 = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 8) {
      this.magicAbility.die = 10;
      this.magicAbility.die2 = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 10) {
      this.magicAbility.die = 12;
      this.magicAbility.die2 = 12;
    }
  }

  speedAbilityIncrease() {
    let abilityDie = this.speedAbility.die;
    let abilityDie2 = this.speedAbility.die2;
    if(abilityDie == 4 && abilityDie2 == 0) {
      this.speedAbility.die = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 0) {
      this.speedAbility.die = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 0) {
      this.speedAbility.die = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 0) {
      this.speedAbility.die = 12;
    }
    if(abilityDie == 12 && abilityDie2 == 0) {
      this.speedAbility.die = 6;
      this.speedAbility.die2 = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 6) {
      this.speedAbility.die = 8;
      this.speedAbility.die2 = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 8) {
      this.speedAbility.die = 10;
      this.speedAbility.die2 = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 10) {
      this.speedAbility.die = 12;
      this.speedAbility.die2 = 12;
    }
  }

  charmAbilityIncrease() {
    let abilityDie = this.charmAbility.die;
    let abilityDie2 = this.charmAbility.die2;
    if(abilityDie == 4 && abilityDie2 == 0) {
      this.charmAbility.die = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 0) {
      this.charmAbility.die = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 0) {
      this.charmAbility.die = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 0) {
      this.charmAbility.die = 12;
    }
    if(abilityDie == 12 && abilityDie2 == 0) {
      this.charmAbility.die = 6;
      this.charmAbility.die2 = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 6) {
      this.charmAbility.die = 8;
      this.charmAbility.die2 = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 8) {
      this.charmAbility.die = 10;
      this.charmAbility.die2 = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 10) {
      this.charmAbility.die = 12;
      this.charmAbility.die2 = 12;
    }
  }

}


class Maverick extends Hero {

}

function attackIncrease(being, id) {
  being.attack ++;
  id.innerText = being.attack;
}
function magicIncrease(being, id) {
  being.magic ++;
  id.innerText = being.magic;
}
function speedIncrease(being, id) {
  being.speed ++;
  id.innerText = being.speed;
}
function charmIncrease(being, id) {
  being.charm ++;
  id.innerText = being.charm;
}
function defenseIncrease(being, id) {
  being.defense ++;
  id.innerText = being.defense;
}

function weaponUpgrade(being) {
  let weaponDie = being.weapon.die;
  let weaponDie2 = being.weapon.die2;

  if(weaponDie == 6 && weaponDie2 == 0) {
    being.weapon.die = 8;
    heroEquip.innerText = being.weapon.name + " : 1D8 "
  }
  if(weaponDie == 8 && weaponDie2 == 0) {
    being.weapon.die = 10;
    heroEquip.innerText = being.weapon.name + " : 1D10"
  }
  if(weaponDie == 10 && weaponDie2 == 0) {
    being.weapon.die = 12;
    heroEquip.innerText = being.weapon.name + " : 1D12" 
  }
  if(weaponDie == 12 && weaponDie2 == 0) {
    being.weapon.die = 6;
    being.weapon.die2 = 6;
    heroEquip.innerText = being.weapon.name + " : 2D6" 
  }
  if(weaponDie == 6 && weaponDie2 == 6) {
    being.weapon.die = 8;
    being.weapon.die2 = 8;
    heroEquip.innerText = being.weapon.name + " : 2D8" 
  }
  if(weaponDie == 8 && weaponDie2 == 8) {
    being.weapon.die = 10;
    being.weapon.die2 = 10;
    heroEquip.innerText = being.weapon.name + " : 2D10"  
  }
  if(weaponDie == 10 && weaponDie2 == 10) {
    being.weapon.die = 12;
    being.weapon.die2 = 12;
    heroEquip.innerText = being.weapon.name + " : 2D12"
  }

}

function attackAbilityIncrease(being) {
    let abilityDie = being.attackAbility.die;
    let abilityDie2 = being.attackAbility.die2;
    if(abilityDie == 4 && abilityDie2 == 0) {
      being.attackAbility.die = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 0) {
      being.attackAbility.die = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 0) {
      being.attackAbility.die = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 0) {
      being.attackAbility.die = 12;
    }
    if(abilityDie == 12 && abilityDie2 == 0) {
      being.attackAbility.die = 6;
      being.attackAbility.die2 = 6;
    }
    if(abilityDie == 6 && abilityDie2 == 6) {
      being.attackAbility.die = 8;
      being.attackAbility.die2 = 8;
    }
    if(abilityDie == 8 && abilityDie2 == 8) {
      being.attackAbility.die = 10;
      being.attackAbility.die2 = 10;
    }
    if(abilityDie == 10 && abilityDie2 == 10) {
      being.attackAbility.die = 12;
      being.attackAbility.die2 = 12;
    }
  }

function abilityUpgrade(being) {
  
  if(weaponDie == 6 && weaponDie2 == 0) {
    being.weapon.die = 8;
    heroEquip.innerText = being.weapon.name + " : 1D8 "
  }
  if(weaponDie == 8 && weaponDie2 == 0) {
    being.weapon.die = 10;
    heroEquip.innerText = being.weapon.name + " : 1D10"
  }
  if(weaponDie == 10 && weaponDie2 == 0) {
    being.weapon.die = 12;
    heroEquip.innerText = being.weapon.name + " : 1D12" 
  }
  if(weaponDie == 12 && weaponDie2 == 0) {
    being.weapon.die = 6;
    being.weapon.die2 = 6;
    heroEquip.innerText = being.weapon.name + " : 2D6" 
  }
  if(weaponDie == 6 && weaponDie2 == 6) {
    being.weapon.die = 8;
    being.weapon.die2 = 8;
    heroEquip.innerText = being.weapon.name + " : 2D8" 
  }
  if(weaponDie == 8 && weaponDie2 == 8) {
    being.weapon.die = 10;
    being.weapon.die2 = 10;
    heroEquip.innerText = being.weapon.name + " : 2D10"  
  }
  if(weaponDie == 10 && weaponDie2 == 10) {
    being.weapon.die = 12;
    being.weapon.die2 = 12;
    heroEquip.innerText = being.weapon.name + " : 2D12"
  }

}



let battleCache = new Cache([]);
let enhancements = new Cache([]);
let calamities = new Cache([]);

let overpower = new Ability('Overpower', 'powerful strike that pushes a rival back', 8,0, 3, 0);
let radiantStrike = new Ability('Radiant Strike', 'bright flash of light burns rival', 6, 6, 4, 0);
let shieldSlam = new Ability('Shield Slam', 'quickly slam a rival with a shield', 4,0, 2, 0);
let heal = new Ability('Heal', 'restore life', 6,0, 5, 0);

let pierce = new Ability('Pierce', 'expertly aimed shot overcomes defenses', 8,0, 5, 0);
let soulShot = new Ability('Soul Shot', 'shoot an arrow infused with spiritual energy', 6,0, 3, 0);
let multiShot = new Ability('Multi-Shot', 'shoots two arrows at once', 6,6, 4, 0);
let bola = new Ability('Bola', 'tangles rival reducing their speed by 1', 4,0, 3, 0);

let psylence = new Ability('Psylence', 'psychically close a rivals airway', 6,0, 4, 0);
let soulSyphon = new Ability('Soul Syphon', 'drain rival life to restore yours', 4,0, 4, 0);
let mindSpike = new Ability('Mind Spike', 'psychically blast a rival mind', 4,0, 3, 0);
let explosion = new Ability('Explosion', 'powerful blast with heavy damage', 8,8, 5, 0);

let deathStrike = new Ability("Death Strike", "powerful strike eliminates rivals", 8,0, 4, 0);
let darkness = new Ability("Darkness", "attack to the eyes that reduces rival's attack by 1", 4,0, 3, 0);
let doubleStrike = new Ability("Double Strike", "attack twice before rival can blink", 6,6, 5, 0);
let shadowStrike = new Ability("Shadow Strike", "appear behind rival and strike them in the back", 8,0, 3, 0)

let hero;
let rival = new Maverick("Maverick", "Maverick", 37, 37, 2, 14, 1, 3, 2, pierce, soulShot, multiShot, bola, 6, []);
let healingWater = new Food("Healing Water", "Restores 10 Life",1,10)
let broadsword = new Weapon("Broadsword & Shield", 6,0);


function createChampion() {

  // if (playerName.value == "") {
  //   alert("Hero name is required");
  // } else {
    hero = new Champion(playerName.value, "Champion", 42, 42, 3, 15, 3, 1, 1, overpower, radiantStrike, shieldSlam, heal, broadsword, []);
    document.getElementById("playerName").style.display = "none";
    document.getElementById("demobtn").style.display = "none";
    document.getElementById("roles").style.display = "none";
    heroName.innerText = playerName.value;
    heroLog.attributes[1].value = "row justify-content-start list-group-item-warning text-dark";
    
    heroCard.attributes[1].value = "card mx-auto border border-dark border-4 bg-warning";
    heroHead.attributes[1].value = "https://www.dropbox.com/s/a9pj9eomelt941u/championhead.png?raw=1";
    heroStats.attributes[1].value = "row align-items-start list-group-item-warning";
    heroLifeTxt.attributes[1].value = "bg-warning border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroLife.innerText = hero.life;
    heroAttackTxt.attributes[1].value = "bg-warning border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroAttack.innerText = hero.attack;
    heroDefenseTxt.attributes[1].value = "bg-warning border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroDefense.innerText = hero.defense;
    heroMagicTxt.attributes[1].value = "bg-warning border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroMagic.innerText = hero.magic;
    heroSpeedTxt.attributes[1].value = "bg-warning border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroSpeed.innerText = hero.speed;
    heroCharmTxt.attributes[1].value = "bg-warning border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroCharm.innerText = hero.charm;
    heroEquipTxt.attributes[1].value = "bg-warning border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroEquip.innerText = hero.weapon.name + " : 1D6";
    heroAbilities.attributes[1].value = "row list-group-item-warning mx-auto";
    heroAttackBtn.innerHTML = '<button id="heroAttackBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Attack to hit doing 1d6 + Attack damage"><img onclick="attackTarget(rival)" src="https://www.dropbox.com/s/vgbus0ygz5zo1dr/champattack.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroAAbilityBtn.innerHTML = '<button id="heroAAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Attack to hit doing 1d8 + Attack damage. Cooldown: 3"> <img onclick="overpower()" src="https://www.dropbox.com/s/6i5vt8xh0f2yi4q/Overpowerbutton.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroMAbilityBtn.innerHTML = '<button id="heroMAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Magic to hit doing 2d6 + Magic damage. Cooldown: 4"><img onclick="radiantStrike()" src="https://www.dropbox.com/s/ac2i9337f6qo58q/radiantstrikebutton.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroSAbilityBtn.innerHTML = '<button id="heroSAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Speed to hit doing 1d4 + Speed damage. Cooldown: 2"><img onclick="shieldSlam()" src="https://www.dropbox.com/s/v32iyo3njjoci2f/shieldslambutton.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroCAbilityBtn.innerHTML = '<button id="heroCAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Restores life equal to 1d6 + Charm. Cooldown: 5"><img onclick="heal()"src="https://www.dropbox.com/s/8jmngowtfotvx0r/healbutton.png?raw=1" style="width: 75px; height: 75px"></button>'


    heroBar.style.display = "block";
  }

// }

function createMaverick() {

  if (playerName.value == "") {
    alert("Hero name is required");
  } else {
    hero = new Champion(playerName.value, "Maverick", 37, 37, 2, 14, 1, 3, 2, pierce, soulShot, multiShot, bola, 6, []);
    document.getElementById("playerName").style.display = "none";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("roles").style.display = "none";
    heroName.innerText = playerName.value;
    heroCard.attributes[1].value = "card mx-auto border border-dark border-4 bg-success";
    heroHead.attributes[1].value = "https://www.dropbox.com/s/mci8qlnvbf27dz7/maverickhead.png?raw=1";
    heroStats.attributes[1].value = "row align-items-start list-group-item-success";
    heroLifeTxt.attributes[1].value = "bg-success border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroLife.innerText = hero.life;
    heroAttackTxt.attributes[1].value = "bg-success border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroAttack.innerText = hero.attack;
    heroDefenseTxt.attributes[1].value = "bg-success border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroDefense.innerText = hero.defense;
    heroMagicTxt.attributes[1].value = "bg-success border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroMagic.innerText = hero.magic;
    heroSpeedTxt.attributes[1].value = "bg-success border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroSpeed.innerText = hero.speed;
    heroCharmTxt.attributes[1].value = "bg-success border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroCharm.innerText = hero.charm;
    heroEquipTxt.attributes[1].value = "bg-success border border-dark border-2 border-top-0 fw-bold text-dark m-0 p-0";
    heroEquip.innerText = "Longbow";
    heroAbilities.attributes[1].value = "row list-group-item-success mx-auto";
    heroAttackBtn.innerHTML = '<button id="heroAttackBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Attack to hit doing 1d6 + Attack damage"><img onclick="attackTarget(rival)" src="https://www.dropbox.com/s/ink29zizk8pizri/maverattack.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroAAbilityBtn.innerHTML = '<button id="heroAAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Attack to hit doing 1d8 + Attack damage. Cooldown: 5"><img onclick="pierce()" src="https://www.dropbox.com/s/goqg3vosds1bzgt/PierceBtn.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroMAbilityBtn.innerHTML = '<button id="heroMAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Magic to hit doing 1d6 + Magic damage. Cooldown: 3"><img onclick="soulShot()" src="https://www.dropbox.com/s/5bu66ct5cjeqtc5/soulshotbtn.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroSAbilityBtn.innerHTML = '<button id="heroSAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Speed to hit doing 2d6 + Speed damage. Cooldown: 4"><img onclick="multiShot()" src="https://www.dropbox.com/s/acikre71v4hzbrh/Multishotbtn.png?raw=1" style="width: 75px; height: 75px"></button>';
    heroCAbilityBtn.innerHTML = '<button id="heroCAbilityBtn" class="btn mx-auto p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Charm to hit doing 1d4 + Charm; rival Speed -1. Cooldown: 3"><img onclick="bola()" src="https://www.dropbox.com/s/tpqh4gg791xynki/Bolabtn.png?raw=1" style="width: 75px; height: 75px"></button>'


    heroBar.style.display = "block";
  }

}

function createMaverick() {
  let maverName = document.getElementById("maverName");
  let maverBar = document.getElementById("maverBar");
  document.getElementById("playerName").style.display = "none";
  document.getElementById("closeButton").style.display = "none";
  document.getElementById("roles").style.display = "none";
  maverName.innerText = playerName.value;
  maverBar.style.display = "block";
}

function createSoulSeer() {
  let soulsName = document.getElementById("soulsName");
  let soulsBar = document.getElementById("soulsBar");
  document.getElementById("playerName").style.display = "none";
  document.getElementById("closeButton").style.display = "none";
  document.getElementById("roles").style.display = "none";
  soulsName.innerText = playerName.value;
  soulsBar.style.display = "block";

}

function createWhisper() {
  let whispName = document.getElementById("whispName");
  let whispBar = document.getElementById("whispBar");
  document.getElementById("playerName").style.display = "none";
  document.getElementById("closeButton").style.display = "none";
  document.getElementById("roles").style.display = "none";
  whispName.innerText = playerName.value;
  whispBar.style.display = "block";
}

function turn(hero) {

}

function battle(hero, rival) {
  let battleOrder = [hero, rival];
  battleOrder.sort(function (a, b) { return b.orderRoll() - a.orderRoll() });
  while (rival.life > 0) {
    battleOrder[0]
  }
}

// function createChampion() {
//   let display = document.getElementById("display")
//   let champiBar = document.getElementById("heroBar");
//   let heroName = document.getElementById('name');
//   let displayName = document.getElementById('heroName');
//   hero = new Champion(heroName.value, "Champion", 42,42,3,15,3,1,1, overpower, radiantStrike, shieldSlam, heal, 6,0);
//   document.getElementById("start").style.display = "block";
//   display.style.display = "none";
//   displayName.innerHTML = "<u><b>" + heroName.value + "</b></u>"; 
//   document.getElementById("heroLife").innerText = hero.life;
//   document.getElementById("heroAttack").innerText = hero.attack;
//   document.getElementById("heroDefense").innerText = hero.defense;
//   document.getElementById("heroMagic").innerText = hero.magic;
//   document.getElementById("heroSpeed").innerText = hero.speed;
//   document.getElementById("heroCharm").innerText = hero.charm;
//   document.getElementById("heroAttackBtn").innerHTML = '<button id="heroAttackBtn" class="btn mx-auto" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Attack(' + hero.attack + ') to hit, doing 1d' + hero.weapon + ' + Attack(' + hero.attack + ') damage"><img onclick="hero.attackTarget(rival)"src="https://www.dropbox.com/s/vgbus0ygz5zo1dr/champattack.png?raw=1" style="width: 75px; height: 75px"></button>';
//   document.getElementById("heroAAbilityBtn").innerHTML = '<button id="heroAAbilityBtn" class="btn mx-auto" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Attack to hit doing 1d8 + Attack damage. Cooldown: 3"><img onclick="overpower()"src="https://www.dropbox.com/s/6i5vt8xh0f2yi4q/Overpowerbutton.png?raw=1" style="width: 75px; height: 75px"></button>';
//   document.getElementById("heroMAbilityBtn").innerHTML ='<button id="heroMAbilityBtn" class="btn mx-auto" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Magic to hit doing 2d6 + Magic damage. Cooldown: 4"><img onclick="radiantStrike()"src="https://www.dropbox.com/s/ac2i9337f6qo58q/radiantstrikebutton.png?raw=1" style="width: 75px; height: 75px"></button>';
//   document.getElementById("heroSAbilityBtn").innerHTML = '<button id="heroSAbilityBtn" class="btn mx-auto" data-bs-toggle="tooltip" data-bs-placement="top" title="D20 + Speed to hit doing 1d4 + Speed damage. Cooldown: 2"><img onclick="shieldSlam()"src="https://www.dropbox.com/s/v32iyo3njjoci2f/shieldslambutton.png?raw=1" style="width: 75px; height: 75px"></button>';
//   document.getElementById("heroCAbilityBtn").innerHTML = '<button id="heroCAbilityBtn" class="btn mx-auto" data-bs-toggle="tooltip" data-bs-placement="top" title="Restores life equal to 1d6 + Charm. Cooldown: 5">  <img onclick="heal()"src="https://www.dropbox.com/s/8jmngowtfotvx0r/healbutton.png?raw=1" style="width: 75px; height: 75px"></button>';
// }