var orm = require("../config/orm.js");

var pizza = {
  all: function(cb) {
    orm.all("pizzas", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("pizzas", [
      "pizza_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("pizzas", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = pizza;
