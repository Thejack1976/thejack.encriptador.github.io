function copiar() {
    
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copio!");
    
}
