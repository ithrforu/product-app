export const formatPrice = (price: string, locale: string, currency: string) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  });
  
  return formatter.format(+price);
}