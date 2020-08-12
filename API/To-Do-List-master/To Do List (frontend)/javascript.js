// Variables
const input = document.getElementById("input");
const apiUrl = 'https://localhost:44326/default/'; 
let list;
let listarr = [];

function get(){
    list.innerHTML = "";
    fetch(apiUrl+"get") 
    .then(response => response.json())
    .then(data => {
        listarr = data;
        fillarray();
        setChangeListener();
        completedTasks();
    });
}

function setDone(id){
    fetch(apiUrl+`SetDone/${id}`, {
        method: 'POST'
    })
    .then(success => {
    })
    .catch(error => {
        alert(error)
    })
}

function completedTasks(){
    let checklist = document.querySelectorAll(".checklist");
    let span = document.querySelectorAll(".span");
    for (let i = 0; i < listarr.length; i++) {
        if (listarr[i].done == 1){
        checklist[i].setAttribute("class", "hide-check");
        span[i].setAttribute("class", "line-through");
        }
    }
}

function setChangeListener() {
    let checklist = document.querySelectorAll(".checklist");
    let span = document.querySelectorAll(".span");
    for (let i = 0; i < checklist.length; i++) {
    checklist[i].addEventListener('change', (event) => {
        if (event.target.checked) {
            checklist[i].setAttribute("class", "hide-check");
            span[i].setAttribute("class", "line-through");
            //console.log("Funciona")
        }
    });
    }
}

function insert(inputValue){
    fetch(apiUrl+`insert/'${inputValue}'`, {
        method: 'POST'
    })
    .then(success => {
        get();
    })
    .catch(error => {
        alert(error) 
    })
}

function fillarray(){
    let checklist = document.querySelectorAll(".checklist");
    let span = document.querySelectorAll(".span");
    listarr.forEach(element => {
        fill(element);
    });  
}

function del(id){
    fetch(apiUrl+`Delete/${id}`, {
        method: 'POST'
    })
    .then(success => {
        get(); 
    })
    .catch(error => {
        alert(error)
    })
}

function fill(element){
    let item = `<input type="checkbox" id="${"check-"+element.id}" onclick="setDone(${element.id})" name="check" class="checklist"/><span class="span">${element.item}</span>`;
    let delicon = `<i id="${element.id}" onclick="del(${element.id})" class="fas fa-trash" style="float: right; margin-right: 30px;"></i>`;
    let wholeitem = "<li>"+item+delicon+"</li>" 

    list.innerHTML += (wholeitem);
    input.value = ""; 
 }


document.addEventListener('DOMContentLoaded', () => {    
    list = document.getElementById("list");
    get();
}, false);

document.addEventListener('keydown', (event) => { 
    if (event.keyCode == 13) {
        if (input.value) insert(input.value);
        else alert("No puede dejarlo vacio.");
    }
  });

