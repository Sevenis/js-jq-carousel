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

    $('.nav i').click(function(){
        //trovo la posizione del pallino cliccato
        var posizione = $(this).index();
        //a tutte le immagini img della classe images rimuovo
        //la classe "active"
        $('.images img').removeClass('active');
        //aggiungo la classe active all'immagine che ha
        //l'indice salvato in posizione
        $('img').eq(posizione).addClass('active');
        //rimuovo la classe active a tutti i pallini
        $('.nav i').removeClass('active');
        //aggiungo la classe active al pallino cliccato
        $('.nav i').eq(posizione).addClass('active');
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
