var a = confirm('Did Angela came to the party?');
var k = confirm('Did Kolya came to the party?');
var s = confirm('Did Staphan came to the party?');

if(!a && !k && !s) {
  alert('Masha is sad. She like when someone came');
} else if(a && !k && !s) {
  alert('Masha happy. She love when Angela come')
} else if (!a && k && s) {
  alert('Masha is happy she can watch the show');
} else if (a && k && s) {
  alert('Masha sad, guy angry about girl');
}  else if (!a && (k || s)) {
  alert('Masha is sad. She dont like when only one man come');
} else if (a && ((!k && s) || (k && !s))) {
  alert('Masha is happy. good company 1 man 1 women');
}
