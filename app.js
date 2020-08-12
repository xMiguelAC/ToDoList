console.log('Conetao jevi');
    // console.log(tareas);  


//  ESTE ES EL CODIGO PARA EL BUSCADOR **ARREGLAR CHILDREN, DARLE FORMATO, BUENA PRACTICA**
const losUl = document.querySelector('#task ul');
const Frm = document.forms['searchbar'].querySelector('input');
Frm.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const tareas = losUl.getElementsByTagName('li');

    Array.from(tareas).forEach(function(homework) {
        // const NameTask = homework.children[1].textContent;        ***Aqui es para aplica buena practica**
        const NameTask = homework.children[1].textContent;
        if(NameTask.toLowerCase().indexOf(term) != -1){
                homework.style.display = 'block';
            } else {
                homework.style.display = 'none';
            }

        });
});

// ESTE ES PARA EL TACHADO DE TASK, MEDIANTE EL SPAN .TEXT [BUSCA EL .TEXT Y LE APLICA EL TACHADO]
const Tachar = document.querySelectorAll('.checkbox');
Tachar.forEach(function(x){
// console.log(x.nextElementSibling);
x.addEventListener('change', function(e){
const li = e.target.parentElement;
const spam = li.querySelector('.text');
          if(x.checked){
            spam.style.textDecorationLine = "line-through";
          } else {
             spam.style.textDecorationLine = "none";
          }
        });
});


// ESTE ES EL ANTERIOR TACHADO DONDE SE APLICABA MEDIANTE EL PROXIMO ELEMENTO [ELEMENTSIBLING]

// const Tachar = document.querySelectorAll('.checkbox');
// console.log(Tachar);
// Array.from(Tachar).forEach(function(x){
// console.log(x);
// // console.log(x.nextElementSibling);
//     x.addEventListener('change', function(k){
//           if(x.checked){
//             x.nextElementSibling.style.textDecoration = "line-through";
//           } else {
//             x.nextElementSibling.style.textDecoration = "none";
//           }
//         });
// });



// ESTE ES PARA EL borrado

const Imgs = document.querySelectorAll('img');
// console.log(Imgs);
Imgs.forEach(function(trash){
trash.addEventListener('click', function(e){
const li = e.target.parentElement;
li.remove();
        });
});




// Para Agregar Libro
// VER VIDEO 11 Y 12 DE THE NET NINJA
// ME QUEDE DONDE LO AGREGA Y LO PONE EN EL LI PERO FALTA EL CHECKBOX CON LA IMAGEN
// UBICAR CON SYNTAX: document.createElement(nodename) PARA CHECK Y IMG

