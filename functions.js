var Foo = function(name) {
  this.name = name;
}

Foo.prototype.getName = function (){

  return this.name;
}

var myFoo = new Foo("edmon")
