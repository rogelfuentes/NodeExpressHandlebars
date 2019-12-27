var express = require("express");

var router = express.Router();
var pizza = require("../models/pizza.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/pizzas");
});

router.get("/pizzas", function(req, res) {
  // express callback response by calling pizza.selectAllpizza
  pizza.all(function(pizzaData) {
    // wrapper for orm.js that using MySQL query callback will return pizza_data, render to index with handlebar
    res.render("index", { pizza_data: pizzaData });
  });
});

// post route -> back to index
router.post("/pizzas/create", function(req, res) {
  // takes the request object using it as input for pizza.addpizza
  pizza.create(req.body.pizza_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/pizzas/:id", function(req, res) {
  pizza.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
