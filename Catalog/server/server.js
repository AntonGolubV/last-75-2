const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const url = require("url");
const port = 5000;

const history = require("connect-history-api-fallback");

const {
  dataSmartphone,
  getDeviceBySubname,
  filterByParam,
  pushNewObjById,
  pushNewObjByKey,
} = require("./data/data");

let lastArrFromServer = [];
let favSmartArr = [];
let basketSmartArr = [];
let comparison = [];

const app = express();

app.use(history());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/get/Smartphone/ByBrand", (req, res) => {
  const { brand } = req.query;
  let dataFromServer = dataSmartphone(brand);
  lastArrFromServer = dataFromServer;
  res.json(dataFromServer);
});
app.get("/get/Smartphone/BySubname", (req, res) => {
  const { subName } = req.query;
  let dataFromServer = getDeviceBySubname(subName);
  lastArrFromServer = dataFromServer;
  res.status(200).json(dataFromServer);
});
app.post("/get/Smartphone/ByParam", (req, res) => {
  let filterObj = filterByParam(req.body.params.objParam);
  lastArrFromServer = filterObj;
  res.status(200).json(filterObj);
});
app.post("/post/Smartphone/ByKey", (req, res) => {
  let { key } = req.body.params;
  favSmartArr = pushNewObjByKey(favSmartArr, key, lastArrFromServer);
});
app.post("/post/Smartphone/ById", (req, res) => {
  let { id } = req.body.params;
  basketSmartArr = pushNewObjById(basketSmartArr, id, lastArrFromServer);
});
app.post("/post/Smartphone/Comparison", (req, res) => {
  let { id } = req.body.params;
  comparison = pushNewObjById(comparison, id, lastArrFromServer);
});
app.get("/get/Smartphone/ByFav", (req, res) => {
  res.status(200).json(favSmartArr);
});
app.get("/get/Smartphone/ByBasket", (req, res) => {
  res.status(200).json(basketSmartArr);
});
app.get("/get/Smartphone/ByComparison", (req, res) => {
  res.status(200).json(comparison);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
