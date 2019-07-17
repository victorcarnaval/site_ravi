$(function () {

    //Sticky Navbar
    /*window.onscroll = stickyNavbar;
    const navbar = document.getElementById('main-navbar');
    const navbarOffset = navbar.offsetTop;

    function stickyNavbar() {
        if (window.pageYOffset >= navbarOffset) {
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('navbar-sticky');
        }
    }*/

    const slider = function () {
        const $slider = $('#main-slider');
        const $images = $slider.find('.slider-images img');       
        const $dots = $slider.find('.slider-dot-navigation > .dot');

        //Mostrando apenas a primeira imagem do slider
        $images.not($images.first()).css('display', 'none');

        //Adicionando o evento de clique no menu do slider
        $dots.click(function () {
            const $dot = $(this);
            const $image = $($images.get($dot.index()));

            if ($image.css('display') === 'none') {
                $images.filter(':visible').fadeOut(600);
                $image.fadeIn(600);
                
                if (!$dot.hasClass('selected')) {
                    $dots.filter('.selected').removeClass('selected');
                    $dot.addClass('selected');
                }
            }
        });
    };

    //Inicialização
    slider();

});