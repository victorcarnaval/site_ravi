
document.addEventListener('DOMContentLoaded', function () {

  const sidenavElem = document.querySelectorAll('.sidenav');
  const sidenavInstance = M.Sidenav.init(sidenavElem);

  const parallaxElem = document.querySelectorAll('.parallax');
  const parallaxInstance = M.Parallax.init(parallaxElem);

  // CountDown
  const countDownDate = new Date('Nov 9, 2019 17:30:00 GMT-0300').getTime();

  const autoCountDown = setInterval(function () {

    const now = new Date().getTime(),
      distance = countDownDate - now,
      countDown = {};

    countDown.dia = Math.floor(distance / (1000 * 60 * 60 * 24));
    countDown.hora = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countDown.minuto = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    countDown.segundo = Math.floor((distance % (1000 * 60)) / 1000);

    printCountDown(countDown);

    if (distance < 0) {
      clearInterval(autoCountDown);
    }
  }, 1000);

  function printCountDown(countDown) {
    const items = document.querySelectorAll('.countdown > li');

    let index = 0;
    for (property in countDown) {
      const value = countDown[property];
      const li = items[index];
      const num = li.childNodes[0];
      const lbl = li.childNodes[1];

      num.textContent = value.toString().length === 1 ? '0' + value.toString() : value;
      lbl.textContent = (value > 1) ? property + 's' : property;

      index++;
    }
  }

  function beautyNumber(number, label) {
    let num = number.toString();

    if (num.length === 1) {
      num = '0' + num;
    }

    if (parseInt(num) > 1 || parseInt(num) === 0) {
      label = label + 's'; // Ex.: dia para dias
    }

    return { number: num, label: label };
  }
});