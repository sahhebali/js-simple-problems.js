const number = -5;
const output = Math.abs(number);
// console.log(output);

var myNumber = 21.124564
// const max = Math.max(myNumber)
// const output = Math.round(myNumber);
// console.log(max);

/*swap */
var first = 7;
var second = 9;
// console.log(first, second);
var temp = first;
var first = second;
var second = temp;
// console.log(first, second);

/*max */
// var business = 450;
// var minister = 550;
// if (business > minister) {
//     console.log('business is beger', business);
// }
// else {
//     console.log('minister is beger', minister);
// }

var busyness = 850;
var minister = 750;
var army = 610;
// if (busyness > minister && busyness > army) {
//     console.log('bisiness is biger', busyness);
// }
// else if (minister > busyness && minister > army) {
//     console.log('minister is biger', minister);
// }
// else if (army > busyness && army > minister) {
//     console.log('army is biger', army);
// }

var max = Math.max(busyness, minister, army);
// console.log('find biger', max);

function larGest(four, five) {
    if (four > five) {
        return four;
    }
    else {
        return five;
    }
}
const ourLargest = larGest(400, 500);
// console.log(ourLargest);

let mobilePrice = [2002, 3003, 4004, 5005, 6006];
let sum = 0;
for (var i = 0; i < mobilePrice.length; i++) {
    const eliment = mobilePrice[i];

    sum = sum + eliment;
}
// console.log(sum);

let arr = [50, 39, 25, 23, 18, 13, 13];
var totalArray = 0;
for (var i = 0; i < arr.length; i++) {
    const eliment = arr[i];

    totalArray = totalArray + eliment;
}
console.log(totalArray);

// function sahebAge(age) {
//     let sum = 0;
//     for (var i = 0; i < age.length; i++) {
//         const eliment = age[i];
//         sum = sum + eliment;
//     }
//     return sum;
// }
// var toataAge = sahebAge([20, 5]);
// console.log(toataAge);

function tatalFamilyMember(family) {
    let sum = 0;
    for (var i = 0; i < family.length; i++) {
        const eliment = family[i];
        sum = sum + eliment;

    }
    return sum;
}
var myFamilyMember = tatalFamilyMember([1, 1, 3, 2]);
// console.log(myFamilyMember);
getSum (a, b = 9)
 {return a+b;} 
 console.log (getSum (2, 7));
