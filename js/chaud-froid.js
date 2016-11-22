console.log("début script JS");
var x = Math.ceil( 100 * Math.random() );

console.log("random = " + x);

function jeu(){
  var choix = document.getElementById('input').value;
  var distance = Math.abs(x - choix);
  console.log("nombre choisi = " + choix);
  if (distance == 0) {
    document.getElementById('indice').innerHTML = "BRAVOOOO !!! YOU WIN !";
    document.getElementById('indice').style.color = 'yellow';
    document.getElementById('input').style.animation="rotation 4s infinite alternate";
  }
  else if (distance < 10) {
    document.getElementById('indice').innerHTML = "CHAUD";
    document.getElementById('indice').style.color = "#FEA347";
  }
  else {
    document.getElementById('indice').innerHTML = "FROID";
    document.getElementById('indice').style.color = "#F0FFFF"
  }
}

function reset(){
    document.getElementById('input').style.animation = "stop 1s"
}
console.log("fin du script js");
