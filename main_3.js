function isPrime(n){
    if (n === 1){
    return false;         
    }
    for(d=2; d*d <= n; d++){ 
      if(n%d == 0) {       
      return false; 
    }
   }
      return n;
} //функция для проверки простое ли число

var n = 1;
var arr = []; // массив для простых чисел (есть false)
do {
    var isPrimeRez = isPrime(n)  
    arr.push(isPrimeRez);
    n++;  
         
} while (n < 101);

//  убираем из массива false
var newArr = [];    
for (var i = 0; i < arr.length; i++){
    if (arr[i] != false){
    newArr.push(arr[i]); 
  }
}
document.write("Список простых чисел от 0 до 100 <br>" + newArr) 

var cartItemPrice = [];  //переменная для массива с ценами
var d = 5;              // условное количество товара в корзине

for (var a = 0; a < d; a++){
    var randomPrice = parseInt(Math.random() * 100);
    cartItemPrice.push(randomPrice);                   //заполняем корзину случайными ценами;
}
document.write("<br> Сейчас в корзине лежат товары с такими ценами <br>" + cartItemPrice);

var countBasketPrice = cartItemPrice.reduce(function(sum, current){  // считаем сумму чисел в массиве
    return sum + current;
}, 0)
document.write("<br> Общая стоимость корзины = " + countBasketPrice + "<br>");

//Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

for( b = 0 ; b <= 9; b++)
console.log(b);

var x = "X";

for (b = 0; b < 20; b++){
  x+="X"    
  console.log(x);  
}

//Практикум
function random(a, b){
    return Math.floor(Math.random() * (b - a + 1) + a); //генерим случайные числа
}
function answer (){                         
    var mem = ""
    for (var i = 0; i < 4; i++){
         do {
             var randFun = random(0, 9); //вызываем фунцию случайных чисел
         }    
    while(mem.indexOf(randFun) >= 0); //проверяем есть ли совпадения чисел
    mem = mem + randFun;
    }
    return mem;                      // mem - загаданное число
}                               //функция, загадывающая число

var secretAnswer = answer();     // секретное число
var bulls;
var cows;

function compareAnswer(answer, userAnswer){
    bulls = 0;
    cows = 0;
    for (var i = 0; i < 4; i++){
       if (answer[i] == userAnswer[i]){
           bulls++;
       }else if(answer.indexOf(userAnswer[i]) >= 0){
           cows++;
       } 
    }
}   //функция сверяющая ответы
var tryCount = 5;   // переменная для подсчета попыток

for (var i = 1; i < 6; i++){
    var userAnswer = prompt("Попробуйте угадать четырехзначное число. У вас " + tryCount + " попыток")
    compareAnswer(secretAnswer, userAnswer);
    var help ="Быки " + bulls + " Коровы " + cows;
    console.log("<br> Ваше число " + userAnswer + " Подсказка: " + help);
    tryCount--;
    if(secretAnswer == userAnswer){
        alert("Поздравляю! Вы выиграли!!!");
        break;
    }if (tryCount == 0){
        alert("Вы проиграли!")
    }
}
