// This file is used by Netlify to create functions which run once before being destroyed. With this in mind,  the below code was written to serve
// as a set of instructions for the code to be created by Netlify. The code below `exports.handler` is the code which is run by Netlify - it is
// the main function of this file

// `require` is an older version of import
// The code below essentially attaches all the variables in the .env file to the process environment
require("dotenv").config();

// Below is an example of passing an argument to a function directly after the function has been declared/written
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// `exports.handler` is an older version of `export`
// The code below is essentially a stripped down Express function - a very basic function which receives an event and does something with it.
exports.handler = async(event) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'aud',
            payment_method_types: ['card'],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch(error) {
        console.error(error);

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        }
    };
};
