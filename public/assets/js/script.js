$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var pizza_id = $(this).children(".pizza_id").val();
    console.log(pizza_id);
    $.ajax({
      method: "PUT",
      url: "/pizzas/" + pizza_id
    }).then(function(data) {
      // reload page to display devoured pizza in proper column
      location.reload();
    });

  });
});
