export const activeStat = stats =>
  stats.confirmed - (stats.deaths + stats.recovered);

export const createRate = (confirmed, stat) => {
  const percentage = (stat / confirmed) * 100;

  if (stat === 0 || Number.isInteger(percentage) === true) {
    return percentage;
  }

  return percentage.toFixed(3);
};
