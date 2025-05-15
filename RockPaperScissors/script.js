let user;
let computer;
let result ;
let score = JSON.parse(localStorage.getItem('score'));

results();

if(score === null){
  score={
    wins:0,
    loses:0,
    ties:0
  }
}
let autoSelect='';

let autoStatus = false;

function autoplay(){
  if(autoStatus === false){
      autoSelect = setInterval(function(){
      user = computerSelect();
      userSelect(user);} 
      ,1000
    );
    autoStatus = true;
  }else{
    clearInterval(autoSelect);
    autoStatus = false;
  }
}

// setInterval(function(){console.log("hello")},2000);

function computerSelect(){
  let num = Math.random();
  // console.log(`${num}`);
  if(num<=(1/3)){
    computer = 'rock';
  }else if(num>(1/3) && num<=(2/3)){
    computer = 'paper';
  }else{
    computer = 'scissors';
  }
  return computer;
}

function userSelect(button){
  user = button;
  // console.log(`${user}`);
  computerSelect();

  if(computer == user){
    result = 'Its a tie';
    score.ties++;
    // console.log(`${result}`);
  }else if(computer=='rock' && user =='paper'){
    result = 'You won';
    score.wins++;
    // console.log(`${result}`);
  }else if(computer=='rock' && user =='scissors'){
    result = 'You lose';
    score.loses++;
    // console.log(`${result}`);
  }else if(computer=='paper' && user =='scissors'){
    result = 'You won';
    score.wins++;
    // console.log(`${result}`);
  }else if(computer=='paper' && user =='rock'){
    result = 'You lose';
    score.loses++;
    // console.log(`${result}`);
  }else if(computer=='scissors' && user =='rock'){
    result = 'You won';
    score.wins++;
    // console.log(`${result}`);
  }else if(computer=='scissors' && user =='paper'){
    result = 'You lose';
    score.loses++;
    // console.log(`${result}`);
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.result-text').innerHTML=`${result}`;
  
  selection();

  results();
}

function selection(){
  document.querySelector('.player-move').innerHTML = `You: <img src = ${user}.png class='button-image player-decision'> <img src="${computer}.png" class='button-image player-decision'> :Computer`;
}

function results(){
  document.querySelector('.score-text').innerHTML = `wins:${score.wins},  loses:${score.loses}, ties:${score.ties}`;
}

function resetScore(){
  score={
    wins:0,
    loses:0,
    ties:0
  }
  localStorage.setItem('score', JSON.stringify(score));
  results();
}