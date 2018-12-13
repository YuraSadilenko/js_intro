// var courses = 'Mate Academy',
//  coursesGroups = ['fe-sept', 'fe-oct', 'fe-nov'],
//  myGroup = 'fe-oct18',
//  myComrads = ['Alina','Yura', 'Vadim', 'Dima', 'Serega'];

var discount = function hour(question){
  var val = +prompt(question, '');
  if (isNaN(val) || val < 0 || val > 23) {
    alert('Incorrect value');
    hour(question, '');
  }
  return val;
};

var saleStart = discount('dicount start?');
var saleEnd = discount('discount end?');
var time = discount('current time?');

if ( saleStart < saleEnd && time >= saleStart && time <= saleEnd) {
  alert('this is morning dicount time');
} else if ( saleStart > saleEnd && ( time >= saleStart || time <= saleEnd ) ) {
  alert('this is evening dicount time');
} else {
  alert('no discount');
}

//  var money = prompt('How much money do you have?');
//  var question;

// if(money >= 100) {
//   question = confirm('You can buy BigMac Menu');
//   if( question ) {
//     alert('here is your Big Mac');
//   } else {
//     alert('you dont want to buy');
//   }

// }else if( money >= 50 && money < 100 ) {
//   question = confirm('You can buy fry potato. and cheeseburger. Would you like to buy it?');
//   if( question ) {
//     alert('here is you potato with cheeseburger');
//   } else {
//     alert('you dont want to buy');
//   }

// }else if( money >= 20 && money <= 50 ) {
//   question = confirm('You can buy cola. Would you like to buy it?');
//   if( question ) {
//     alert('here is your cola');
//   } else {
//     alert('you dont want to buy');
//   }

// }else if (money === null) {
//   console.log('You dont buy anything.');
// }else if ( money < 20 ) {
//   console.log('sorry! We dont have any food this price');
// }

 

