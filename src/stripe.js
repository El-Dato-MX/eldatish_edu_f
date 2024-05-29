import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51LVgaTKBpIogN4FizAGcRYziXz8CumFYFxCKRnJAoBYNf6gE7ZX8WAPoE9pKeEqiaIDBUWaCx9PxFfqwK1zTo9q3009SvXHlas");

stripePromise.then(stripe => {
  console.log("Stripe loaded successfully:", stripe);
}).catch(error => {
  console.error("Error loading Stripe:", error);
});

export { stripePromise };

