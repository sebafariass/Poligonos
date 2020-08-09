//   importar datos desde .js a index principal   \\

import circulo from './Circulo'
import triangulo from './Triangulo'
import cuadrado from './Cuadrado'
import rectangulo from './Rectangulo'
import octagono from './Octagono.js'
import decagono from './Decagono.js'

//  termino de importar  datos desde js a index principal \\

document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let poligono = e.target.value
  if (poligono === 'circulo') {
    console.log(`Perímetro del Círculo ===> ${circulo.perimetro()}`)
    console.log(`Área del Círculo ===> ${circulo.area()}`)
  }
  if (poligono === 'triangulo') { 
    console.log(`Perímetro del Triángulo ===> ${triangulo.perimetro()}`)
    console.log(`Área del Triángulo ===> ${triangulo.area()}`)
  }
  if (poligono === 'cuadrado') {
    console.log(`Perímetro del Cuadrado ===> ${cuadrado.perimetro()}`)
    console.log(`Área del Cuadrado ===> ${cuadrado.area()}`)
  }
  if (poligono === 'rectangulo') {
    console.log(`Perímetro del Rectángulo ===> ${rectangulo.perimetro()}`)
    console.log(`Área del Rectángulo ===> ${rectangulo.area()}`)
  }
  if (poligono === 'octagono') {
    console.log(`Perímetro del Octágono ===> ${octagono.perimetro()}`)
    console.log(`Área del Octágono ===> ${octagono.area()}`)
  }
  if (poligono === 'decagono') {
    console.log(`Perímetro del Decágono ===> ${decagono.perimetro()}`)
    console.log(`Área del Decágono ===> ${decagono.area()}`)
  }
})