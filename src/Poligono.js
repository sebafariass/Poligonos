let Poligono = {
    getValues: function () {
        let base = parseInt(document.getElementById('base').value) || null
        let lado = parseInt(document.getElementById('lado').value) || null
        let altura = parseInt(document.getElementById('altura').value) || null
        let apotema = parseInt(document.getElementById('apotema').value) || null
        let radio = parseInt(document.getElementById('radio').value) || null
        return [base, lado, altura, apotema, radio] 
        //return[ 0,   1,      2,      3       ,4]
    },

    
//dame resultados a través de ".valores"
    valores: function () {
        return this.getValues()
    }
}

export default Poligono //export - modulo