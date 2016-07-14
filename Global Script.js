function openTopics() {
    document.getElementById("topicsContainer").classList.toggle("show");
}

$(document).ready(function () {
    $("#topicsContainer, #topicsbtn").click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function(){
        $("#topicsContainer").removeClass("show");
    });
});