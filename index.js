function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); // Using Math.abs to handle negative values
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // Each block is 264 feet long
  }

  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264; // Each block is 264 feet long
  }

  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
  
    if (feetTravelled <= 400) {
      return 0; // First 400 feet are free
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
      return 25; // Flat fare for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
  }
  
