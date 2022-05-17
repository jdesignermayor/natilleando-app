const DEFAULT_PERCENT_VALUE = 0.25;

export const calculateTotal = (value) => {
  const percentValue = value * DEFAULT_PERCENT_VALUE;
  const totalValue = value - percentValue;

  return totalValue;
};