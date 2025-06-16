// Import the app from the app.js file
import app from "./app.js";

// Define a port constant
const PORT = 3000; // 3000 is a common backend port

// Tell the app to listen on that port
// and print something to the terminal to let us know
// that it is up and running
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
