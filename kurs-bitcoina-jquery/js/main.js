$(document).ready(function () {
//    robie funkcje zeby wstawic ja w interval:
    function pobierzBitcoin() {
//        wyciagam co jest na stronie:
        var currentBuyPrice = $('#buy-price').html();
        //        console.log(currentBuyPrice);
        var buyArrow = $('#buy-arrow');

        var currentSellPrice = $('#sell-price').html();
        var sellArrow = $('#sell-arrow');


        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            console.log(data);
//            za pomoca html uzupelniam miejse gdzie ma przyjsc nowa wartosc
            $('#buy-price').html(data.PLN.buy);
            $('#sell-price').html(data.PLN.sell);
            
            //1.if: jezeli ta ktora przyszla jest mniejsza od tego co bylo:kupno
            //2.else if: jezeli ta ktora przyszla jest wieksza od tego co bylo:kupno

            if (currentBuyPrice > data.PLN.buy) {
                buyArrow.removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
            } else if (currentBuyPrice < data.PLN.buy) {
                buyArrow.removeAttr('class').addClass('fas fa-arrow-up').css('color', 'green');
            } else {
                buyArrow.removeAttr('class').addClass('fas fa-minus-square').css('color', 'blue');

            }
            
             if (currentSellPrice > data.PLN.buy) {
                sellArrow.removeAttr('class').addClass('fas fa-arrow-down').css('color', 'red');
            } else if (currentSellPrice < data.PLN.buy) {
                sellArrow.removeAttr('class').addClass('fas fa-arrow-up').css('color', 'green');
            } else {
                sellArrow.removeAttr('class').addClass('fas fa-minus-square').css('color', 'blue');

            }


            console.log('odswiezono');
        });
        
        
    };
//    uzupelniam funkcje zeby bylo do czego porownac
    pobierzBitcoin();
//    ustawiam interval na ta funkcje
    var interval = setInterval(pobierzBitcoin, 5000);
    
//    za pomoca przyciskow: najpietw zeruje potem ustawiam nowy interval. bo domyslnie go ustawilismy na 5000 a chcemy zmienic na inny czas
    $('.control-button').click(function(){
        clearInterval(interval);
//        ustawiam zeby pobieral interval z value, dlatego ustawilismy value w buttonie
        interval = setInterval(pobierzBitcoin, $(this).val());
//        htmlem uzupelniam sekundy tekstem spod buttona
        $('#refresh').html($(this).html());
    })
    
    

})
