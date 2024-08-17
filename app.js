function encriptar() {
    let texto = document.getElementById('textInput').value;

    if(texto.includes('e')) texto = texto.replace(/e/g, 'enter');
    if(texto.includes('i')) texto = texto.replace(/i/g, 'imes');
    if(texto.includes('a')) texto = texto.replace(/a/g, 'ai');
    if(texto.includes('o')) texto = texto.replace(/o/g, 'ober');
    if(texto.includes('u')) texto = texto.replace(/u/g, 'ufat');

    if(texto!=''){
        document.getElementById('Muñeco').style.display = 'none';
        document.getElementById('Mensaje').style.display = 'none';
        document.getElementById('Salida').textContent = texto;
    }

    console.log(texto);
}

function desencriptar() {
    let texto = document.getElementById('textInput').value;

    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    if(texto!=''){
        document.getElementById('Muñeco').style.display = 'none';
        document.getElementById('Mensaje').style.display = 'none';
        document.getElementById('Salida').textContent = texto;
    }

    console.log(texto);
}