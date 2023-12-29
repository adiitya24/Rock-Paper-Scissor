let userscore=0;
let compscore=0;
const msgpara=document.querySelector("#msg");
const choises=document.querySelectorAll(".choise");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const draw=()=>{
    console.log("Gmae Draw");
    msgpara.innerHTML="Game Draw. Play again...";
    msgpara.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userchoise,compchoise)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("user win");
        msgpara.innerText='You Win! ';
        msgpara.style.backgroundColor="green";

    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("userr lost");
        msgpara.innerHTML="You Lost!";
        msgpara.style.backgroundColor="red";
    }
}
const generateChoice=()=>{
    const option=["rock","paper","scissors"];
    const ran=Math.floor(Math.random()*3);
    return option[ran];
}
const playGame=(userchoise)=>{
const compchoise=generateChoice();
console.log("computer choice",compchoise)
if(userchoise===compchoise){
    draw();
}
else{
    let  userwin=true;
    if(userchoise==="rock"){
      userwin=compchoise==="paper"?false:true;
}
else if(userchoise==="paper"){
    userwin=compchoise==="scissors"?false:true;
}
else{
   userwin=compchoise==="rock"?false:true;
}
    showwinner(userwin,userchoise,compchoise);
}

};
choises.forEach((choise) => {
    console.log(choise);
    choise.addEventListener("click", ()=>{
        const userchoise=choise.getAttribute("id");
console.log("Choice was clicked",userchoise);
playGame(userchoise);
    })
});

const btn1=document.querySelector(".btn");

const reset=()=>{
    userscore=0;
    compscore=0;
    userscorepara.innerText=userscore;
    compscorepara.innerText=compscore;
    console.log(userscore);
    }

btn1.addEventListener("click",reset);


