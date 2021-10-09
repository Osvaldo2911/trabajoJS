function curp() {
    var nombre = document.getElementById("nombre");
    var apellido1 = document.getElementById("apellido1");
    var apellido2 = document.getElementById("apellido2");
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var año = document.getElementById("año");
    var res = document.getElementById("res");
    var sexo = document.getElementById("sexo");
    var estado = document.getElementById("estado");
    var curp = apellido1.value.slice(0, 2) + apellido2.value.slice(0, 1) + nombre.value.slice(0, 1) + año.value.slice(2, 4)
        + mes.value.slice(0, 2) + dia.value.slice(0, 2) + sexo.value.slice(0, 1) + estado.value.slice(0, 2)
        + apellido1.value.slice(2, 3) + apellido2.value.slice(2, 3) + Math.round(Math.random() * 9)
        + Math.round(Math.random() * 99);
    res.innerText = "CURP: " + curp.toUpperCase();
}



function conv() {
    var numeroD = document.getElementById("numero");
    var resbin= document.getElementById("bin");
    var resoct= document.getElementById("oct");
    var reshex= document.getElementById("hex");

    //binario
    var n = parseInt(numeroD.value);
    var binary ="";
    do{
        n = parseInt(n / 2);
        numr = parseInt(n % 2);
        if (numr==0) {
            binary = "1"+ binary;
        } else {
            binary = "0"+ binary;
        }
    }while(n >= 1 );
    resbin.value = binary;

        //Octal
        var n = parseInt(numeroD.value);
        var binary ="";
        do{
            n = parseInt(n / 8);
            numr = parseInt(n % 8);
            
            binary = numr + binary;

        }while(n > 1 );
        resoct.value = binary;

}

function trnasformarCadena() {

    var cajaCadena = document.getElementById("caja_entrada");
    var cajavocales = document.getElementById("caja_voc");
    var cajacons = document.getElementById("caja_cons");
    var cajarep = document.getElementById("caja_rep");
    var cajaalt = document.getElementById("caja_alt");
    var cadena = cajaCadena.value;
    var numVocales;
    var long = cadena.length;
    long = long - cadena.replace(/[^aeiouAEIOU]/g, '').length;
    cajacons.value = long;
    cajavocales.value =  cadena.replace(/[^aeiouAEIOU]/g, '').length;

    var resultado = '';

    for(let i = 0; i < cadena.length; ++i) {
        if (i % 2 == 0) {
            resultado += cadena[i].toUpperCase();
        } else {
            resultado += cadena[i].toLowerCase();
        }
    }


    cajaalt.value = resultado;
    


}