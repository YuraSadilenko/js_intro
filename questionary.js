// var masha = 'Masha',
// sasha = 'Sasha',
// angela = 'Angela',
// stepa = 'Stepa',
// kolya = 'Kolya';


var a = confirm("Did Angela came to the party?");
var k = confirm("Did Kolya came to the party?");
var s = confirm("Did Staphan came to the party?");

if( a == false && k == false && s == false) {
  alert('Masha is sad. She like when someone came');
} else if(a == true && k == false && s == false) {
  alert('Masha happy. She love when Angela come')
} else if ( a == false && k == true && s == true) {
  alert('Masha is happy she can watch the show');
} else if ( a == true && k == true && s == true) {
  alert('Masha sad guy a angry about girl');
}  else if ( a == false && k == true || s == true) {
  alert('Masha is sad. She dont like when only one man come');
} else if ( a == true && k == true || s == true) {
  alert('Masha is happy. good company 1 man 1 women');
}

