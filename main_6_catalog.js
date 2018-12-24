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
    
 var cart = [];

// Создание каталога

function catalogCreation(catalog){
    var $catalogContent = document.getElementById("catalog");
 for(var i=0; i < catalog.length; i++){ 
     var $catalogItem = document.createElement("div");
     $catalogItem.classList.toggle("item");
     $catalogItem.innerHTML = catalog[i].Name;
     $catalogContent.appendChild($catalogItem);
     
     //var $itemName = document.createElement("div");
     //$itemName.className = "itemName";
     //$itemName.textContent = "Название товара : ";
     //$catalogItem.appendChild($itemName);
     
    // var $itemId = document.createElement("div");
     //$itemId.className = "itemId";
    // $itemId.innerHTML = catalog[i].Name;
    // $itemName.appendChild($itemId);
     
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
     
     var $buttonBuy = document.createElement("a");
     $buttonBuy.className = "buttonBuy";
     $buttonBuy.textContent = "Купить"; 
     $buttonBuy.href = catalog[i].Name;
     $catalogItem.appendChild($buttonBuy);
     
    }
    return $catalogContent;
 
};
catalogCreation(product);

var a = document.getElementsByClassName("buttonBuy");
debugger;
        var objInCart = {};
     [].forEach.call(a, function(el){
    a.click = function(el){
    for( var i = 0; i < product.length; i++){
        var id = product[i].Name;
        var idTempor = this.href;
        if ( id == idTempor){
          objInCart = product[i];
          cart.push(objInCart);
        }
    }
        event.preventDefault();
    }
   })                    

