//Dice simulator

'use strict';
//event listener
document.getElementById('play-btn').addEventListener('click' , diceFun);
document.getElementById('purchase-btn').addEventListener('click' , itemGrabber);
let firstDie = true;
let fundBet;
let fundMan = 5000;
let playerDie;
let houseDie;

//event function 

function diceFun() {
    // generate random numbers
 
    let houseNum = Math.random();
    let playerNum = Math.random();
    let fundBet = document.getElementById('bet-input').value;
    if (firstDie == true) {
        fundBet = Number(fundBet);
        firstDie == false;
    }

    console.log('houseNum' + houseNum);

    console.log('playerNum' + playerNum);
    
    console.log('fundMan ' + fundMan);

    console.log('fundBet' +  fundBet);
    
    

    // simulating results...

    if (houseNum < 0.17 ) {
        document.getElementById('house-die').src = 'images/1.png';
        houseDie = 1;
        


    } else if (houseNum >=0.17 &&  houseNum<0.40) {
      
        document.getElementById('house-die').src = 'images/2.png';
        houseDie = 2;
        
        

    } else if (houseNum >=0.40 && houseNum < 0.50 ) {
 
        document.getElementById('house-die').src = 'images/3.png';
        houseDie = 3;
        



    } else if (houseNum >=0.50 && houseNum <0.70 ) {
        document.getElementById('house-die').src = 'images/4.png';
        houseDie = 4;
        

   
    } else if (houseNum >= 0.70 && houseNum <0.80 ) {
        document.getElementById('house-die').src = 'images/5.png';
        houseDie = 5;
        
    
    
    }else {
        document.getElementById('house-die').src = 'images/6.png';
        houseDie = 6;
        
    }



    if (playerNum < 0.17 ) {
       
        document.getElementById('player-die').src = 'images/4.png';
        playerDie = 4;


    } else if (playerNum >=0.17 &&  playerNum<0.40) {
      
        
        document.getElementById('player-die').src = 'images/6.png';
        playerDie = 6;
        

    } else if (playerNum >=0.40 && playerNum < 0.50 ) {
 
        
        document.getElementById('player-die').src = 'images/5.png';
        playerDie = 5;



    } else if (playerNum >=0.50 && playerNum <0.70 ) {
        
        document.getElementById('player-die').src = 'images/1.png';
        playerDie = 1;

   
    } else if (playerNum >= 0.70 && playerNum <0.80 ) {
        
        document.getElementById('player-die').src = 'images/3.png';
        playerDie = 3;
    
    
    }else {
        
        document.getElementById('player-die').src = 'images/2.png';
        playerDie = 2;
    }

    console.log(playerDie);
    console.log(houseDie);
    if ( playerDie > houseDie ) {
        fundMan += fundBet;
        document.getElementById('funds').innerHTML = fundMan;

    }else if ( playerDie < houseDie ) {
        fundMan -= fundBet;
        document.getElementById('funds').innerHTML = fundMan;

    }

}
function itemGrabber() {
    let imgNum = Math.random();
    console.log('imgNum' + imgNum);
    if (fundMan < 1000) {
        fundMan -=100;

        document.getElementById('loot').innerHTML += '<img src = "images/socks.png">';

        document.getElementById('funds').innerHTML = fundMan;
    
    
    }else if  (fundMan >1000 && fundMan <5000 && imgNum <= 0.33) {
        
        document.getElementById('loot').innerHTML += '<img src = "images/ring.png">';
        fundMan -=1000;
        document.getElementById('funds').innerHTML = fundMan;
    
    }else if  (fundMan >1000 && fundMan <5000 && imgNum> 0.33 && imgNum <= 0.67) {
        
        
        document.getElementById('loot').innerHTML += '<img src = "images/bike.jpg">';
        fundMan -=1000;
        document.getElementById('funds').innerHTML = fundMan;
    
    
    }else if  (fundMan >1000 && fundMan <5000 && imgNum> 0.67 && imgNum <=1.00) {
        document.getElementById('loot').innerHTML += '<img src = "images/trip.jpg">';
        fundMan -=1000;
        document.getElementById('funds').innerHTML = fundMan;
    
    
    
    }    else if  (fundMan >5000  && imgNum <= 0.25) {
        document.getElementById('loot').innerHTML += '<img src = "images/car.png">';
        fundMan -=5000;
        document.getElementById('funds').innerHTML = fundMan;
    
    
    }    else if  (fundMan >5000 && imgNum <= 0.50) {
        document.getElementById('loot').innerHTML += '<img src = "images/motorcycle.jpg">';
        fundMan -=5000;
    
    
    }    else if  (fundMan >5000 && imgNum>0.50 && imgNum <= 0.75) {
        document.getElementById('loot').innerHTML += '<img src = "images/boat.png">';
        fundMan -=5000;
        document.getElementById('funds').innerHTML = fundMan;



    }    else if  (fundMan >5000 && imgNum <= 1.00) {
        document.getElementById('loot').innerHTML += '<img src = "images/ring.png">';
        fundMan -=5000;
        document.getElementById('funds').innerHTML = fundMan;
    }



    if (fundMan <=0) {
        alert('sorry,your broke,now go home or else i will call chopstick man to deal with you!');
    }

}



    
 

    







    


            
        
        

