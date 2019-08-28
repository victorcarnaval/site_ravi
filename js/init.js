
document.addEventListener('DOMContentLoaded', function () {

  var sidenavElem = document.querySelectorAll('.sidenav');
  var sidenavInstance = M.Sidenav.init(sidenavElem);

  var parallaxElem = document.querySelectorAll('.parallax');
  var parallaxInstance = M.Parallax.init(parallaxElem);

  // Countdown
  var eventDate = new Date('Nov 9, 2019 17:30:00 GMT-0300').getTime();

  var timer = setInterval(function () {

    let now = new Date().getTime();
    let distance = eventDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer-days').innerHTML = ('0' + days).slice(-2) + '&nbsp;<span>dia(s)</span>';
    document.getElementById('timer-hours').innerHTML = ('0' + hours).slice(-2) + '&nbsp;<span>hora(s)</span>';
    document.getElementById('timer-mins').innerHTML = ('0' + mins).slice(-2) + '&nbsp;<span>minuto(s)</span>';
    document.getElementById('timer-secs').innerHTML = ('0' + secs).slice(-2) + '&nbsp;<span>segundo(s)</span>';

    if (distance <= 0) {
      clearInterval(timer);
    }
  }, 1000);

});