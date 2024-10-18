// length/resistance calculator script

function calc() {
  var cable_length = document.getElementById("cable_length").value;
  var cable_size_selected = $("input[name='cable_size']:checked").val();
  var cable_resistance_result = 19/cable_size_selected / 1000 * cable_length;
  if (isNaN(cable_resistance_result)) cable_resistance_result = 0;
  if (cable_resistance_result == Infinity) cable_resistance_result = 0;
  document.getElementById("cable_resistance_calc").value = cable_resistance_result;
  console.log(cable_size_selected);

  var cable_resistance = document.getElementById("cable_resistance").value;
  var cable_size_selected = $("input[name='cable_size']:checked").val();
  var cable_length_result = (cable_resistance * 1000 / 19) * cable_size_selected;
  if (isNaN(cable_length_result)) cable_length_result = 0;
  if (cable_length_result == Infinity) cable_length_result = 0;
  document.getElementById("cable_length_calc").value = cable_length_result;
}

// Fault loop script

function fault_loop(){
var type_b = document.getElementById("type_b").checked;
var type_c = document.getElementById("type_c").checked;
var type_d = document.getElementById("type_d").checked;
var mcb_6 = document.getElementById("size_6").checked;
var mcb_10 = document.getElementById("size_10").checked;
var mcb_16 = document.getElementById("size_16").checked;
var mcb_20 = document.getElementById("size_20").checked;
var mcb_25 = document.getElementById("size_25").checked;
var mcb_32 = document.getElementById("size_32").checked;
var mcb_40 = document.getElementById("size_40").checked;
var mcb_50 = document.getElementById("size_50").checked;
var mcb_63 = document.getElementById("size_63").checked;
var mcb_80 = document.getElementById("size_80").checked;
var mcb_100 = document.getElementById("size_100").checked;
var mcb_125 = document.getElementById("size_125").checked;


if (type_b && mcb_6) {
    document.getElementById("demo").innerHTML= "7.67Ω";
  } else if (type_b && mcb_10)  {
    document.getElementById("demo").innerHTML= "4.60Ω";
  } else if (type_b && mcb_16)  {
    document.getElementById("demo").innerHTML= "2.87Ω";
  } else if (type_b && mcb_20)  {
    document.getElementById("demo").innerHTML= "2.30Ω";
  } else if (type_b && mcb_25)  {
    document.getElementById("demo").innerHTML= "1.84Ω";
  } else if (type_b && mcb_32)  {
    document.getElementById("demo").innerHTML= "1.44Ω";
  } else if (type_b && mcb_40)  {
    document.getElementById("demo").innerHTML= "1.15Ω";
  } else if (type_b && mcb_50)  {
    document.getElementById("demo").innerHTML= "0.92Ω";
  } else if (type_b && mcb_63)  {
    document.getElementById("demo").innerHTML= "0.73Ω";
  } else if (type_b && mcb_80)  {
    document.getElementById("demo").innerHTML= "0.57Ω";
  } else if (type_b && mcb_100)  {
    document.getElementById("demo").innerHTML= "0.46Ω";
  } else if (type_b && mcb_125)  {
    document.getElementById("demo").innerHTML= "0.37Ω";
  } else if (type_c && mcb_6)  {
    document.getElementById("demo").innerHTML= "3.83Ω";
  } else if (type_c && mcb_10)  {
    document.getElementById("demo").innerHTML= "2.30Ω";
  } else if (type_c && mcb_16)  {
    document.getElementById("demo").innerHTML= "1.44Ω";
  } else if (type_c && mcb_20)  {
    document.getElementById("demo").innerHTML= "1.15Ω";
  } else if (type_c && mcb_25)  {
    document.getElementById("demo").innerHTML= "0.92Ω";
  } else if (type_c && mcb_32)  {
    document.getElementById("demo").innerHTML= "0.72Ω";
  } else if (type_c && mcb_40)  {
    document.getElementById("demo").innerHTML= "0.57Ω";
  } else if (type_c && mcb_50)  {
    document.getElementById("demo").innerHTML= "0.46Ω";
  } else if (type_c && mcb_63)  {
    document.getElementById("demo").innerHTML= "0.36Ω";
  } else if (type_c && mcb_80)  {
    document.getElementById("demo").innerHTML= "0.29Ω";
  } else if (type_c && mcb_100)  {
    document.getElementById("demo").innerHTML= "0.23Ω";
  } else if (type_c && mcb_125)  {
    document.getElementById("demo").innerHTML= "0.18Ω";
  } else if (type_d && mcb_6)  {
    document.getElementById("demo").innerHTML= "1.92Ω";
  } else if (type_d && mcb_10)  {
    document.getElementById("demo").innerHTML= "1.15Ω";
  } else if (type_d && mcb_16)  {
    document.getElementById("demo").innerHTML= "0.72Ω";
  } else if (type_d && mcb_20)  {
    document.getElementById("demo").innerHTML= "0.57Ω";
  } else if (type_d && mcb_25)  {
    document.getElementById("demo").innerHTML= "0.46Ω";
  } else if (type_d && mcb_32)  {
    document.getElementById("demo").innerHTML= "0.36Ω";
  } else if (type_d && mcb_40)  {
    document.getElementById("demo").innerHTML= "0.29Ω";
  } else if (type_d && mcb_50)  {
    document.getElementById("demo").innerHTML= "0.23Ω";
  } else if (type_d && mcb_63)  {
    document.getElementById("demo").innerHTML= "0.18Ω";
  } else if (type_d && mcb_80)  {
    document.getElementById("demo").innerHTML= "0.14Ω";
  } else if (type_d && mcb_100)  {
    document.getElementById("demo").innerHTML= "0.11Ω";
  } else if (type_d && mcb_125)  {
    document.getElementById("demo").innerHTML= "0.09Ω";  
  } else {
    document.getElementById("demo").innerHTML= "Select Type and Size";
}
}

// function fault_loop(breaker_type){ 
//   document.getElementById("demo").innerHTML=breaker_type;
// }
