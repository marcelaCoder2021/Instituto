//animacionPostIt  
$(()=>{  //funcion ready
  $(".postIt").on("click",function(){//funcion on
  $(".postIt img").addClass("animacionPostIt")//agrego la clase 
    $(".animacionPostIt").animate({ //animacion
      left:'250px',
      height:'+=50px',
      width:'+=50px',
    },"slow");
    $(".animacionPostIt").animate({ //animacion
      right:'250px',
      height:'-=40px',
      width:'-=40px',
    },"slow");
    e.preventDefault();
  });   
});
/////////////////////////
/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
$(()=>{     
  $('#submit').on("click",function(){        
      /*Captura de datos escrito en los inputs*/        
      let nom = document.getElementById("nombre").value;
      let mail = document.getElementById("email").value;
      /*Guardando los datos en el LocalStorage*/
      localStorage.setItem("nombre", nom);
      localStorage.setItem("email", mail);
      /*Limpiando los campos o inputs*/
      document.getElementById("nombre").value = "";
      document.getElementById("email").value = "";
      /*Obtener datos almacenados*/
      let nombre = localStorage.getItem("nombre");
      let email = localStorage.getItem("email");
      /*Mostrar datos almacenados*/
      document.getElementById("nombre").innerHTML = nombre;
      document.getElementById("email").innerHTML = email; 
      alert ("Bienvenida/o " + nombre)

      //mandando info a API
      
      $.ajax({
        type: "POST",
          url:'https://jsonplaceholder.typicode.com/posts',
        data:{
        nombre: nombre,
        email: email
      },
      success: function (respuesta){
        console.log(respuesta)
      
    }
});
});
})