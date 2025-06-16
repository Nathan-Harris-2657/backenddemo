import express from "express";
const app = express();
export default app;
// import { getNumbers, addNumber } from "./db/numbers.js";

import numbersRouter from "./api/numbers.js"

// Preprocessing middleware = middleware that goes before all of your route handlers



// We need to tell Express to look at the request body
// Body-parsing middleware
// This tells Express to parse and read JSON request bodies
// import this goes before put and post
app.use(express.json());

// Logging middleware = just log all of the requests that come through
// `app.use` means use this middleware for all requests (app-level middleware)
// `next` is a function that means: pass the request to the next middleware
app.use((req,res, next) =>{
  console.log(req.method, req.originalUrl);
  next();
});


// GET / to send the message "Hello world!"
app.route("/").get((req, res) => {
  res.send("Hello world!");
});

// Use numbersRouter as the middleware for the /numbers route
// This will prepend "/numbers" to all the routes in numbersRouter!
app.use("/numbers", numbersRouter)




// Error-handling middleware should go AFTER all routing middleware
// Calling next(e) with an argument / error will skip directly to this one
// 4 parameters is how Express defines it as the error-handling middleware
app.use((error,req,res,next)=>{
  console.error(error)
  res.status(500).send("server destoryed")
})
