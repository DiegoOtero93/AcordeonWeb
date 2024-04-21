

const bloque__indice = document.querySelectorAll('.bloque__indice')
const h2             = document.querySelectorAll('.h2')


//cuando hagamos click en h2,
       //quitar la clase activo de todos los bloques
       // añadir la clase activo al bloque con h2

//recorremos todos los h2
h2.forEach(( cadaH2 , i )=>{


  
  //asignamos un click a cada h2
  h2[i].addEventListener('click',()=>{


    //que recorra todos los bloques
 bloque__indice.forEach((cadabloque , i) =>{


      //quitar la clase activo de todos los bloques
      bloque__indice[i].classList.remove('activo')
    })


    // y añadimos la clase activo al bloque, la posiscion es la misma que la del h2
    bloque__indice[i].classList.add('activo')
  })

})

  window.onload = handlerEvents;  

  