$(document).ready(function(){
   $('.menu-toggle').click(function(){
       
    $('.menu-side').toggleClass('menu-open'); 
       
       
   });
    
    $('.menu-close').click(function(){
        
       $('.menu-side').removeClass('menu-open'); 
        
    });
    
    
    
});