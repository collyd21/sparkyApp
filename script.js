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

// // max fault loop script
//   function fault_loop(){
//   if (document.getElementById("type_c") = selected) {
// //     greeting = "Good morning";
// // } else if (breaker_type == type_c) {
// //   greeting = "Good day";
// // } else {
// //   greeting = "Good evening";
// // }
// document.getElementById("demo").innerHTML = greeting;
//   }}


function fault_loop(breaker_type){ 
    document.getElementById("demo").innerHTML=breaker_type;
}
