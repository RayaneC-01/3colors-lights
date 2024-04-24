function changerFeu() {
  // Changer le feu en vert
  allumerVert();
  setTimeout(function () {
    // Changer le feu en jaune
    eteindreVert();
    allumerJaune();
    setTimeout(function () {
      // Changer le feu en rouge
      eteindreJaune();
      allumerRouge();
    }, 2000); // Délai de 2 secondes pour le feu jaune
  }, 5000); // Délai de 5 secondes pour le feu vert
}

function allumerVert() {
  // Sélectionner l'élément représentant le feu vert
  let feuVert = document.querySelector('.green');
  // Changer la couleur du feu vert en "allumé"
  feuVert.style.backgroundColor = 'green';
}

function eteindreVert() {
  // Code pour éteindre le feu vert
  let feuVert = document.querySelector('.green');
  feuVert.style.backgroundColor = 'transparent';
}

function allumerJaune() {
  // Code pour allumer le feu jaune !
  let feuJaune = document.querySelector('.yellow');
  // Changer la couleur du feu vert en "allumé"
  feuJaune.style.backgroundColor = 'yellow';
}

function eteindreJaune() {
  // Code pour éteindre le feu jaune
  let feuJaune = document.querySelector('.yellow');
  feuJaune.style.backgroundColor = 'transparent';
}

function allumerRouge() {
  // Code pour allumer le feu rouge
  let feuRouge = document.querySelector('.red');
  // Changer la couleur du feu vert en "allumé"
  feuRouge.style.backgroundColor = 'red';
}

changerFeu(); // Commencer le cycle des feux
