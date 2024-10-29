export const getUniqueColor = (index: number) => {
  const hue = (120 + index * 137.5) % 360;
  return `hsl(${hue}, 50%, 60%)`;
};