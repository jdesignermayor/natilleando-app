const LOCALE_DEFAULT = "es-CO";

export const moneyFormat = (value) => {
  const newValue = Intl.NumberFormat(LOCALE_DEFAULT , {
    style: "currency",
    currency: "COP",
  }).format(value);

  return newValue;
};

export const dateFormat = (value) => {
  const newDateValue = Date.parse(value);
  const newValue = Intl.DateTimeFormat(LOCALE_DEFAULT, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(newDateValue);

  return newValue;
};
