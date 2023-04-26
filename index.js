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

function onChangeFirst() {  //функцияп подгружает дополнительный массив
    const value = document.getElementById('carBrend').value;
    
    const jaguar = ['FX','XJ','XE'];
    const hyundai = ['Creta','Solaris','tucson'];
    const reno = ['Kaptur','Koleos','Symbol'];
    const mazda = ['CX-3','CX-5','MX-30'];

    let values=[]

    document.getElementById("carModel").innerHTML=''
    if(value==0){
        document.getElementById('carModel').value=''
        document.getElementById("carModel").disabled = true;
        return
      }
      else if(value == 1){

    values = [...jaguar];    
    }
    else if(value == 2){
      values = [...hyundai]
    }
    else if(value == 3){
      values = [...reno]
    }
    else if(value == 4){
        values = [...mazda]
      }
     
    let select = document.getElementById('carModel');

    for (const val of values)
    {
        let option = document.createElement("option");
        option.value = val;
        option.text = val;
        select.appendChild(option);
    }
    document.getElementById('carModel').disabled=false
}


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















