let intervalId;
let dureeVert = 5000; // Durée par défaut du feu vert en millisecondes
let dureeOrange = 2000; // Durée par défaut du feu orange en millisecondes
let dureeRouge = 5000; // Durée par défaut du feu rouge en millisecondes

function demarrer() {
  intervalId = setInterval(changerFeu, dureeVert + dureeOrange + dureeRouge);
}

function arreter() {
  clearInterval(intervalId);
  eteindreVert();
  eteindreOrange();
  eteindreRouge();
}

function changerFeu() {
  allumerVert();
  setTimeout(function () {
    eteindreVert();
    allumerOrange();
    setTimeout(function () {
      eteindreOrange();
      allumerRouge();
      setTimeout(function () {
        eteindreRouge();
      }, dureeRouge);
    }, dureeOrange);
  }, dureeVert);
}

changerFeu(); // Commencer le cycle des feux

function allumerVert() {
  let feuVert = document.querySelector('.green');
  feuVert.style.backgroundColor = 'green';
}

function eteindreVert() {
  let feuVert = document.querySelector('.green');
  feuVert.style.backgroundColor = 'transparent';
}

function allumerOrange() {
  let feuOrange = document.querySelector('.yellow');
  feuOrange.style.backgroundColor = 'orange';
}

function eteindreOrange() {
  let feuOrange = document.querySelector('.yellow');
  feuOrange.style.backgroundColor = 'transparent';
}

function allumerRouge() {
  let feuRouge = document.querySelector('.red');
  feuRouge.style.backgroundColor = 'red';
}

function eteindreRouge() {
  let feuRouge = document.querySelector('.red');
  feuRouge.style.backgroundColor = 'transparent';
}
