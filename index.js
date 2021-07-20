function distanceFromHqInBlocks(pickupLocation) {
   
    let blocks = Math.abs(pickupLocation - 42)
    return blocks
}

function distanceFromHqInFeet (blocksAway) {
    let feet = distanceFromHqInBlocks(blocksAway) * 264
    return feet
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let distance =  Math.abs(startBlock - endBlock) * 264
    return distance
}

// function calculatesFarePrice(start, destination) {
//     let fare;
//     let fareFeet = distanceTravelledInFeet(start, destination);
//     console.log('fareFeet', fareFeet)
//     if(fareFeet <= 400) {
//         fare = 0
//     }else if((fareFeet > 400) && (fareFeet <= 2000)){
//         fare = (fareFeet - 400) * 2 / 100
//     }else if((fareFeet > 2000) && (fareFeet <= 2500)) {
//         fare = 25
//     }else{ 
//         fare = 'cannot travel that far'
//     }
//     return fare
// }


function calculatesFarePrice(start, destination) {
    
    let fareFeet = distanceTravelledInFeet(start, destination);
    console.log('fareFeet', fareFeet)
   let fare;
   switch(true) {
     case fareFeet <= 400:
        fare = 0
        break;
     case ((fareFeet > 400) && (fareFeet <= 2000)):
        fare = (fareFeet - 400) * 2 / 100
        break;
     case ((fareFeet > 2000) && (fareFeet <= 2500)):
        fare = 25
        break;
     case (fareFeet > 2500):
        fare = 'cannot travel that far'
        break;
    }
    return fare
}
calculatesFarePrice(45, 53)
