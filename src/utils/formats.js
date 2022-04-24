export const moneyFormat = (value) => {
  const newValue = Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",

  }).format(value);

  return newValue;
}

export const dateFormat = (value) => {
  let newDateValue = Date.parse(value);

  const newValue = Intl.DateTimeFormat("es-CO", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(newDateValue);

  return newValue;
}

