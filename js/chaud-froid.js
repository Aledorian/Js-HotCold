var x = Math.ceil( 100 * Math.random() );

console.log("random = " + x);

function jeu(){
  var choix = document.getElementById('input').value;
  var distance = Math.abs(x - choix);

  if (distance == 0) {
    alert("BRAVOOOOOOO !!!!!!");
  }
  else if (distance < 10) {
    document.getElementById('indice').innerHTML = "chaud";
  }
  else {
    document.getElementById('indice').innerHTML = "froid";
  }
}
