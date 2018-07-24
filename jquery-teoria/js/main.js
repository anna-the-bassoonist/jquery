$(document).ready(function(){
    console.log('123');
    console.log($('#first'));
    $('#first').css('background-color','red').hide(3000).show('slow');
    
//    jesli nie chcemy zeby funkcja nazwa dzialala, musimmy zakomentowac: nazwa(); 
    nazwa();
})

function nazwa() {
    console.log('wywolanie funkcji nazwa');
    
    
}