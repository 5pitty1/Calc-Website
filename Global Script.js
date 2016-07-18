$(document).ready(function () {

    $("#menu, #shade").click(function () {
        $("#sideBar").toggle("slide", 250);
        $("#shade").toggle("fade", 250);
    });
    $("#resources").click(function () {
        $("#resContainer").toggleClass("show");
    });

});

function showTopics() {
    document.getElementById("topicsContainer").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#topicsBtn, #topicsContainer, #topicsContainer *')) {
        var dropdown = document.getElementById("topicsContainer");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
    if (!event.target.matches('#resources, #resources *, #resContainer, #resContainer *')) {
        var dropdown2 = document.getElementById("resContainer");
        if (dropdown2.classList.contains('show')) {
            dropdown2.classList.remove('show');
        }
    }
};