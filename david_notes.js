cube = {
  side: 10,
  area: function() {return this.side * this.side;}
}

cube.area();

/////////////////////

RUBY

def hide_me
  x = 2
  $y = 3
  return true
end

puts x => ERROR
puts $y => 3

JAVASCRIPT

var hideMe = function() {
  x = 2;
  var y = 3;
  return true;
}

console.log(x); => 2
console.log(y); => undefined

/////////////////

// we have block scope in ruby, inside do-end block is its own world
// in js every time we want a new scope we have to create a new function
