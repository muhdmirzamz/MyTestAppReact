const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 9000

var itemsArr = []

app.use( (req, res, next) => {
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/test", (req, res) => {
    console.log(`Hello`)
});

app.post("/addItem", (req, res) => {
    console.log(`item: ${JSON.stringify(req.body.todo)}`)

    let todo = req.body.todo
    itemsArr.push(todo)
    res.send(itemsArr)
})

app.post("/removeItem", (req, res) => {
  console.log(`in Remove Item`)

  let itemId = req.body.itemId
  itemsArr.splice(itemId, 1)

  res.send(itemsArr)
})

app.get("/getItems", (req, res) => {
  console.log(`Getting items`)
  res.send(itemsArr)
})

app.listen(port, () => console.log("App listening at https://localhost:${" + port + "}"))