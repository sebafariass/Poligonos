import Poligono from './Poligono' //import de poligono.js

const decagono = {
  area() {
   
    let lado = Poligono.valores()[1]  //valores let
    let apotema = Poligono.valores()[3]

    return (lado * 10) * apotema /2
  },
  perimetro() {
    let lado = Poligono.valores()[1]  //valores let

    return lado * 10
  }
}

export default decagono //export - modulo
