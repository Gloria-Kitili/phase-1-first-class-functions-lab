// return first two drivers
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0,2)
console.log(returnFirstTwoDrivers());


const returnLastTwoDrivers =() => drivers.slice (-2)
console.log(returnLastTwoDrivers());

const selectingDrivers =
[returnFirstTwoDrivers,returnLastTwoDrivers ];
console.log(selectingDrivers);

function createFareMultiplier(n){
    return function(fare){
    return n*fare 
    }
}
console.log(createFareMultiplier(4))  

const fareDoubler =(createFareMultiplier) => createFareMultiplier*2;
fareDoubler(20);

const fareTripler =(createFareMultiplier) => createFareMultiplier*3;
fareTripler(20);


const selectDifferentDrivers = (drivers,returnFirstTwoDrivers)=> returnFirstTwoDrivers(drivers);