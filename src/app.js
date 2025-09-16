import express from "express";

const app = express();

const Port = 3000;

app.get("/user", (req, res) => {
  res.send({
    firstName: "Faizan",
    lastName: "Gandhi",
  });
});

app.post("/user", (req, res) => {
  res.send("Data saved successfully");
});
app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.listen(Port, () => {
  console.log(`Server running on port:${Port}`);
});
