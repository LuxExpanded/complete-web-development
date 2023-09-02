$("h1").addClass("big-and-beautiful");
$("button").addClass(" btn btn-outline-warning");
$("button").text("Toggle Me!")
var buttons = $("button");
var heading = $("h1");

heading.html("<em>I need Dick!!</em>");

// $("h1").click(function () {
//     heading.toggleClass("big-and-beautiful small-and-cute")
// })

$("button").click(function () {
    buttons.toggleClass("btn-outline-warning btn-warning")
})

$("button.d").click(function () {
    buttons.removeClass("btn-outline-warning")
    buttons.toggleClass("btn-outline-dark btn-dark")
})

$("body").keypress(function(event){
    var display = event.key
    $("h1").text(display)
});

$("button").on("click", function () {
    $("h1").toggle();
})