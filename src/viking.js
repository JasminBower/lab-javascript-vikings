// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health,
    this.strength = strength
  };

   attack(){
       return this.strength;
    };

    receiveDamage(damage){
      this.health -= damage;
    };

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
    
  };

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 1){
      return `${this.name} has received ${damage} points of damage`
    } return `${this.name} has died in act of combat`
  };


  battleCry(){
    return 'Odin Owns You All!'
  };
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    } return `A Saxon has died in combat`
  }
}

// War
class War {

  vikingArmy = [];
  saxonArmy = [];


  addViking(viking){
   this.vikingArmy.push(viking)
  };

  addSaxon(saxon){
  this.saxonArmy.push(saxon)
  };

  vikingAttack(){

    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

    const saxonIndex = this.saxonArmy.indexOf(randomSaxon);

    if(randomSaxon.health <= randomViking.strength){
      this.saxonArmy.splice(saxonIndex, 1)
    };
    
    return randomSaxon.receiveDamage(randomViking.strength);

    
  };

  saxonAttack(){

    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];


    const vikingIndex = this.saxonArmy.indexOf(randomSaxon);

    if(randomViking.health <= randomSaxon.strength){
      this.vikingArmy.splice(vikingIndex, 1)
    };

    return randomViking.receiveDamage(randomSaxon.strength);

  };

  showStatus(){
    if(this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!'
    } else if(this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survived another day...'
    } else return 'Vikings and Saxons are still in the thick of battle.'

  };
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
