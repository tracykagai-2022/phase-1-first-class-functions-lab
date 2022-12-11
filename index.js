[14:32, 12/10/2022] Boniface Moringa School Online: /should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(0, 2)];
    return drivers;
}

//should return an array of the last two drivers
const returnLastTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(driversArray.length - 2)];
    return drivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare=12) {
        return fare * int;
    }
}



const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}



const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}


function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}


  