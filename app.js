function encriptar() {
    var texto = document.getElementById('textInput').value;

    if(texto.includes("e")) texto.replace(/e/g, "enter");
    if(texto.includes("i")) texto.replace(/e/g, "imes");
    if(texto.includes("a")) texto.replace(/e/g, "ai");
    if(texto.includes("o")) texto.replace(/e/g, "ober");
    if(texto.includes("u")) texto.replace(/e/g, "ufat");

    document.getElementById('Muñeco').style.display = 'none';
    document.getElementById('Mensaje').style.display = 'none';
    document.getElementById('Salida').textContent = texto;

    console.log(texto);
}