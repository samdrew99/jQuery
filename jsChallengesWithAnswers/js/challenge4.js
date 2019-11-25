// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//     console.log("Here");
//     console.log(name);
//     console.log(address)
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }
$("#ch4form").submit(function() {
  var validInput = true;
  var name = $("#fullname");
  var address = $("#streetaddr");
  console.log("Here");
  console.log(name);
  console.log(address);
  if ($("#fullname").val() == "") {
    $("#nameerrormsg").css("display", "block");
    validInput = false;
  }
  else {
    $("#nameerrormsg").css("display", "none");
  }
  if ($("#streetaddr").val() == "") {
    $("#addrerrormsg").css("display", "block");
    validInput = false;
  }
  else {
    $("#addrerrormsg").css("display", "none");
  }
  return validInput;
});
