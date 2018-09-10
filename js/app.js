// initalise variable
var ShoppingBasket= [];
var ans="";
var wallet = 20.0;
var cost = 0;
var bool=false;
// intro
alert("Welcome to control flow lab, lets go to the store");
var item = prompt("what would you like to buy? (Type only first letter)\n[B]ananas\n[A]pples\n[D]rink\n[C]hicken");
item = item.toLowerCase();
console.log(item);
// beginning switch statement
switch (item) {
  case "a":
  case "b":
    alert("Apples and Bananas are in aisle 1");
    alert(`You go to aisle 1 and find the Apples and Bananas. They are both £1.50`);
    ans = prompt ("will you pick the Apples and Bananas up?\n[y]es\n[N]o");
    ans = ans.toLowerCase();
    if (ans === "y"){
      alert("You pick the Apples/Banana up");
      ShoppingBasket.push("Apple/Banana");
      console.log(ShoppingBasket);
    }else if (ans ==="n") {
      alert("You decide against the Apples and Bananas");
    }else {
      alert("I have no idea what you want. Just reload to restart ok?");
      location.reload();
    };
    ans = prompt("you notice a £20 note on the floor. Do you pick it up?\n[y]es\n[n]o");
    ans = ans.toLowerCase();
    if (ans ==="y"){
      alert("You picked up the £20.")
      wallet = wallet +20;
    } else if (ans ==="n") {
      alert("you left the note on the floor. someone else picked it up");
    }else {
      alert("I have no idea what you want. Just reload to restart ok?");
      location.reload();
    };
    break;
  case "c":
    alert("Chicken is in aisle 2");
    alert("You go to Aisle 2 and find the Chicken. They are £3.")
    ans = prompt("will you pick up the Chicken?\n[y]es\n[n]o");
    ans = ans.toLowerCase();
    if (ans === "y"){
      alert("You pick the Chicken up");
      ShoppingBasket.push("Chicken");
      console.log(ShoppingBasket);
    }else if (ans ==="n") {
      alert("You decide against the Chicken");
    }else {
      alert("I have no idea what you want. Just reload to restart ok?");
      location.reload();
    };
    alert("You see a crying child in the middle of the aisle. It looks like she is lost");
    ans = prompt("Help her find her parents?\n[Y]es\n[N]o");
    ans =ans.toLowerCase();
    if (ans ==="y"){
      alert("you help the girl find her parents. they are so happy they give you £50!");
      wallet = wallet +50;
      console.log("wallet " +wallet);
    }else if (ans="n") {
      alert("You Monster.");
    }else{
      alert("I have no idea what you want. Just reload to restart ok?");
      location.reload();
    }

    break;
  case "d":
    alert("The Drinks are in aisle 3");
    alert("You go to Aisle 3 and find the Drinks. They are 60p");
    ans = prompt("will you pick up a Drink?\n[y]es\n[n]o");
    ans=ans.toLowerCase();
    if (ans === "y"){
      alert("You pick the Drink up");
      ShoppingBasket.push("Drink");
      console.log(ShoppingBasket);
    }else if (ans ==="n") {
      alert("You decide against the Drinks");
    }else {
      alert("I have no idea what you want. Just reload to restart ok?");
      location.reload();
    };

    alert("You notice a Pyramid of Peanuts. They cost £2.50");
    ans= prompt("take a can from the [t]op or the [b]ottom");
     ans = ans.toLowerCase();
    if (ans ==="t") {
      alert("you get some peanuts");
      ShoppingBasket.push("Peanuts");
      console.log(ShoppingBasket);
    }else if (ans==="b") {
      alert("the pyramid Collaspes");
      alert("a worker sees what you did and starts to Shout at you.");
      ans = prompt("Do you shout Back?\n[Y]es\n[N]o");
      ans = ans.toLowerCase();
      if (ans==="y") {
        alert("The Manager comes over and kicks you out. Restart");
        location.reload();
      }else if (ans==="n") {
        alert("you apologize and give him £20");
        wallet = wallet - 20;
        ShoppingBasket.push("Peanuts");
      }else {
        alert("I have no idea what you want. Just reload to restart ok?");
        location.reload();
      }

    }else{
      alert("I have no idea what you want. Just reload to restart ok?");
      location.reload();
    }

    break;
  default:
  alert("you look for hours but you can't find it and give up. time to reload.");
  location.reload();
};
// Checkout
alert("with the items you want, you go to the cashier");
alert("The Cashier scans your items");

if(ShoppingBasket[0] === "Apple/Banana") {
  cost = cost + 1.50;
  console.log(`cost is £${cost}`);
} else if(ShoppingBasket[0]==="Chicken"){
  cost = cost + 3;
  console.log(`cost is £${cost}`);
} else if(ShoppingBasket[0]==="Drink"){
  cost = cost + .60;
};

if(ShoppingBasket[1]!== "Peanuts"){
  console.log("no Peanuts");
} else{
  cost = cost +2.50;
  console.log(`cost is £${cost}`);
};

alert("The cashier asks you to pay");
if (wallet >= cost){
  alert("you pay for the items");
  wallet = wallet-cost;
  console.log(`wallet is £${wallet}`);
  alert(`you have £${wallet} left`);
  alert("you leave the store. Goodbye!!");
}else {
  alert("You dont have enough!");
  alert("they kick you out. Restart");
}
