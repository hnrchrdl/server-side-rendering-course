import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  const path = req.path;
  matchRoutes(Routes, path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  });

  return res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
