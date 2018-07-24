$(document).ready(function(){
//    wejdz do kontenera, poszukaj ,a, i zmien kolor na zielony:
//    $('.container').find('a').css('color', 'green');
    
//    WAZNE:najpietw index potem element!!!! odwrotnie niz w js!!!!!!!
     $('.container').find('a').each(function(index, element){
         console.log(index + ' ' + element);
     })
    
});