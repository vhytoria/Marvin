function fizzbuzz(num1,num2){
    var n = num1
    while(n <= num2){
          if(n % 3 === 0 && n % 5 === 0){
     console.log(n + " FizzBuzz ")
     n++
    }
    if(n % 5 === 0){
        console.log(n + " Buzz ")
        n++
    }
    else if (n % 3 === 0){
        console.log(n + " Fizz ")
    }
    console.log(n)
    n++
    }
}
