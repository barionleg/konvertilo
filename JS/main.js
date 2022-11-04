
function checkBin1(x){
var y = x.split("");
var z = y.length;
var s;
var t
for(i = 0; i < z;){
  s = Number(y[i]);
  if (s != 1 && s!= 0){
     t = 0;
    break;
  }else{
      i++;
  }
}
if(t == undefined){
   t = 1;
}
return t;
}

function decimalToRoman( number ) {
  const RN = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  const VRN =[1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var div=0;

  var ind = RN.length-1;
  var retRN = '';

  while ( number > 0 ) {
	  div = Math.floor(number/VRN[ind]);
	  number=number%VRN[ind];

	  while ( div-- ) {
	    retRN = retRN + RN[ind];
  	}
	  ind--;
  }

  return retRN;
}

function romanToDecimal( RN ) {
  var retDEC = 0;
  for (let i = 0; i < RN.length; i++) {

      switch (RN.charAt(i)) {
             case 'I':
		  retDEC=retDEC+1;
                  break;
             case 'V':
		  retDEC=retDEC+5;
                  break;
             case 'X':
		  retDEC=retDEC+10;
                  break;
             case 'L':
		  retDEC=retDEC+50;
                  break;
             case 'C':
		  retDEC=retDEC+100;
                  break;
             case 'D':
		  retDEC=retDEC+500;
                  break;
             case 'M':
		  retDEC=retDEC+1000;
                  break;
             default:
		  return -1;
      }
      if ( i ) {
         if ((RN.charAt(i) === 'V' || RN.charAt(i) === 'X') && RN.charAt(i - 1) === 'I') {
            retDEC -= 1 + 1;
         }
         if ((RN.charAt(i) === 'L' || RN.charAt(i) === 'C') && RN.charAt(i - 1) === 'X') {
            retDEC -= 10 + 10;
         }
         if ((RN.charAt(i) === 'D' || RN.charAt(i) === 'M') && RN.charAt(i - 1) === 'C') {
            retDEC -= 100 + 100;
         }
      }
  }

  return retDEC;
}


function bin2dec(x){
  return parseInt(x,2).toString(10);
}
function bin2hex(x){
  return parseInt(x,2).toString(16);
}
function bin2oct(x){
  return parseInt(x,2).toString(8);
}
function bin2rom(x){
  return decimalToRoman(parseInt(x,2).toString(10));
}

function hex2dec(x){
  return parseInt(x,16).toString(10);
}
function hex2oct(x){
  return parseInt(x,16).toString(8);
}
function hex2bin(x){
  return parseInt(x,16).toString(2);
}
function hex2rom(x){
  return decimalToRoman(parseInt(x,16).toString(10));
}

function oct2dec(x){
  return parseInt(x,8).toString(10);
}
function oct2hex(x){
  return parseInt(x,8).toString(16);
}
function oct2bin(x){
  return parseInt(x,8).toString(2);
}
function oct2rom(x){
  return decimalToRoman(parseInt(x,8).toString(10));
}

function dec2bin(x){
  return parseInt(x,10).toString(2);
}
function dec2hex(x){
  return parseInt(x,10).toString(16);
}
function dec2oct(x){
  return parseInt(x,10).toString(8);
}
function dec2rom(x){
  return decimalToRoman(x);
}

function rom2dec(x){
  return romanToDecimal(x);
}
function rom2bin(x){
  return parseInt(romanToDecimal(x),10).toString(2);
}
function rom2hex(x){
  return parseInt(romanToDecimal(x),10).toString(16);
}
function rom2oct(x){
  return parseInt(romanToDecimal(x),10).toString(8);
}



function resultBin(){
  let binListner = document.getElementById("bin");
	var regEx = /^(0|1){1,}$/;
  if (!regEx.test(binListner.value)) {
    binListner.value = binListner.value.replace(/[^0-1]|^0+(?!$)/g, '');
  } else {
    document.getElementById("hex").value = bin2hex(binListner.value);
    document.getElementById("oct").value = bin2oct(binListner.value);
    document.getElementById("dec").value = bin2dec(binListner.value);
    document.getElementById("rom").value = bin2rom(binListner.value);
  }
}

function resultDec(){
  let decListner = document.getElementById("dec");
	var regEx = /^[0-9]{1,}$/;
  if (!regEx.test(decListner.value)) {
    decListner.value = decListner.value.replace(/[^0-9]|^0+(?!$)/g, '');
  } else {
    document.getElementById("hex").value = dec2hex(decListner.value);
    document.getElementById("oct").value = dec2oct(decListner.value);
    document.getElementById("bin").value = dec2bin(decListner.value);
    document.getElementById("rom").value = dec2rom(decListner.value);
  }
}

function resultHex(){
  let hexListner = document.getElementById("hex");
	var regEx = /^[0-9a-fA-F]{1,}$/;
  if (!regEx.test(hexListner.value)) {
    hexListner.value = hexListner.value.replace(/[^0-9a-fA-F]|^0+(?!$)/g, '');
  } else {
    document.getElementById("dec").value = hex2dec(hexListner.value);
    document.getElementById("oct").value = hex2oct(hexListner.value);
    document.getElementById("bin").value = hex2bin(hexListner.value);
    document.getElementById("rom").value = hex2rom(hexListner.value);
  }
}

function resultOct(){
  let octListner = document.getElementById("oct");
	var regEx = /^[0-7]{1,}$/;
  if (!regEx.test(octListner.value)) {
    octListner.value = octListner.value.replace(/[^0-7]|^0+(?!$)/g, '');
  } else {
    document.getElementById("dec").value = oct2dec(octListner.value);
    document.getElementById("hex").value = oct2hex(octListner.value);
    document.getElementById("bin").value = oct2bin(octListner.value);
    document.getElementById("rom").value = oct2rom(octListner.value);
  }
}

function resultRom(){
  let romListner = document.getElementById("rom");
	var regEx = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!regEx.test(romListner.value)) {
    console.log('slice');
    romListner.value = romListner.value.slice(0, -1);
  } else {
    document.getElementById("dec").value = rom2dec(romListner.value);
    document.getElementById("hex").value = rom2hex(romListner.value);
    document.getElementById("bin").value = rom2bin(romListner.value);
    document.getElementById("oct").value = rom2oct(romListner.value);
  }
}


function reset(){
  document.getElementById("bin").value = "";
  document.getElementById("hex").value = "";
  document.getElementById("oct").value = "";
  document.getElementById("dec").value = "";
  document.getElementById("rom").value = "";
}