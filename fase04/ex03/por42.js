function por42 (num1, num2){
    var res = null;
    var cont = 0;
    while ( num1 <= num2){
        if(num1 % 42 === 0 ){
           cont = cont + 1;
        }
    if (cont === 2) {
        return(num1);
    }
    num1++
} if (!res){
    console.log("não encontrado")
    return false 
    }
}
