$(function() {

    /* Main Slider */
    const slider = $('.main-slider');
    const images = slider.find('.slider-images img');
    const dots = slider.find('.slider-dot-navigation .dot');

    function mainSlider() {        
        images.not(images.first()).css('display', 'none');
        
        dots.each(function(index) {
            $(this).click(changeSlider(images, dots, index));
        });
    }

    function changeSlider(images, dots, index) {
        images.not(images.get(index)).fadeOut(700);
        $(images.get(index)).fadeIn(700);

        dots.removeClass('selected');
        $(dots.get(index)).addClass('selected');
    }

    function autoSlider() {
        const dot = slider.find('.slider-dot-navigation .dot.selected');

        let index = (parseInt(dot.index()) === 2) ? 0 : parseInt(dot.index() + 1);
        changeSlider(images, dots, index);        
    }
    
    let interval = setInterval(autoSlider, 10000);
    //mainSlider();
    
});