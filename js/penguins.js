$(document).ready(function() {

    $('#mound1').click(function () {
        $('#mound1').addClass('penguin1-reveal');
    });
    $('#mound2').click(function () {
        $('#mound2').addClass('penguin2-reveal');
    });
    $('#mound3').click(function () {
        $('#mound3').addClass('penguin3-reveal');
    });
    $('#mound4').click(function () {
        $('#mound4').addClass('penguin4-reveal');
    });
    $('#mound5').click(function () {
        $('#mound5').addClass('penguin5-reveal');
    });
    $('#mound6').click(function () {
        $('#mound6').addClass('penguin6-reveal');
    });
    $('#mound7').click(function () {
        $('#mound7').addClass('penguin7-reveal');
    });
    $('#mound8').click(function () {
        $('#mound8').addClass('penguin8-reveal');
    });
    $("#mound9").click(function () {
        $('#mound9').addClass('yeti-reveal');

    });
});

function reset() {
    setTimeout(function () {
        if (window.confirm('Rawrrr!!!\n\nPlay again?')) {
            if ($('#mound9').hasClass('yeti-reveal')) {
                $('#mound9').removeClass('yeti-reveal');
            }
            if ($('#mound1').hasClass('penguin1-reveal')) {
                $('#mound1').removeClass('penguin1-reveal');
            }
            if ($('#mound2').hasClass('penguin2-reveal')) {
                $('#mound2').removeClass('penguin2-reveal');
            }
            if ($('#mound3').hasClass('penguin3-reveal')) {
                $('#mound3').removeClass('penguin3-reveal');
            }
            if ($('#mound4').hasClass('penguin4-reveal')) {
                $('#mound4').removeClass('penguin4-reveal');
            }
            if ($('#mound5').hasClass('penguin5-reveal')) {
                $('#mound5').removeClass('penguin5-reveal');
            }
            if ($('#mound6').hasClass('penguin6-reveal')) {
                $('#mound6').removeClass('penguin6-reveal');
            }
            if ($('#mound7').hasClass('penguin7-reveal')) {
                $('#mound7').removeClass('penguin7-reveal');
            }
            if ($('#mound8').hasClass('penguin8-reveal')) {
                $('#mound8').removeClass('penguin8-reveal');
            }
        }
    }, 500);
}
