$(document).ready(function(){
    $('#show').click(function(){
//        $('#animacja').fadeIn('slow');
        $('#animacja').slideDown('slow');
    })
    
    $('#hide').click(function(){
//    $('#animacja').fadeOut('slow');
//    $('#animacja').slideUp('slow');
    $('#animacja').animate({
        "width":"50%",
        "height": "100px"
    },1000, function(){
        $(this).animate({
            "width": "100%",
            "height":"300px"
        })
    })


        
    })
})