// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var meal = $(this).data("meal");

    var mealState = {
      devoured: meal
    };

    // Send the PUT request.
    $.ajax("/api/pizzas/" + id, {
      type: "PUT",
      data: mealState
    }).then(
      function() {
        console.log("changed devoured to", meal);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPizza = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/pizzas", {
      type: "POST",
      data: newPizza
    }).then(
      function() {
        console.log("created new Pizza");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-pizza").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/pizzas/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted Pizza", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
