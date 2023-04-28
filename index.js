let myForms = document.forms.myForm;    //нашли форму
let elemCarBrend = myForms.elements.carBrend.value;     //нашла элемент бренда автомобиля,без значения
let elemCarModel = myForms.elements.carModel.value;   // элемент марки автомобиля
let elemPetrol = myForms.elements.petrol.value;   //элемент инпута со значением "Бензин"
let elemDiesel = myForms.elements.diesel.value;  //элемент инпута со значением "Дизель"
let elemGas = myForms.elements.gas.value;        //элемент инпута со значением "Газ"
let elemElectric = myForms.elements.electric.value;    //элемент инпута со значением "Электричество"
let elemEnСapacity = myForms.elements.enСapacity.value;    // элемент обьема двигателя
let elemNewCar = myForms.elements.newCar.checked;   // элемент нового автомобиля
let elemSuppСar = myForms.elements.suppСar;  //элемент поддержанного автомобиля
let elemBankСard = myForms.elements.bankСard.checked; // оплата картой
let elemСash = myForms.elements.cash.checked; // оплата картой

let button = document.querySelector(".button"); // нашла кнопку "расчитать стоимость"
let carOwner = document.querySelector(".carOwner"); // нашла див с количеством владельцев




myForms.addEventListener("submit", function(event) {
   event.preventDefault();

   let sum =0;

    let brend =document.querySelector("#carBrend").value; 
    let model =document.querySelector("#carModel").value;
    let petrol =document.querySelector("#petrol").value;
    let diesel =document.querySelector("#diesel").value;
    let gas =document.querySelector("#gas").value;
    let electric =document.querySelector("#electric").value;
    let enСapacity =document.querySelector("#enСapacity").value;
    let newCar =document.querySelector("#newCar").value;
    let suppСar =document.querySelector("#suppСar").value;

    sum =  sum + +model;
    console.log(sum);

if ( petrol !== "" ) {
     sum = sum + +petrol;
  console.log(sum);
  } 
  else
  if (diesel !== "") {
    sum = sum + +diesel;
  console.log(sum);
}



  
  
  
}
);




function onChangeFirst() {  //функция подгружает дополнительный массив
    const value = document.getElementById('carBrend').value;
    
    const jaguar = [{ model:'FX', price: 100000 } , {model: 'XJ', price: 150000 },{model:'XE', price: 300000 }];
    const hyundai = [{model:'Creta', price: 120000 }, {model:'Solaris', price: 170000 },{model:'Tucson', price: 320000 }];
    const reno = [{model:'Kaptur', price: 110000 }, {model:'Koleos', price: 160000 },{model:'Symbol', price: 310000 }];
    const mazda = [{model:'CX-3', price: 110000 }, {model:'CX-5', price: 160000 },{model:'MX-30', price: 310000 }];

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
        option.value = val.price;
        option.text = val.model;

        select.appendChild(option);
    }
    document.getElementById('carModel').disabled=false
}


function addcarOwner(){ //проверяем условие если авто поддержанное то появляются родиокнопки с количеством владельцев

if(elemSuppСar.value !=="") 
{
    const newCarOwner = `<div><p>1-2 владельца</p><input  type="radio"></div>`;
    const toCarOwner = `<div><p>3 и более владельцев</p><input type="radio"></div>`;
    carOwner.insertAdjacentHTML('beforeEnd', newCarOwner);
    carOwner.insertAdjacentHTML('beforeEnd', toCarOwner);
}
}
elemSuppСar.addEventListener('input', function (evt) {
    evt.preventDefault();
    addcarOwner();
});















