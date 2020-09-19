$(document).ready(function(){
    var nav=$('nav');
    
    $(window).bind("scroll",function(){
        if($(window).scrollTop() < 11.2){
            nav.addClass('nav');
            nav.removeClass('nav_scroll');
        }else{
            nav.removeClass('nav');
            nav.addClass('nav_scroll');
        }
    })
})