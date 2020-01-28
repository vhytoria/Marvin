function maiusculo(palavra){
    const palavras = palavra;
    return palavra.substring(3,0).toUpperCase().concat(palavra.substring(3))
}
