const ages = [12, 14, 15, 13,];
const ages2 = [15, 17, 19,];
const ages3 = [20, 17, 24, 25];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [... ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 600;
const minister = 500;
const sochib = 300;
// const maximum = Math.max(Business, minister, sochib);
const money = [600, 500, 300];
const maximum = Math.max(...money);
console.log(maximum);