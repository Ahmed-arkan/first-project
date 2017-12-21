
inames = [];
iqtyp = [];
iprice = [];

function addItem(){

  var value =document.getElementById('B1').value;

  console.log("value=" + value);
  var arrValues = value.split("|");
  console.log(arrValues);

  inames.push(arrValues[0]);
  iqtyp.push(Number(arrValues[1]));
  iprice.push(Number(arrValues[2]));
 
  
   console.log(inames)
    console.log(iqtyp)
   console.log(iprice)
   displayCart()
}
function addItem2(){

  var value2 =document.getElementById('B2').value;

  console.log("value2=" + value2);
  var arrValues2 = value2.split("|");
  console.log(arrValues2);

  inames.push(arrValues2[0]);
  iqtyp.push(Number(arrValues2[1]));
  iprice.push(Number(arrValues2[2]));
 
  
   console.log(inames)
    console.log(iqtyp)
   console.log(iprice)
   displayCart()
}

function addItem3(){

  var value3 =document.getElementById('B3').value;

  console.log("value3=" + value3);
  var arrValues3 = value3.split("|");
  console.log(arrValues3);

  inames.push(arrValues3[0]);
  iqtyp.push(Number(arrValues3[1]));
  iprice.push(Number(arrValues3[2]));
 
  
   console.log(inames)
    console.log(iqtyp)
   console.log(iprice)
   displayCart()
}

function addItem4(){

  var value4 =document.getElementById('B4').value;

  console.log("value4=" + value4);
  var arrValues4 = value4.split("|");
  console.log(arrValues4);

  inames.push(arrValues4[0]);
  iqtyp.push(Number(arrValues4[1]));
  iprice.push(Number(arrValues4[2]));
 
  
   console.log(inames)
    console.log(iqtyp)
   console.log(iprice)
   displayCart()
}


function displayCart(){
  
  
cartdata = ['<table><tr><th>Product Name</th><th>Quantity</th><th>Price</th><th>Total</th><th><button onclick=>✘</button></th></tr>'];

  
  total = 0;
  
  for (i=0; i < inames.length; i++){
    total += iqtyp[i] * iprice[i]
  
    cartdata += "<tr><td>" + inames[i] + "</td><td>" + iqtyp[i] + "</td><td>" + iprice[i] + "</td><td>" + iqtyp[i] * iprice[i] + "</td><td><button onclick='delElement(" + i + ")'>✘</button></td></tr>"
  }
  cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'
  
  document.getElementById('cart').innerHTML = cartdata
  
}


function delElement(i){
  inames.splice(i, 1);
  iqtyp.splice(i, 1)
  iprice.splice(i, 1)
  displayCart()
}
