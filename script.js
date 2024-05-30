// 1-masala

// for (let i = 1; i <= 50; i += 2) {
//     let kvadrat = i * i;
//     console.log(i + " ning kvadrati: " + kvadrat);
// }

// 2-masala

// for (let i = 1; i <= 10; i++) {
//     let kub = Math.pow(i, 3);
//     console.log(i + " ning kubi: " + kub);
// }

// 3-masala

// for (let i = 1; i <= 20; i++) {
//     let faktorial = 1;
//     for (let j = 1; j <= i; j++) {
//         faktorial *= j;
//     }
//     console.log(i + " ning faktoriali: " + faktorial);
// }

// 4-masala

// let sum = 0;

// for (let i = 1; i <= 30; i++) {
//     sum += i * i;
// }

// console.log("1 dan 30 gacha sonlarning kvadratlarining yig'indisi:", sum);

// 5-masala

// console.log("1 dan 20 gacha tub sonlar:");
// for (let num = 2; num <= 20; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num);
//     }
// }

// 6-masala

// console.log("1 dan 100 gacha 2 bilan ko'paytmasa 100 dan kichik sonlar:");
// for (let num = 1; num <= 100; num++) {
//     if (num * 2 < 100) {
//         console.log(num);
//     }
// }

// 7-masala

// console.log("1 dan 100 gacha 7 ga bo'linadigan, lekin 5 ga bo'linmaydigan sonlar:");
// for (let num = 1; num <= 100; num++) {
//     if (num % 7 === 0 && num % 5 !== 0) {
//         console.log(num);
//     }
// }

// 8-masala

// let number = 36; // Berilgan son
// let sum = 0;
// let divisors = [];

// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         divisors.push(i);
//         sum += i;
//     }
// }

// console.log("Berilgan sonning bo'linuvchilari:", divisors);
// console.log("Bo'linuvchilarning yig'indisi:", sum);
