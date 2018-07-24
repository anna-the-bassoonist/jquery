$(document).ready(function(){
//    $('.container a').click(function(e){
//        e.preventDefault();
//        $(this).css('color', 'red');
    //    })
    
//    to samo co wyzej pod inna postacia: przy kliknieciu linki zmieniaja kolor na czerwony
    $('.container a').on({
        "click": function(e){
            e.preventDefault();
            $(this).css('color', 'red');
        },
        
//        przy najechaniu myszka linki zmieniaja kolor na zielony
        "mouseover":function(){
            $(this).css('color', 'green');
        },
        
        //przy wyjechaniu myszka obok ,linki zmieniaja kolor na zielony
        "mouseout": function(){
            $(this).css('color', 'blue');
        }
    })

});

//obsluzenie scrolla
//scrollTop zwraca ilosc zescrolowanych px
//efekt parallax:
$(window).scroll(function(){
    var scrolled = $(this).scrollTop();
//    nastepnie zeby zwolnic:
    var result = -(scrolled / 2);
    $('#background').css('background-position', result + 'px 0px');
})





