// Import the express library
import express from "express"

// Create a router
const router = express.Router()

// Export the router
export default router

// import functions from ../db/numbers.js
import { getNumbers, addNumber } from "../db/numbers.js";

// Express v5 will implicitly add the try/catch to this route

// Multiple methods for the same route -> chain the middleware functions together... get and post
router.route("/").get((req, res) => {
  const numbers = getNumbers();
  res.send(numbers);
})


.post((req,res)=>{
    if(!req.body) return res.status(400).send("Request body is required")
// this is where we define what we want in the body
// this says we need a number key in the request body
const {number} = req.body
if(!number) return res.status(400).send("Request body requires a number.")

// regex to check if number is all digits
if (!/^\d+$/.test(number))
     return res.status(400).send("Number must be a number.");

addNumber(+number)
res.status(201).send(number)
});


// GET /:num sends true/false if num exists
router.route("/:num").get((req, res) => {
  const numbers = getNumbers();
  const { num } = req.params;

  if (!numbers.includes(+num)) {
    return res.status(404).send(false);
  }

  res.send(true);
});
