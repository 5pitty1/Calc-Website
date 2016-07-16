function openTopics() {
    document.getElementById("topicsContainer").classList.toggle("show");
}
function openResources() {
    document.getElementById("resContainer").classList.toggle("show");
}

$(document).ready(function () {
    $("#topicsContainer, #topicsbtn, #resBtn, #resContainer").click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function(){
        $("#topicsContainer").removeClass("show");
        $("#resContainer").removeClass("show");
    });
});