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
})
    