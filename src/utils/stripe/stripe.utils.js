// `loadStripe` indicates to stripe who this project belongs to
import { loadStripe } from '@stripe/stripe-js';

// The code below places the `REACT_APP_PUBLISHABLE_KEY` within the process.env
// The code below loads our stripe instance with our publishable key which identifies to Stripe that this is in fact our application
// export const vvv=process.env.REACT_APP_PUBLISHABLE_KEY;
// export const vv = "I love Ingrid";
export const stripePromise =  loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
