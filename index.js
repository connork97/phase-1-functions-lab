// Code your solution in this file!
const hq = 42;
const blocksToFeet = 264;
function distanceFromHqInBlocks(someValue) {
    let blocksDistance = Math.abs(someValue - hq);
    return blocksDistance;
}


function distanceFromHqInFeet(someValue) {
  let feetDistance = distanceFromHqInBlocks(someValue) * blocksToFeet;
  return feetDistance;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * blocksToFeet);
}

let feetTraveled;
function calculatesFarePrice(start, destination) {
    feetTraveled = Math.abs((start - destination) * blocksToFeet);
    if (feetTraveled <= 400) {
        return 0;
    } else if (feetTraveled > 400 && feetTraveled <= 2000) {
        return (feetTraveled - 400) * 0.02;
    } else if (feetTraveled > 2000 && feetTraveled < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}