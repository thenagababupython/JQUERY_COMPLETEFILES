/*  USE BS Cards
    1) Show + Hide => Toggle
    2) FadeIn + FadeOut => FadeToggle
    3) slideUp + SlideDown => SlideToggle
    4) animate
    5) Stop
 */


// Hide , Show
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-1').hide(500);
    }
    else{
        $(this).text('HIDE');
        $('#card-1').show(500);
    }
});

// Hide , Show => Toggle
$('#btn-2').click(function() {
    $('#card-2').toggle(500);
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
});



// FadeIn , FadeOut
$('#btn-3').click(function() {
    if($(this).text() === 'FadeIn'){
        $(this).text('FadeOut');
        $('#card-3').fadeIn(500);
    }
    else{
        $(this).text('FadeIn');
        $('#card-3').fadeOut(500);
    }
});

// Hide , Show => Toggle
$('#btn-4').click(function() {
    $('#card-4').fadeToggle(500);
    ($(this).text() === ' FadeIn') ? $(this).text('') : $(this).text('FadeOut');
});


<!-- slideUp + SlideDown -->

$('#btn-5').click(function() {
    if($(this).text() === 'slideUp'){
        $(this).text('SlideDown');
        $('#card-5').slideUp(500);
    }
    else{
        $(this).text('slideUp');
        $('#card-5').slideDown(500);
    }
});
<!-- slideUp + SlideDown => SlideToggle-->


$('#btn-6').click(function() {
    $('#card-6').slideToggle(500);
    ($(this).text() === 'slideUp') ? $(this).text('') : $(this).text('SlideDown');
});


