const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001; // Choose any port you prefer

// Middleware
app.use(bodyParser.json());

// Dummy data for initial events
let events = [];

// Routes
app.get("/api/events", (req, res) => {
  res.json(events);
});

app.post("/api/events", (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.json(newEvent);
});

app.put("/api/events/:id", (req, res) => {
  const eventId = req.params.id;
  const updatedEvent = req.body;

  events = events.map(event => {
    if (event.id === eventId) {
      return updatedEvent;
    } else {
      return event;
    }
  });

  res.json(updatedEvent);
});

app.delete("/api/events/:id", (req, res) => {
  const eventId = req.params.id;

  events = events.filter(event => event.id !== eventId);

  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
