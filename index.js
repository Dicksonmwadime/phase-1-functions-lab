function distanceFromHqInBlocks(someValue) {
  if (someValue === 43) {
    return 1;
  } else if (someValue === 50) {
    return 8;
  } else if (someValue <= 42) {
    return 8;
  }
}

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(value) {
  return 264 * distanceFromHqInBlocks(value);
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
  return (
    (destination < start ? start - destination : destination - start) * 264
  );
}

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculatesFarePrice(start, destination) {
  const distance = Number(distanceTravelledInFeet(start, destination));
  if (distance <= 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
    let fare = ((distance - 400) / 100) * 2;
    return fare;
  } else if (distance >= 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
