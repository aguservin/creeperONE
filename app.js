// CREEPER
var pantalla = document.getElementById("creeper");
var pincel = pantalla.getContext("2d");
    //cabeza
pincel.fillStyle = 'pink';
pincel.fillRect(200, 50, 350 ,300);
    //ojos
pincel.fillStyle = 'black';
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);
    //nariz
pincel.fillRect(340, 200, 70, 100);
     //boca
pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110);

// FLORES
// var pantalla = document.getElementById("flores");
//     var pincel = pantalla.getContext("2d");
//     pincel.fillStyle = "pink";
//     pincel.fillRect(0, 0, 600, 400);

//  function dibujarCirculo(x, y, radio, color) {
// pincel.fillStyle = color;
// pincel.beginPath();
// pincel.arc(x, y, radio, 0, 2*3.14);
// pincel.fill();
//     }
//     function dibujar(x,y) {
//     dibujarCirculo(x, y+20, 10, "black");
//     dibujarCirculo(x, y-20, 10, "black");
//     dibujarCirculo(x, y, 10, "red");
//     dibujarCirculo(x-20, y, 10, "black");
//     dibujarCirculo(x+20, y, 10, "black");
//   }
//  dibujar(100,200);
//  dibujar(200,300);
//  dibujar(400,100);
//  dibujar(500,200);
//  dibujar(300,200);
//  dibujar(200,100);
//  dibujar(300,100);
//  dibujar(500,200);
//  dibujar(400,300);
//  dibujar(300,300);