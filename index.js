let myForms = document.forms.myForm;    //нашли форму
let elemCarBrend = myForms.elements.carBrend;     //нашла элемент бренда автомобиля,без значения
let elemCarModel = myForms.elements.carModel;   // элемент марки автомобиля
let elemPetrol = myForms.elements.petrol;   //элемент инпута со значением "Бензин"
let elemDiesel = myForms.elements.diesel;  //элемент инпута со значением "Дизель"
let elemGas = myForms.elements.gas;        //элемент инпута со значением "Газ"
let elemElectric = myForms.elements.electric;    //элемент инпута со значением "Электричество"
let elemEnСapacity = myForms.elements.enСapacity;    // элемент обьема двигателя
let elemNewCar = myForms.elements.newCar;   // элемент нового автомобиля
let elemSuppСar = myForms.elements.suppСar;  //элемент поддержанного автомобиля
let elemBankСard = myForms.elements.bankСard; // оплата картой

let button = document.querySelector(".button"); // нашла кнопку "расчитать стоимость"
let carOwner = document.querySelector(".carOwner"); // нашла див с количеством владельцев


function addcarOwner(){ //проверяем условие если авто поддержанное то появляются родиокнопки и количеством владельцев

if(elemSuppСar.value !=="") 
{
    const newCarOwner = `<div><p>1-2 владельца</p><input type="radio"></div>`;
    const toCarOwner = `<div><p>3 и более владельцев</p><input type="radio"></div>`;
    carOwner.insertAdjacentHTML('beforeEnd', newCarOwner);
    carOwner.insertAdjacentHTML('beforeEnd', toCarOwner);
}
}
elemSuppСar.addEventListener('input', function (evt) {
    evt.preventDefault();
    addcarOwner();
  });














