var phoneOne = {
    phone: "images/iphone11.png",
    title: "Iphone 11" ,
    price: 98000 ,
    originalPrice: 102000 ,
    itemId: "I001"
}

var phoneTwo = {
    phone:"images/iphone12.png",
    title: "Iphone 12" ,
    price: 112000 ,
    originalPrice: 110000 ,
    itemId: "I002"
}

var phoneThree = {
    phone:"images/iphone13.png",
    title: "Iphone 13" ,
    price: 122000 ,
    originalPrice: 120000 ,
    itemId: "I003"
}

var phoneFour = {
    phone:"images/iphone14.png",
    title: "Iphone 14" ,
    price: 142000 ,
    originalPrice: 140000 ,
    itemId: "I004"
}

var selectId = decodeURIComponent(window.location.search)
var selectedItem = selectId.substring(1)

if (selectedItem == phoneOne.itemId){
    document.getElementById("iphone11").src = phoneOne.phone
    document.getElementById("name1").innerText = phoneOne.title
    document.getElementById("priceOne").innerText = phoneOne.price
    document.getElementById("originalOne").innerText = phoneOne.originalPrice
}

else if(selectedItem == phoneTwo.itemId){
    document.getElementById("iphone11").src = phoneTwo.phone
    document.getElementById("name1").innerText = phoneTwo.title
    document.getElementById("priceOne").innerText = phoneTwo.price
    document.getElementById("originalOne").innerText = phoneTwo.originalPrice
}

else if(selectedItem == phoneThree.itemId){
    document.getElementById("iphone11").src = phoneThree.phone
    document.getElementById("name1").innerText = phoneThree.title
    document.getElementById("priceOne").innerText = phoneThree.price
    document.getElementById("originalOne").innerText = phoneThree.originalPrice
}

else{
    document.getElementById("iphone11").src = phoneFour.phone
    document.getElementById("name1").innerText = phoneFour.title
    document.getElementById("priceOne").innerText = phoneFour.price
    document.getElementById("originalOne").innerText = phoneFour.originalPrice
}
