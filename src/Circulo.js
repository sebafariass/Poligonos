import Poligono from './Poligono' //import de poligono.js

const circulo = {
  area() {    
    
    let radio = Poligono.valores()[4] //asignar valor let 
    
    return Math.pow(radio, 2) * Math.PI
  },
  perimetro() {

    let radio = Poligono.valores()[4] //asignar valor let
    return Math.PI * 2 * radio
  }
}

export default circulo // exportando -modulo