function fizzbuzz(num1,num2){
    var n = num1
    while(n <= num2){
           if(n % 3 === 0){
        console.log(n + "Fizz")
        n++
    }
    if(n% 5 === 0){
        console.log(n + "Buzz")
        n++
    }
    if(n% 3 === 0 && n % 5 === 0){
     console.log( + "FizzBuzz")
     n++
    }
    console.log(n)
    n++
    }
}
