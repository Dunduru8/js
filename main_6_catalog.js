// Каталог магазина
var product = [
{
    Name: "Hoodie",
    Price: 35.70,
    color: "black",
    availability: "в наличии",
    Quant: 1,
},
{
    Name: "Coat",
    Price: 150.00,
    color: "black",
    availability: "в наличии",
    Quant: 1,
},    

{
    Name: "Jacket",
    Price: 55.00,
    color: "navy blue",
    availability: "в наличии",
    Quant: 1,
},
{
    Name: "T-shirt",
    Price: 25.00,
    color: "gray",
    availability: "в наличии",
    Quant: 1,
},
{
    Name: "Sweater",
    Price: 55.00,
    color: "gray",
    availability: "в наличии",
    Quant: 1,
},
{
    Name: "Vest",
    Price: 50.00,
    color: "blue",
    availability: "в наличии",
    Quant: 1,
}
];


var cart = []; //переменная для корзины

// Создание каталога

function catalogCreation(catalog){
    var $catalogContent = document.getElementById("catalog");
 
 var $item = document.getElementById("item");
    
for(var i=0; i < catalog.length; i++){ 
     var $catalogItem = document.createElement("div");
     $catalogItem.classList.toggle("item");
     $catalogItem.innerHTML = catalog[i].Name;
     $catalogContent.appendChild($catalogItem);
     
     var $itemPrice = document.createElement("div");
     $itemPrice.className = "itemProp";
     $itemPrice.textContent = "Цена : " + catalog[i].Price; 
     $catalogItem.appendChild($itemPrice);
     
     var $itemColor = document.createElement("div");
     $itemColor.className = "itemProp";
     $itemColor.textContent = "Цвет : " + catalog[i].color; 
     $catalogItem.appendChild($itemColor);
     
     var $itemAvail = document.createElement("div");
     $itemAvail.className = "itemProp";
     $itemAvail.textContent = "Есть " + catalog[i].availability; 
     $catalogItem.appendChild($itemAvail);
     
     var $buttonBuy = document.createElement("button");
     $buttonBuy.className = "buttonBuy";
     $buttonBuy.textContent = "Купить"; 
     $buttonBuy.id = catalog[i].Name;
     $catalogItem.appendChild($buttonBuy);
     
    }
    return $catalogContent;
 
};
catalogCreation(product);

document.body.addEventListener("click", function(Event){
    if (event.target.nodeName == "BUTTON"){
        var objInCart = {};
        for( var i = 0; i < product.length; i++){
        var id = product[i].Name;
        var idTempor = event.target.id;
          if ( id == idTempor){
            objInCart = product[i];
            cart.push(objInCart);      
            console.log("click", event.target.id, cart);
          }
        }
    };
    cartDivCreation(); 
});

function cartSumm(){                                  
  var cartPrice = 0;
  for (var i = 0; i< cart.length; i++){
     var temporItemPrice = cart[i]["Price"] * cart[i]["Quant"];
     cartPrice += temporItemPrice;
  }
  return cartPrice.toFixed(2);    
}  //Подсчет общей суммы корзины

function cartItem(){
  var cartItem = 0;
  for (var i = 0; i< cart.length; i++){
     var temporItemNum = cart[i]["Quant"];
     cartItem += temporItemNum;
  }
  return cartItem;        
}   //Подсчет количества товаров

function cartDivCreation(){
  if (cart == 0){
     var $cartContent = document.getElementById("cart");
     $cartContent.innerHTML = "Корзина пуста";   
   }else{
       $cartContent = "В корзине " + cartItem() + " товаров " + " на сумму " + cartSumm() + " eur ";    
       document.getElementById("cart").innerHTML = $cartContent; 
    }
    return $cartContent;
}
cartDivCreation();