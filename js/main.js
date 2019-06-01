$(function() {

    startSlider = () => {
        const slider = $('#slider');
        const images = slider.find('img');

        let i = 0;
        let interval = setInterval(() => {
            let next = (++i % images.length);
            $(images.get(next - 1)).fadeOut(1000);
            $(images.get(next)).fadeIn(1000);
        }, 7000);
    };

    startSlider();
});