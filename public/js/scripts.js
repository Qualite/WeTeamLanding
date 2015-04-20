$(document).ready(function() {
    $('#send').click(function(e) {
        e.preventDefault();

        $('form').toggle();
    });

    $('#form').submit(function(e) {
        e.preventDefault();

        var data = {
            "name": $('input[name=name]').val(),
            "email": $('input[name=email]').val(),
            "phone": $('input[name=phone]').val(),
            "comment": $('textarea[name=comment]').val()
        };

        $.ajax({
            url: '/contact',
            type: 'POST',
            dataType: 'json',
            data: data,
            beforeSend: function() {
                //$('.form-over').fadeIn();
            },
            success: function( data ) {
                if(data.status === 'ok') {
                    $('.form-container').hide();
                    $('.success').text('Спасибо, ' + $('.name').val() +'! Ваша заявка отправлена!');
                    $('.success').show();
                }
            },
            error: function( xhr, err ) {
                console.log(err);
            }
        });
    });
});
