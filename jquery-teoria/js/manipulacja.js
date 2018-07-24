$(document).ready(function () {
    console.log($('.container p').text());
    //    wyswietlilo w konsoli teksty kazdego z paragrafow

    $('.container p').text('lorem ipsum');
    //    zmienilismy tekst we wszystkich paragrafach

    console.log($('.container p').html());
    //    wyciaga tekst tylko z pierwszego trafienie w selektor

    $('.container p').html('<span>zmieniono metoda.html()</span>');

    $('#dodaj').append('<p>Dodanie tresi metoda append()</p>');
    $('#dodaj').prepend('<p>Dodanie tresi metoda prepend()</p>');
    $('#dodaj').before('<p>Dodanie tresi metoda before()</p>');
    $('#dodaj').after('<p>Dodanie tresi metoda after()</p>');

    //    empty() usuwa wnetrze selektora
    $('#dodaj').empty();

    //    remove() usuwa caly selektor z potomkami
    $('#dodaj').remove();

    console.log($('.container p').css('color'));

    $('.container p').css({
        fontSize: '20px',
        color: 'red'
    })
    //    val() bez parametrow przyjmuje wartosc tylko pierwszego trafienia selektora
    console.log($('form input').val());

    //    val() z argumentami ustawia wartosc wszystkim trafieniom selektora
    $('form input').val('lorem');

    //    dodaje wszystkim paragrafom klasy
    $('.container p').addClass('paragraf paragraf1 paragraf2');

    //    usuwa wszystkim paragrafom klase paragraf:
    $('.container p').removeClass('paragraf');
    
    


});











