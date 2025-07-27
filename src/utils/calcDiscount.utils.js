export function calcDiscount({ price, priceAfterDiscount }) {


  const discount = ((price - priceAfterDiscount) / price) * 100;
  return discount.toFixed();
}
