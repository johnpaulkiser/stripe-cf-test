import Stripe from "stripe";

export function stripe() {
  try {
    return new Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
  } catch (error) {
    console.error(error);
  }
}
