
document.addEventListener('DOMContentLoaded', function () {

  var sidenavElem = document.querySelectorAll('.sidenav');
  var sidenavInstance = M.Sidenav.init(sidenavElem);

  var parallaxElem = document.querySelectorAll('.parallax');
  var parallaxInstance = M.Parallax.init(parallaxElem);

  var materialboxElem = document.querySelectorAll('.materialboxed');
  var materialboxInstance = M.Materialbox.init(materialboxElem);

  var carouselElem = document.querySelectorAll('.carousel');
  var carouselInstance = M.Carousel.init(carouselElem);

  // Countdown
  var eventDate = new Date('Nov 9, 2019 17:30:00 GMT-0300').getTime();

  var timer = setInterval(function () {

    var now = new Date().getTime();
    var distance = eventDate - now;
    var labelPortuguese = { days: 'dia', hours: 'hora', mins: 'minuto', secs: 'segundo' };

    var time = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((distance % (1000 * 60)) / 1000)
    };

    var parentElems = {
      days: document.getElementsByClassName('countdown-days')[0],
      hours: document.getElementsByClassName('countdown-hours')[0],
      mins: document.getElementsByClassName('countdown-minutes')[0],
      secs: document.getElementsByClassName('countdown-seconds')[0],
    };

    for (var key in parentElems) {
      var value = parentElems[key].getElementsByTagName('p')[0];
      var label = parentElems[key].getElementsByTagName('span')[0];
      value.innerText = ('0' + time[key]).slice(-2);
      label.innerText = (time[key] < 2) ? labelPortuguese[key] : labelPortuguese[key] + 's';
    }

    if (distance <= 0) {
      clearInterval(timer);
    }
  }, 1000);

});