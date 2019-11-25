$(document).ready(function(){
  $("#ch3form").submit(function(){
    var fruit = $('input[name="fruit"]');
    for (let i = 0; i < fruit.length; i++){
      if (fruit[i].checked)
      return true;
    }
    alert("You must pick a fruit!");
    return false;
  })
  $("#ch3form").submit(function(){
    var standing = $('input[name="standing"]');
    for (let i = 0; i < standing.length; i++){
      if (standing[i].checked)
        return true;
    }
    alert("You must pick a standing!");
    return false;
  })
})
