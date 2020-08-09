import Poligono from './Poligono' //import de poligono.js

const cuadrado = {
    area() {
        let lado = Poligono.valores()[1]  //valores let

        return Math.pow(lado, 2)
    },
    perimetro() {
        let lado = Poligono.valores()[1]  //valores let

        return lado * 4
    }
}

export default cuadrado //export - modulo