$(document).ready(function() {

    //quando clicco sul pulsante prev richiamo
    //una funzione che mi scorre le immagini

    $('.prev').click(function(){
        prevImage();
    });

    //quando clicco sul pulsante next richiamo
    //una funzione che mi scorre in avanti
    $('.next').click(function(){
        nextImage();
    });

});


//** FUNZIONI **//

function nextImage(){
    //memorizzo in una var l'immagine attiva
    var activeImage = $('.images img.active');

    var cerchioAttivo = $('.nav i.active');

    //togliere la classe
    activeImage.removeClass('active');
    cerchioAttivo.removeClass('active');

    if (activeImage.hasClass('last') == true) {
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        //mette la classe al successivo
        activeImage.next().addClass('active');
        cerchioAttivo.next().addClass('active');
    }
}

function prevImage(){
    var activeImage = $('.images img.active');
    var cerchioAttivo = $('.nav i.active');

    activeImage.removeClass('active');
    cerchioAttivo.removeClass('active');

    if(activeImage.hasClass('first') == true){
        $('.images img.last').addClass('active');
        $('.nav i.last').addClass('active');
    } else {
        activeImage.prev().addClass('active');
        cerchioAttivo.prev().addClass('active');
    }
}
