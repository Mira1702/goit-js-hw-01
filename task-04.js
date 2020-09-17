const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; 
let balanceCredit = credits - orderPieces*pricePerDroid; 
let message;

if (orderPieces === 4) {
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else {
    message = ACCESS_DENIED;
}

if (orderPieces === null) {
    message = CANCELED_BY_USER;
} 

console.log (message);