import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello chinggis");
});

app.listen(8989, () => {
  console.log("server running at http;//localhost:8989");
});
