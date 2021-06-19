$(document).ready(function(){
   
   /* Primer Ejercicio   */
    $("#clickeame").click(function(){
        $("#caja").css({
            "background-color" : "green",
            "color": "white",
            "font-size": "4em"
        });
    });
/* 2do Ejercicio */

        $("button").click(function(){
            $( "ul" ).hide( "slow", function(){
                
            });
            
            $("button").dblclick(function(){
                $( "ul" ).show( "slow");
            });
            
           
        });



/* 3er ejercicio */
         $(".box1").mouseover(function(){
              
              $( this ).css({
                  "background-color" : "red", 
              });
            });
            $(".box1").mouseleave(function(){
              
                $( this ).css({
                    "background-color" : "#cbd5df", 
                });
              });

              $(".box2").mouseover(function(){
              
                $( this ).css({
                    "background-color" : "green", 
                });
              });
              $(".box2").mouseleave(function(){
                
                  $( this ).css({
                      "background-color" : "#cbd5df", 
                  });
                });

                $(".box3").mouseover(function(){
              
                    $( this ).css({
                        "background-color" : "pink", 
                        "color" : "red",
                    });
                  });
                  $(".box3").mouseleave(function(){
                    
                      $( this ).css({
                          "background-color" : "#cbd5df", 
                          "color" : "white",
                      });
                    });
    
});
    