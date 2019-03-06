function foo() {
  var bar;
  quux = 'ok';
  function zip() {
    var quux = 'm';
    bar = true;
  }
  return zip;
}
