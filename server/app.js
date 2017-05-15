const express = require('express');
const path = require('path');

const app = express(); // ???? wtf ???

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build'))); // What the hell does this do???

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')); 
  // how does this path.resolve work? the directory of index.html is ../public/index.html, where have we specified to return this path?
});

app.get('/boards', (req, res) => {
	return res.json([{"bass is beast": true, "dom is noob": true }])
})

app.get('/boards/testboard', (req, res) => {
	res.send("test worked")
})

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`); // What does this listen for on port 9000? aka. what will we return?
});