$(document).ready(function(){
 
    
    $('.galeriaProductos').click(function(e){
            var img = e.target.name;
            var num = parseInt(img);
            img=num.toString();
            var modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><img src="Imagenes/FotosProductosOptimizadas/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
           $('body').append(modal); 
           




         /*
                $('.modal_anterior').click(function(){

                num=num-1;
                img=num.toString();
                modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><div name="'+ img +'" id="modal_anterior" class="modal_anterior" >&#60;</div><img src="Imagenes/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
               $('#modal').remove();
                $('body').append(modal);
                    
                });
            
           */     
                






        $('#modal__boton').click(function(){
           $('#modal').remove();
        });
        $('#pantalla_modal').click(function(){
             $('#modal').remove();
        });

    });
    $('.galeriaabaceria').click(function(e){
            var img = e.target.name;
            var num = parseInt(img);
            img=num.toString();
            var modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><img src="Imagenes/FotosAbaceriaOptimizadas/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
           $('body').append(modal); 
           




         /*
                $('.modal_anterior').click(function(){

                num=num-1;
                img=num.toString();
                modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><div name="'+ img +'" id="modal_anterior" class="modal_anterior" >&#60;</div><img src="Imagenes/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
               $('#modal').remove();
                $('body').append(modal);
                    
                });
            
           */     
                






        $('#modal__boton').click(function(){
           $('#modal').remove();
        });
        $('#pantalla_modal').click(function(){
             $('#modal').remove();
        });

    });
    $('.galeriaSocial').click(function(e){
            var img = e.target.name;
            var num = parseInt(img);
            img=num.toString();
            var modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><img src="Imagenes/FotosSocialesOptimizadas/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
           $('body').append(modal); 
           




         /*
                $('.modal_anterior').click(function(){

                num=num-1;
                img=num.toString();
                modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><div name="'+ img +'" id="modal_anterior" class="modal_anterior" >&#60;</div><img src="Imagenes/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
               $('#modal').remove();
                $('body').append(modal);
                    
                });
            
           */     
                






        $('#modal__boton').click(function(){
           $('#modal').remove();
        });
        $('#pantalla_modal').click(function(){
             $('#modal').remove();
        });

    });
    $('.galeriaNaturaleza').click(function(e){
            var img = e.target.name;
            var num = parseInt(img);
            img=num.toString();
            var modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><img src="Imagenes/FotosNaturalezaOptimizadas/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
           $('body').append(modal); 
           




         /*
                $('.modal_anterior').click(function(){

                num=num-1;
                img=num.toString();
                modal= '<div class="modal" id="modal"><div class="pantalla_modal" id="pantalla_modal"></div><div name="'+ img +'" id="modal_anterior" class="modal_anterior" >&#60;</div><img src="Imagenes/Foto' + img + '.jpg" class="modal__img"><div class="modal__boton" id="modal__boton">X</div></div>';
               $('#modal').remove();
                $('body').append(modal);
                    
                });
            
           */     
                






        $('#modal__boton').click(function(){
           $('#modal').remove();
        });
        $('#pantalla_modal').click(function(){
             $('#modal').remove();
        });

    });
    
});
    

