$("button").click(() => {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: (data) => {
      $.each(data, (_, value) => {
        const listItem = $("ul")
          .append(`<li>${value.name}</li>`)
          .addClass(
            "list-group-item list-group-item-action list-group-item-success" )
        listItem.click(function () {
          alert(value.name);
        });
      });
    },
    error: (error) => {
      console.log(error);
    }
  });
});
