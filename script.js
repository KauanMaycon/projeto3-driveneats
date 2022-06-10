
/*Values that will be saved after executing the function select*/
let dish;
let drink;
let desert;

/*Start selectDish */
function selectChicken(){
    let chicken = document.querySelector(".chicken").style.border = "3px solid #32b72f"; 
    let ball = document.querySelector(".chicken .ball").style.display = "inherit";
    let meat = document.querySelector(".meat").style= "none";
    let bMeat = document.querySelector(".meat .ball").style = "none";
    let swine = document.querySelector(".swine").style = "none";  
    let bSwine = document.querySelector(".swine .ball").style = "none";  
    dish = "Chicken";
}

function selectMeat(){
    let meat = document.querySelector(".meat").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".meat .ball").style.display = "inherit";
    let chicken = document.querySelector(".chicken").style = "none";
    let bChicken = document.querySelector(".chicken .ball").style = "none";
    let swine = document.querySelector(".swine").style = "none";
    let bSwine = document.querySelector(".swine .ball").style = "none";  
    dish = "Meat";
}

function selectSwine(){
    let swine = document.querySelector(".swine").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".swine .ball").style.display = "inherit";
    let chicken = document.querySelector(".chicken").style = "none";
    let bChicken = document.querySelector(".chicken .ball").style = "none";
    let meat = document.querySelector(".meat").style= "none";
    let bMeat = document.querySelector(".meat .ball").style = "none";
    dish = "Swine";
}
/*End selectDish */

/*Start selectDrink */
function selectCoke(){
    let coke = document.querySelector(".coke").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".coke .ball").style.display = "inherit";
    let juice = document.querySelector(".juice").style = "none";
    let bJuice = document.querySelector(".juice .ball").style = "none";
    let juiceBottle = document.querySelector(".juiceBottle").style = "none";
    let bJuiceBottle = document.querySelector(".juiceBottle .ball").style = "none";
    drink = "Coke";
}

function selectJuice(){
    let juice = document.querySelector(".juice").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".juice .ball").style.display = "inherit";
    let coke = document.querySelector(".coke").style = "none";
    let bCoke = document.querySelector(".coke .ball").style = "none";
    let juiceBottle = document.querySelector(".juiceBottle").style = "none";
    let bJuiceBottle = document.querySelector(".juiceBottle .ball").style = "none";
    drink = "Juice";
}

function selectJuiceBottle(){
    let juiceBottle = document.querySelector(".juiceBottle").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".juiceBottle .ball").style.display = "inherit";
    let coke = document.querySelector(".coke").style = "none";
    let bCoke = document.querySelector(".coke .ball").style = "none";
    let juice = document.querySelector(".juice").style = "none";
    let bJuice = document.querySelector(".juice .ball").style = "none"; 
    drink = "JuiceBottle"
}
/*End selectDrink */

/*Start  selectDesert*/
function selectPudding(){
    let pudding = document.querySelector(".pudding").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".pudding .ball").style.display = "inherit";
    let iceCream = document.querySelector(".iceCream").style = "none";
    let bIceCream = document.querySelector(".iceCream .ball").style = "none";
    let cake = document.querySelector("cake").style = "none";
    let bCake = document.querySelector(".cake .ball").style = "none";
    desert = "Pudding";
}

function selectIceCream(){
    let iceCream = document.querySelector(".iceCream").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".iceCream .ball").style.display = "inherit";
    let pudding = document.querySelector(".pudding").style = "none";
    let bPudding = document.querySelector(".pudding .ball").style = "none";
    let cake = document.querySelector(".cake").style = "none";
    let bCake = document.querySelector(".cake .ball").style = "none";
    desert = "IceCream";
}

function selectCake(){
    let cake = document.querySelector(".cake").style.border = "3px solid #32b72f";
    let ball = document.querySelector(".cake .ball").style.display = "inherit";
    let pudding = document.querySelector(".pudding").style = "none";
    let bPudding = document.querySelector(".pudding .ball").style = "none";
    let iceCream = document.querySelector(".iceCream").style = "none";
    let bIceCream = document.querySelector(".iceCream .ball").style = "none";
    desert = "Cake";
}

