alert("this is mad lib");

var madLib = function(){
  var word_1, word_2, word_3, mad_lib; // declare variables

  word_1 = prompt("Noun: ");
  word_2 = prompt("Plural noun: ");
  word_3 = prompt("Place: ");

  return "Let's build a " + word_1 + "! It can have lots of " + word_2 + "and live in a " + word_3;
}

alert(madLib());
