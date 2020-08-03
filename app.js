console.log('Conetao jevi');
    // console.log(tareas);  


//  ESTE ES EL CODIGO PARA EL BUSCADOR **ARREGLAR CHILDREN, DARLE FORMATO, BUENA PRACTICA**
const losUl = document.querySelector('#task ul');
const Frm = document.forms['searchbar'].querySelector('input');
Frm.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const tareas = losUl.getElementsByTagName('li');

    Array.from(tareas).forEach(function(homework) {
        // const NameTask = homework.children[1].textContent;        ***Esta asi para aplica buena practica**
        const NameTask = homework.children[1].textContent;
        if(NameTask.toLowerCase().indexOf(term) != -1){
                homework.style.display = 'block';
            } else {
                homework.style.display = 'none';
            }

        });
});

// ESTE ES PARA EL TACHADO DE TASK, MEDIANTE EL CHECKBOX
const Tachar = document.querySelectorAll('.checkbox');
// console.log(Tachar);
Array.from(Tachar).forEach(function(x){
    x.addEventListener('change', function(k){
          if(x.checked){
            x.nextElementSibling.style.textDecoration = "line-through";
          } else {
            x.nextElementSibling.style.textDecoration = "none";
          }
        });
});




// ESTE ES PARA EL TACHADO DE TASK, MEDIANTE EL CHECKBOX
// const Tachar = document.querySelector('.checkbox');
// Tachar.addEventListener('change', function(e){
    
// const Tachado = Tachar.nextElementSibling;
//   if(Tachar.checked){
//     Tachado.style.textDecoration = "line-through";
//   } else {
//     Tachado.style.textDecoration = "none";
//   }
// });

