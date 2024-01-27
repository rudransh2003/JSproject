let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
    const options =["rock","paper","scissors"];
    const randomind = Math.floor(Math.random()*3);
    return options[randomind];
}

const drawgame= () => {
    console.log("Game drawn!!");
    msg.innerText = "Game drawn!";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin) => {
   if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    console.log("You win!");
    msg.innerText = "You Win!!";
    msg.style.backgroundColor = "green";
   }
   else{
    compscore++;
    compscorepara.innerText = compscore;
    console.log("You lose");
    msg.innerText = "You lose :("
    msg.style.backgroundColor = "red";
   }
}

const playgame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice = ",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
            userwin = compchoice==="rock" ? true:false;
        }
        else{
            userwin = compchoice==="paper" ? true:false;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playgame(userchoice);
    });
  });