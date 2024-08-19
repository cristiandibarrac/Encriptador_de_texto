function encriptar() {
    let texto = document.getElementById('textInput').value;

    let validar = false;
    validar = verificarCaracteres(texto);

    if(texto.includes('e')) texto = texto.replace(/e/g, 'enter');
    if(texto.includes('i')) texto = texto.replace(/i/g, 'imes');
    if(texto.includes('a')) texto = texto.replace(/a/g, 'ai');
    if(texto.includes('o')) texto = texto.replace(/o/g, 'ober');
    if(texto.includes('u')) texto = texto.replace(/u/g, 'ufat');

    if(texto!='' && validar==false) mostrarSalida(texto);

    else mostrarError();
}

function desencriptar() {
    let texto = document.getElementById('textInput').value;

    let validar = false;
    validar = verificarCaracteres(texto);

    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    if(texto!='' && validar==false) mostrarSalida(texto);

    else mostrarError();
}

function verificarCaracteres(str) {
    let contiene = false;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let valorUnicode = char.codePointAt(0);

        // Verificar si el carácter no es una letra minúscula o un espacio
        if (!(valorUnicode >= 0x0061 && valorUnicode <= 0x007A) && valorUnicode !== 0x0020) {
            contiene = true;
        }

        // Si el carácter pertenece a un par sustituto, incrementar el índice
        if (valorUnicode > 0xFFFF) {
            i++;
        }
    }

    return contiene;
}

function mostrarSalida (texto){ 
    document.getElementById('Muñeco').style.display = 'none';
    document.getElementById('Mensaje').style.display = 'none';
    document.getElementById('Salida').textContent = texto;
}

function mostrarError(){
    const  msj = "El texto contiene caractéres especiales o mayúsculas."
    document.getElementById('Muñeco').style.display = 'none';
    document.getElementById('Mensaje').style.display = 'none';
    document.getElementById('Salida').textContent = msj;
}

