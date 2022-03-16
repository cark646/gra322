$(document).ready(function(){
    
    $('nav').hide();

    $('.menu-button').click(function(){
        $('nav').slideToggle();
    });
});