let imglink = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNDg2LDIuNDg2KSBzY2FsZSgwLjk3OCwwLjk3OCkiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgZmlsbD0iIzQyNWU1NiIgc3Ryb2tlPSIjNmM5YjhkIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMzAuMzg0NjIsLTAuMjcxNjNjNy4yNjYyMywwIDE0LjM5NjYzLDEuNDI2MDkgMTkuNTU3NjksNi41MTkyM2M1LjE2MTA2LDUuMDkzMTUgNi43OTA4NywxMi4zMjU0MiA2Ljc5MDg3LDE5LjgyOTMzaDM0LjQ5NzZjNC43ODc1NiwwIDguNjkyMzEsMy45MDQ3NSA4LjY5MjMxLDguNjkyMzFoOC42OTIzMXYxNy4zODQ2MmgtMTkxLjIzMDc3di0xNy4zODQ2Mmg4LjY5MjMxYzAsLTQuNzg3NTYgMy45MDQ3NSwtOC42OTIzMSA4LjY5MjMxLC04LjY5MjMxaDM0LjQ5NzZjMCwtNy41MDM5IDEuNjI5ODEsLTE0LjczNjE3IDYuNzkwODcsLTE5LjgyOTMzYzUuMTYxMDYsLTUuMDkzMTQgMTIuMjkxNDcsLTYuNTE5MjMgMTkuNTU3NjksLTYuNTE5MjN6TTg4LjgyNDUyLDE5LjI4NjA2Yy0wLjU0MzI3LDAuNTA5MzIgLTEuNjI5ODEsMS45MzUzOSAtMS42Mjk4MSw2Ljc5MDg3aDUxLjYxMDU4YzAsLTQuODU1NDcgLTEuMDg2NTQsLTYuMjgxNTUgLTEuNjI5ODEsLTYuNzkwODdjLTAuNTQzMjcsLTAuNTA5MzIgLTIuMDM3MjYsLTEuNjI5ODEgLTYuNzkwODcsLTEuNjI5ODFoLTM0Ljc2OTIzYy00Ljc1MzYxLDAgLTYuMjQ3NiwxLjEyMDQ5IC02Ljc5MDg3LDEuNjI5ODF6TTE5MS4yMzA3Nyw2MC44NDYxNXYxMzkuMDc2OTJjMCwxNC4zNjI2OCAtMTEuNzE0MjQsMjYuMDc2OTIgLTI2LjA3NjkyLDI2LjA3NjkyaC0xMDQuMzA3NjljLTE0LjM2MjY4LDAgLTI2LjA3NjkyLC0xMS43MTQyNCAtMjYuMDc2OTIsLTI2LjA3Njkydi0xMzkuMDc2OTJ6TTY5LjUzODQ2LDE5MS4yMzA3N2gxNy4zODQ2MnYtMTA0LjMwNzY5aC0xNy4zODQ2MnpNMTA0LjMwNzY5LDE5MS4yMzA3N2gxNy4zODQ2MnYtMTA0LjMwNzY5aC0xNy4zODQ2MnpNMTM5LjA3NjkyLDE5MS4yMzA3N2gxNy4zODQ2MnYtMTA0LjMwNzY5aC0xNy4zODQ2MnoiPjwvcGF0aD48L2c+PHBhdGggZD0iTTAsMjI2di0yMjZoMjI2djIyNnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PGcgZmlsbD0iIzQyNWU1NiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik05NS42MTUzOCwtMC4yNzE2M2MtNy4yNjYyMiwwIC0xNC4zOTY2MywxLjQyNjA5IC0xOS41NTc2OSw2LjUxOTIzYy01LjE2MTA2LDUuMDkzMTUgLTYuNzkwODcsMTIuMzI1NDIgLTYuNzkwODcsMTkuODI5MzNoLTM0LjQ5NzZjLTQuNzg3NTYsMCAtOC42OTIzMSwzLjkwNDc1IC04LjY5MjMxLDguNjkyMzFoLTguNjkyMzF2MTcuMzg0NjJoMTkxLjIzMDc3di0xNy4zODQ2MmgtOC42OTIzMWMwLC00Ljc4NzU2IC0zLjkwNDc1LC04LjY5MjMxIC04LjY5MjMxLC04LjY5MjMxaC0zNC40OTc2YzAsLTcuNTAzOSAtMS42Mjk4MSwtMTQuNzM2MTcgLTYuNzkwODcsLTE5LjgyOTMzYy01LjE2MTA2LC01LjA5MzE0IC0xMi4yOTE0NiwtNi41MTkyMyAtMTkuNTU3NjksLTYuNTE5MjN6TTk1LjYxNTM4LDE3LjY1NjI1aDM0Ljc2OTIzYzQuNzUzNjEsMCA2LjI0NzYsMS4xMjA0OSA2Ljc5MDg3LDEuNjI5ODFjMC41NDMyNywwLjUwOTMyIDEuNjI5ODEsMS45MzUzOSAxLjYyOTgxLDYuNzkwODdoLTUxLjYxMDU4YzAsLTQuODU1NDcgMS4wODY1NCwtNi4yODE1NSAxLjYyOTgxLC02Ljc5MDg3YzAuNTQzMjcsLTAuNTA5MzIgMi4wMzcyNiwtMS42Mjk4MSA2Ljc5MDg3LC0xLjYyOTgxek0zNC43NjkyMyw2MC44NDYxNXYxMzkuMDc2OTJjMCwxNC4zNjI2OCAxMS43MTQyNCwyNi4wNzY5MiAyNi4wNzY5MiwyNi4wNzY5MmgxMDQuMzA3NjljMTQuMzYyNjgsMCAyNi4wNzY5MiwtMTEuNzE0MjQgMjYuMDc2OTIsLTI2LjA3Njkydi0xMzkuMDc2OTJ6TTY5LjUzODQ2LDg2LjkyMzA4aDE3LjM4NDYydjEwNC4zMDc2OWgtMTcuMzg0NjJ6TTEwNC4zMDc2OSw4Ni45MjMwOGgxNy4zODQ2MnYxMDQuMzA3NjloLTE3LjM4NDYyek0xMzkuMDc2OTIsODYuOTIzMDhoMTcuMzg0NjJ2MTA0LjMwNzY5aC0xNy4zODQ2MnoiPjwvcGF0aD48L2c+PHBhdGggZD0iIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciI+PC9wYXRoPjwvZz48L2c+PC9zdmc+';

const ab = document.querySelector('.addbutton');
// console.log(ab);
ab.addEventListener('click', function(e){
  e.preventDefault();
  const ai = document.querySelector('.addinput').value;

  // const square = document.createElement('input[type=checkbox]');
  const li = document.createElement('li');
  const content = document.createElement('span');
  // const img = document.createElement('img[src=imglink');

   // add classes
   content.classList.add('name');
  //  square.classList.add('checkbox');

   content.textContent = ai;

   // append to DOM
    losUl.appendChild(li);
    li.appendChild(content);
  //   li.appendChild(deleteBtn);
  //   list.appendChild(li);
  // });
});

// const ai = document.querySelector('.addinput').value;
// console.log(ai);
