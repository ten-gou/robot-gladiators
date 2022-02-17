// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

window.alert("This is an alert! JavaScript is running!");

var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 300;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  var promptFight = window.prompt("Your next opponent is " + enemyName + ". Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0 && playerHealth > 0) {
      
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } 
      else {
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } 
      else {
      playerHealth = playerHealth - enemyAttack;
      console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
      }

  // if player chose to skip
    }
  }
  else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight! Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
  }
  else {
    window.alert("You need to choose a valid option. Try again!");
  }
}

/* Another way to create an equivalent function is as follows
function fight() {
    window.alert("Welcome to Robot Gladiators!");
}
*/

for (var i = 0; i < enemyNames.length; i++;) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! ROUND " + (i + 1) + "!");
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;

  fight(pickedEnemyName);
}