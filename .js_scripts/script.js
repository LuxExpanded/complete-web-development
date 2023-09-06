

function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
    console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk.");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money % 1.5;
  }
  function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);
    return numberOfBottles;
  }
  
  getMilk(6);
  