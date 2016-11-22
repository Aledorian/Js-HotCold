var x = Math.floor( 100 * Math.random() );

console.log("random = " + x);

function jeu(){
  while (choix != x) {
    var choix = prompt("Nombre en 1 et 100")
    var result = Math.sign(x - choix)

    if (result == -1) {
      var resu = choix - x
    }
    else {
      resu = x - choix
    }

    if (resu < 25) {
  	  alert("chaud")
    }
    else {
      alert("froid")
    }
  }
}
