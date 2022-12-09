const parseData = (data) => {
  return data.split(/\r?\n/).map((move) => move.split(" "));
};

const countTailPositions = (moves, numberOfKnots) => {
  const {tailHistory} = makeMoves(moves, numberOfKnots);

  return tailHistory.length;
};

const isTouching = (positionA, positionB) => {
  const [aX, aY] = positionA;
  const [bX, bY] = positionB;

  return Math.abs(aX - bX) <= 1 && Math.abs(aY - bY) <= 1;
};

// Return the new position of a lead knot after moving one spot
// in a given direction.
const moveKnot = (originalPosition, direction) => {
  const [x, y] = originalPosition;
  switch (direction) {
    case "U":
      return [x, y + 1];

    case "D":
      return [x, y - 1];

    case "L":
      return [x - 1, y];

    case "R":
      return [x + 1, y];

    default:
      return originalPosition;
  }
};

// Given the position of a knot (lead) and the knot behind it (trail),
// return the new position of the trail. (If they are already adjacent,
// the trail’s position will not change.)
const moveTrailingKnot = (leadPosition, trailPosition) => {
  const [leadX, leadY] = leadPosition;
  let [trailX, trailY] = trailPosition;

  if (isTouching(leadPosition, trailPosition)) {
    return trailPosition;
  }

  if (leadX > trailX) {
    trailX +=1;
  } else if (leadX < trailX) {
    trailX -=1;
  }

  if (leadY > trailY) {
    trailY +=1;
  } else if (leadY < trailY) {
    trailY -=1;
  }

  return [trailX, trailY];
}

const makeMoves = (moves, numberOfKnots) => {
  const positions = Array.from(Array(numberOfKnots), () => [0, 0]);
  const tailIndex = numberOfKnots - 1;
  const tailHistory = [positions[tailIndex]];

  moves.forEach((move) => {
    const [direction, distance] = move;

    for (let index = 0; index < distance; index++) {
      const newLeadPosition = moveKnot(positions[0], direction);
      positions[0] = newLeadPosition;

      for (let knotIndex = 0; knotIndex < numberOfKnots -1; knotIndex++) {
        const leadIndex = knotIndex;
        const trailIndex = knotIndex + 1;
        const lead = positions[leadIndex];
        const trail = positions[trailIndex];

        const newTrail = moveTrailingKnot(lead, trail);
        positions[trailIndex] = newTrail;
        
        if (trailIndex === tailIndex) {
          const tail = positions[tailIndex];
          if (!tailHistory.some(position => position[0] === tail[0] && position[1] === tail[1])) {
            tailHistory.push(tail);
          }
        }
      }
    }
  });

  return {
    tailHistory
  }
};

module.exports = {
  countTailPositions,
  parseData,
};
