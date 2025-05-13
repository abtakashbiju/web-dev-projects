let list = [];
const object={};

function save(){
  let inputList = document.querySelector('.input-box');
  let inputDate = document.querySelector('.input-date');
  // console.log(inputDate.value);
  if(inputList.value !== "" && inputDate.value !== ""){
    object.name=inputList.value;
    object.date=inputDate.value;
    console.log(object);
    inputList.value = '';
    inputDate.value = '';
    list.push({name:object.name, date: object.date});
    render();
    console.log(list);
  }
}

function render(){
  let length = list.length;
  // console.log(length);
  let HTML = '';
  for(let i=0; i<length; i++){
    HTML += `<p>${list[i].name} &nbsp&nbsp&nbsp${list[i].date} &nbsp&nbsp&nbsp<button onclick="deleteElement(${i})">Delete</button></p>`;
  }
  document.querySelector('.result-box').innerHTML=HTML;
  // console.log(x);
}

/*
function keyPress(){
  if(event.key === 'Enter'){
    save();
  }
}
*/

function deleteElement(i){
  list.splice(i, 1);
  render();
}

/*
const nums = ["1","2","3","4"];
nums.splice(0,1);
console.log(nums);
*/