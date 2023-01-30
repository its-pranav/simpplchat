// Define a route to get and post chat messages
app.route("/messages")
  .get((req, res) => {
    // Get messages from the database
    db.collection("messages").find({}).toArray((err, messages) => {
      res.send(messages);
    });
  })
  .post((req, res) => {
    // Add a new message to the database
    const message = {
      username: req.body.username,
      text: req.body.text,
      timestamp: new Date()
    };
    db.collection("messages").insertOne(message, (err, result) => {
      res.send(result);
    });
  });
