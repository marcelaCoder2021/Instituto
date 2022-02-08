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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Obtengo, almaceno, borro, recupero del localStoge y uso los datos ingresados en inputs
$(()=>{     
  $('#submit').on("click",function(){        
    //Capturo de datos de los inputs inputs      
    let nom = document.getElementById("nombre").value;
    let mail = document.getElementById("email").value;
    //Guardo los datos en el LocalStorage
    localStorage.setItem("nombre", nom);
    localStorage.setItem("email", mail);
    //Borro los inputs
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    //Obtengo datos guardados en localStorage*/
    let nombre = localStorage.getItem("nombre");
    let email = localStorage.getItem("email");
    //Muestro datos almacenados con Alert
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
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//obtengo materia, profesor, y horario seleccionados en el localStorage, los recupero y pido confirmación
$(()=>{     
  $('#btn').on("click",function(){        
    //Capturo de datos de los inputs inputs      
    let matElegida = document.getElementById("materia").value;//ok
    let profeElegido = document.getElementById("profeElegido").value;
    let horarioElegido = document.getElementById("horario").value;
    //Guardo los datos en el LocalStorage
    localStorage.setItem("Materia", matElegida);
    localStorage.setItem("Profe", profeElegido);
    localStorage.setItem("Horario", horarioElegido);
    //Obtengo datos guardados en localStorage*/
    let matElegidaStorage = localStorage.getItem("materia");
    let profeElegidoStorage = localStorage.getItem("profeElegido");
    let horarioElegidoStorage=localStorage.getItem("horario")
    //Muestro datos almacenados con Alert
    document.getElementById("materia").innerHTML = matElegidaStorage;
    document.getElementById("profeElegido").innerHTML = profeElegidoStorage; 
    document.getElementById("horario").innerHTML = horarioElegidoStorage; 
    
  });
  alert ("Hola " + nombre+
            "elegiste: materia " + matElegidaStorage+
            "con " +profeElegidoStorage +
            "el " +horarioElegidoStorage )
});