var phoneOne = {
    phone: "images/iphone11.png",
    title: "Iphone 11" ,
    price: 98000 ,
    originalPrice: 102000 ,
    itemId: "I001"
}

document.getElementById("iphone11").src = phoneOne.phone
document.getElementById("name1").innerText = phoneOne.title
document.getElementById("priceOne").innerText = phoneOne.price
document.getElementById("originalOne").innerText = phoneOne.originalPrice

var phoneTwo = {
    phone:"images/iphone12.png",
    title: "Iphone 12" ,
    price: 112000 ,
    originalPrice: 110000 ,
    itemId: "I002"
}

document.getElementById("iphone12").src = phoneTwo.phone
document.getElementById("name2").innerText = phoneTwo.title
document.getElementById("priceTwo").innerText = phoneTwo.price
document.getElementById("originalTwo").innerText = phoneTwo.originalPrice

var phoneThree = {
    phone:"images/iphone13.png",
    title: "Iphone 13" ,
    price: 122000 ,
    originalPrice: 120000 ,
    itemId: "I003"
}

document.getElementById("iphone13").src = phoneThree.phone
document.getElementById("name3").innerText = phoneThree.title
document.getElementById("priceThree").innerText = phoneThree.price
document.getElementById("originalThree").innerText = phoneThree.originalPrice


var phoneFour = {
    phone:"images/iphone14.png",
    title: "Iphone 14" ,
    price: 142000 ,
    originalPrice: 140000 ,
    itemId: "I004"
}

document.getElementById("iphone14").src = phoneFour.phone
document.getElementById("name4").innerText = phoneFour.title
document.getElementById("priceFour").innerText = phoneFour.price
document.getElementById("originalFour").innerText = phoneFour.originalPrice


document.getElementById("phoneOne").onclick = function () {
    window.location.href = "/select.html" + "?" + phoneOne.itemId;
  };
  
  document.getElementById("phoneTwo").onclick = function () {
    window.location.href = "/select.html" + "?" + phoneTwo.itemId;
  };
  
  document.getElementById("phoneThree").onclick = function () {
    window.location.href = "/select.html" + "?" + phoneThree.itemId;
  };
  
  document.getElementById("phoneFour").onclick = function () {
    window.location.href = "/select.html" + "?" + phoneFour.itemId;
  };