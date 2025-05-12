let list = [];

function save(){
  let inputList = document.querySelector('.input-box');
  if(inputList.value != ''){
    list.push(inputList.value);
  }
  inputList.value = '';
  // console.log(list);
  render();
}

function render(){
  let length = list.length;
  // console.log(length);
  let HTML = '';
  for(let i=0; i<length; i++){
    HTML += `<p>${list[i]} <button onclick="deleteElement(${i})">Delete</button></p>`;
  }
  document.querySelector('.result-box').innerHTML=HTML;
  // console.log(x);
}

function keyPress(){
  if(event.key === 'Enter'){
    save();
  }
}

function deleteElement(i){
  list.splice(i, 1);
  render();
}

/*
const nums = ["1","2","3","4"];
nums.splice(0,1);
console.log(nums);
*/