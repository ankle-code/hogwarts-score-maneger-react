export const gainPoints = (points, house) => ({
  type: "GAIN_POINTS",
  points: Number(points),
  house,
});

export const losePoints = (points, house) => ({
  type: "LOSE_POINTS",
  points: Number(points),
  house,
});
