export const moneyFormat = (value) =>{
    const newValue = Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "COP",
    }).format(value);

    return newValue;
}

export const dateFormat = (value) => {
    const newValue = Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(Date.now(value));
      
    return newValue;
}

