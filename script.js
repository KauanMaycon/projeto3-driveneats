
let mealA;
let mealB;
let mealC;
let priceA;
let priceB;
let priceC;

/*Start selectDish */
function selectDish(dish){
    let border = document.querySelector('.boxesA .border');
    if(border !== null){
        removeBallA(); 
        border.classList.remove('border');  
    }
    dish.classList.add('border');
    addBallA();
    priceDish();
    mealDish();
    finish();
}

function mealDish(){
    mealA = document.querySelector('.border .mealA');
    mealA = mealA.innerText;
    //console.log(mealA);
}

function priceDish(){
    priceA = document.querySelector('.border .priceA');
    priceA = priceA.innerHTML;
    priceA = (priceA).replace("R$","");
    priceA = (priceA).replace(",",".");
    priceA = parseFloat(priceA);
    //console.log(priceA);
}

function addBallA(){
    let ballA = document.querySelector('.boxesA .border .ball')
    ballA.classList.add('ballSelect');
}

function removeBallA(){
    let ballA = document.querySelector('.boxesA .border .ball')
    if(ballA !== null){
     ballA.classList.remove('ballSelect');
    }
}

/*End selectDish*/

/*Start selectDrink */
function selectDrink(drink){
    const border = document.querySelector('.boxesB .border');
    if(border !== null){
        removeBallB();
        border.classList.remove('border');
    }
    drink.classList.add('border'); 
    addBallB();
    priceDrink();
    mealDrink();
    finish();
}

function mealDrink(){
    mealB = document.querySelector('.border .mealB');
    mealB = mealB.innerText;
    //console.log(mealB);
}

function priceDrink(){
    priceB = document.querySelector('.border .priceB');
    priceB = priceB.innerHTML;
    priceB = priceB.replace("R$","");
    priceB = priceB.replace(",",".");
    priceB = parseFloat(priceB);
    //console.log(priceB);
}

function addBallB(){
    let ballB = document.querySelector('.boxesB .border .ball');
    ballB.classList.add('ballSelect');
}

function removeBallB(){
    let ballB = document.querySelector('.boxesB .border .ball');
    if (ballB !== null){
        ballB.classList.remove('ballSelect');
    }
}

/*End selectDrink */

/*Start selectDessert */
function selectDessert(dessert){
    const border = document.querySelector('.boxesC .border');
    if(border !== null){
        removeBallC();
        border.classList.remove('border');
    }
    dessert.classList.add('border');
    addBallC();
    priceDessert();
    mealDessert();
    finish();
}

function mealDessert(){
    mealC = document.querySelector('.border .mealC');
    mealC = mealC.innerText;
    //console.log(mealC);
}

function priceDessert(){
    priceC = document.querySelector('.border .priceC');
    priceC = priceC.innerHTML;
    priceC = priceC.replace("R$","");
    priceC = priceC.replace(",",".");
    priceC = parseFloat(priceC);
    //console.log(priceC);
}

function addBallC(){
    let ballC = document.querySelector('.boxesC .border .ball');
    ballC.classList.add('ballSelect');
}

function removeBallC(){
    let ballC = document.querySelector('.boxesC .border .ball');
    if(ballC !== null){
        ballC.classList.remove('ballSelect');
    }
}
/*End selectDessert */

/*Start buttonFinish */
function finish(){
    if(mealA && mealB && mealC){
        let buttonColor = document.querySelector(".buttonColor");
        let finishing = document.querySelector(".finishing div button");
        finishing.innerHTML = "Fechar pedido";
        finishing.classList.add("buttonColor");
    }
}
/*End buttonFinish */

/*Start directOrder */
function directOrder(){
    if(mealA && mealB && mealC){
     let request =
     `Olá, gostaria de fazer o pedido:
     -Prato:${mealA}
     -Bebida:${mealB}
     -Sobremessa:${mealC}
      Total:R$${(priceA + priceB + priceC).toFixed(2).replace(".",",")}`;
      let whatsApp = (`https://wa.me/+553597085435?text= ${encodeURIComponent(request)}`);
      window.open(whatsApp);   
    }
 }

/*Finish directOrder */



























  