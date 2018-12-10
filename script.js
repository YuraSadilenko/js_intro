var courses = 'Mate Academy',
 allGroups = ['fe-sept', 'fe-oct', 'fe-nov'],
 myGroup = 'fe-oct18',
 comrads = ['Alina','Yura', 'Vadim', 'Dima', 'Serega'];

 var saleStart = prompt('start discount time?');
 var saleEnd = prompt('end dicount time?');
 var time = prompt('what time is it?');

 if( time >= saleStart && time <= saleEnd){
  alert('thшы is dicount time');
 } else {
   alert('no discount');
 }

 var money = prompt('How much money do you have?');

if(money >= 100) {
  confirm('Here is your BigMac Menu');
}else if( money >= 50 && money < 100 ) {
  confirm('You can buy fry potato. and cheeseburger');
}else if( money >= 20 && money <= 50 ) {
  confirm('You can buy cola.')
}else if (money === null) {
  console.log('You dont buy anything.');
}else if ( money < 20 ) {
  console.log('sorry! We dont have any food whis price');
}

 

