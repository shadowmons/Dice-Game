function dicee(atrit){
    var n = Math.random();
    n = Math.floor(n * 6) + 1;
        switch(n) {
      case 1:
        document.querySelector(atrit).setAttribute("src", "./images/dice1.png");
        break;
      case 2:
        document.querySelector(atrit).setAttribute("src", "./images/dice2.png");
        break;
      case 3:
        document.querySelector(atrit).setAttribute("src", "./images/dice3.png");
        break;
      case 4:
        document.querySelector(atrit).setAttribute("src", "./images/dice4.png");
        break;
      case 5:
        document.querySelector(atrit).setAttribute("src", "./images/dice5.png");
        break;          
      default:
        document.querySelector(atrit).setAttribute("src", "./images/dice6.png");
    }
    return n;
    }

function roll(){
    var dice1 = dicee(".img1");
    var dice2 = dicee(".img2");

    if (dice1>dice2){
        document.querySelector("h1").textContent= "🚩Player 1 is the winner";
    } else if (dice1 === dice2){
        document.querySelector("h1").textContent= "Is a Tie";
    } else{
        document.querySelector("h1").textContent= "Player 2 is the winner🚩";
    }

    document.querySelector(".btn").textContent = "Play again";

}
