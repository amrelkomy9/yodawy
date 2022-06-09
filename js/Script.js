$(function() {
    $("li").click(function() {
        let id = $(this).attr("data-target");
        console.log($(id).hasClass("show"));
        $(".left-dialogs div").removeClass("show");
        $(id).addClass("show");
    });
    $(".close").click(function(e) {
        e.preventDefault();
        $(this).parent().parent().removeClass("show");
    });
    $(".btns a")
        .not(".close")
        .click(function(e) {
            e.preventDefault();
            let bg = $(this).css("background-color");
            console.log($(this).css("background-color"));
            let dataTarget = $(this).parent().parent().attr("id");
            let selector = "#" + dataTarget;
            $("li[data-target='" + selector + "']").css("background-color", bg);
        });
});