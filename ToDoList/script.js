let list = [];

function save(){
  let inputList = document.querySelector('.input-box');
  let inputDate = document.querySelector('.input-date');
  // console.log(inputDate.value);
  if(inputList.value !== "" && inputDate.value !== ""){
    let name=inputList.value;
    let date=inputDate.value;
    // console.log(object);
    inputList.value = '';
    inputDate.value = '';
    list.push({name, date});
    render();
    // console.log(list);
  }
}

function render(){
  let length = list.length;
  // console.log(length);
  let HTML = '';
  list.forEach(function(value, i){
    HTML += `
    <p>${value.name} </p>
    <p>${value.date} </p>
    <button onclick="deleteElement(${i})" class="delete-button">Delete
    </button>`;
  });
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