// var courses = 'Mate Academy',
//  coursesGroups = ['fe-sept', 'fe-oct', 'fe-nov'],
//  myGroup = 'fe-oct18',
//  myComrads = ['Alina','Yura', 'Vadim', 'Dima', 'Serega'];

// var discount = function hour(question) {
//   var value = +prompt(question, '');
//   if (isNaN(value) || value < 0 || value > 23) {
//     alert('Incorrect value');
//     value = hour(question, '');
//   }
//   return value;
// };

// var saleStart = discount('dicount start?');
// var saleEnd = discount('discount end?');
// var time = discount('current time?');

// if (saleStart < saleEnd && time >= saleStart && time <= saleEnd) {
//   console.log('this is morning dicount time');
// } else if (saleStart > saleEnd && (time >= saleStart || time <= saleEnd)) {
//   console.log('this is evening dicount time');
// } else {
//   console.log('no discount');
// }

var money = +prompt('How much money do you have?');
var question;

if (!money) {
  alert('You buy nothing')
}

if (money >= 100) {
  question = confirm('You can buy BigMac Menu');
  if (question) {
    alert('here is your Big Mac');
  } else {
    alert('you dont want to buy');
  }
} else if (money >= 50) {
  question = confirm('You can buy fry potato. and cheeseburger. Would you like to buy it?');
  if (question) {
    alert('here is you potato with cheeseburger');
  } else {
    alert('you dont want to buy');
  }
} else if (money >= 20) {
  question = confirm('You can buy cola. Would you like to buy it?');
  if (question) {
    alert('here is your cola');
  } else {
    alert('you dont want to buy');
  }
} else if (money > 0) {
  alert('sorry! We dont have any food this price');
} 



 

