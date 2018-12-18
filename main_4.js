var numberObject = {}; 

var arrnumber = []; // массив для числа


function  numberToObject(){
   arrnumber = number.split(""); //разбираем число на массив
   if (arrnumber.length > 3){
    return null;   
   }else if(arrnumber.length == 3) {
       numberObject["hundred"] = arrnumber[0];
       numberObject["tens"] = arrnumber[1];
       numberObject["units"] = arrnumber[2];
   }else if(arrnumber.length == 2){
       numberObject["tens"] = arrnumber[0];
       numberObject["units"] = arrnumber[1];  
   }else if (arrnumber.length == 1){
       numberObject["units"] = arrnumber[0]; 
   }
     return numberObject; 
}

number = prompt("Ведите число от 0 до 999");

var object = numberToObject(number);
if (object == null){
    alert ("Вы ввели недопустимое число");
}
for (var prop in object){
    console.log( prop + ": " + object[prop]); //перебор все свойств в объекте
}

// Корзина магазина

var objectInCart1 = {
    itemName: "mango-T1",
    itemQuant: 1,
    itemPrice: 35.70,
}
var objectInCart2 = {
    itemName: "mango-T2",
    itemQuant: 2,
    itemPrice: 45.00,
}    

var objectInCart3 = {
    itemName: "mango-T3",
    itemQuant: 3,
    itemPrice: 55.00,
}

//Подсчет общей суммы корзины

var cart = [objectInCart1, objectInCart2, objectInCart3];
var cartPrice = 0;
for (var i = 0; i< cart.length; i++){
     var temporItemPrice = cart[i]["itemPrice"] * cart[i]["itemQuant"];
     cartPrice += temporItemPrice;
}
console.log(cartPrice);

// Сущности для магазина

var itemObject = {
    idItem: " ",
    idBrand: "Mango",
    idCategory: "Для женщин",
    itemPrise: 55,
    material: "Хлопок",
    color: " ",
    originContry: "Италия",
    availability: "в наличии",
}
var brand = {
    idBrand: " ",
    logo: " ",
    description: " ",
}
var category = {
    idCategory: " ",
    availability: "в наличии",
    description: " ",
}
var order = {
    idOrder: "",
    idCustomer:"",
    idItem: "",
}

