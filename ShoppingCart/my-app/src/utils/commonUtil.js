export const formatCurrency = (value) => {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
