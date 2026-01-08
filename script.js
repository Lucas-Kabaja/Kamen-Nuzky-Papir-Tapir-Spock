document.addEventListener('DOMContentLoaded', () => {

  let button = document.getElementById('hraj');

  button.onclick = () => {
    do {
      vitez1.innerHTML = "";
      vitez2.innerHTML = "";

      let hrac1 = Math.floor(Math.random() * 5);
      let hrac2 = Math.floor(Math.random() * 5);

      obr1.src = hrac1 + ".png";
      obr2.src = hrac2 + ".png";

      let j1 = jmeno1.value;
      let j2 = jmeno2.value;

      if (hrac1 === hrac2) {
        remiza = true;
      }
      else if (
        (hrac1 === 0 && (hrac2 === 1 || hrac2 === 3)) ||
        (hrac1 === 1 && (hrac2 === 2 || hrac2 === 3)) ||
        (hrac1 === 2 && (hrac2 === 0 || hrac2 === 4)) ||
        (hrac1 === 3 && (hrac2 === 2 || hrac2 === 4)) ||
        (hrac1 === 4 && (hrac2 === 0 || hrac2 === 1))
      ) {
        vitez1.innerHTML = j1 + "<br>vyhrál";
        remiza = false;
      }
      else {
        vitez2.innerHTML = j2 + "<br>vyhrál";
        remiza = false;
      }

    } while (remiza);
  };
});

function barva1(barva) {
  jmeno1.style.color = barva;
}

function barva2(barva) {
  jmeno2.style.color = barva;
}
