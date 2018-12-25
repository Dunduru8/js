// Каталог магазина
var product = [
{
    Name: "Hoodie",
    Price: 35.70,
    color: "black",
    availability: "в наличии",
},
{
    Name: "Coat",
    Price: 150.00,
    color: "black",
    availability: "в наличии"
},    

{
    Name: "Jacket",
    Price: 55.00,
    color: "navy blue",
    availability: "в наличии"
},
{
    Name: "T-shirt",
    Price: 25.00,
    color: "gray",
    availability: "в наличии",
},
{
    Name: "Sweater",
    Price: 55.00,
    color: "gray",
    availability: "в наличии",
},
{
    Name: "Vest",
    Price: 50.00,
    color: "blue",
    availability: "в наличии",
}
]
    
 var cart = [];  //переменная для массива корзины

// Создание каталога

function catalogCreation(catalog){
    var $catalogContent = document.getElementById("catalog");
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
     
     var $buttonBuy = document.createElement("div");
     $buttonBuy.className = "buttonBuy";
     $buttonBuy.textContent = "Купить"; 
     $buttonBuy.id = catalog[i].Name;
     $catalogItem.appendChild($buttonBuy);
     
     
    }
    return $catalogContent;
 
};
catalogCreation(product);

for( var i = 0; i < product.length; i++){
   var $idCreator = product[i].Name; 
   var $buttonBuy = document.getElementById($idCreator);
   var objInCart = {};
   $buttonBuy.addEventListener("click", function(){
     [].forEach.call($buttonBuy, function(el){
        $buttonBuy.click = function(el){
           for( var i = 0; i < product.length; i++){
               var id = product[i].Name;
               var idTempor = this.id;
                   if ( id == idTempor){
                    objInCart = product[i];
                    cart.push(objInCart);
                    }
           }
        }
      })
    })
};  