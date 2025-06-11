$(document).ready(function () {

    $('#carrossel-img').slick({
                autoplay: true,
            });

            $('.menu-hamburguer').click(function () {
                $('nav').slideToggle();
            });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira um nome.',
            email: 'Por favor, insira um email.',
            telefone: 'Por favor, insira um telefone válido.'
        },
        submitHandler: function (form) {
            alert("Em breve entraremos em contato, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha os campos para prosseguir!");
        }
    });

    $('.lista-cards button').click(function (){
        const destino = $('#contat');
        
        const nomeCard = $(this).parent().find('h2').text();
        $('#card-interesse').val(nomeCard);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
        })
    })
