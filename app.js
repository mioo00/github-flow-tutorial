$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
    $("input").val("");
});

$(document).on("channge","input[type=checkbox]",function () {
    if($(this).is(":checked")) {
        $(this).perent().css("text-decoretion","line-through");
    } else {
        $(this).perent().css("text-decoretion","none");
    }
});