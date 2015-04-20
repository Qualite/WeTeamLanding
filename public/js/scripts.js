$(document).ready(function() {
    var inside, open;

    $('#send').click(function(e) {
        e.preventDefault();

        $('form').toggle();
        open = 1;
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
                    $('.-form').hide();
                    $('.-result').show();

                    setTimeout(function() {
                        $('#form').hide();
                    }, 2000);
                }
            },
            error: function( xhr, err ) {
                console.log(err);
            }
        });
    });
});


