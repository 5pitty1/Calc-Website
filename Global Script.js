$(document).ready(function () {

    $("#menu, #shade").click(function () {
        $("#sideBar").toggle("slide", 250);
        $("#shade").toggle("fade", 250);
    });
    $("#resBtn").click(function () {
        $("#resContainer").toggleClass("show");
    });

    $("#resizeBar").draggable({
        axis: "x",
        containment: "#tutorial",
        refreshPositions: true,
        drag: function () {
            var offset = $(this).offset();
            var xPos = offset.left;
            $("#right").css({
                "left": xPos
            });
            $("#left").css({
                "right": "calc(100vw - " + xPos + "px)"

            });
        },
        stop: function () {
            var offset = $(this).offset();
            var xPos = offset.left;
            $("#right").css({
                "left": (xPos / $(document).width())*100 + "%"
            });
            $("#left").css({
                "right": (1 - (xPos / $(document).width()))*100 + "%"
            });
            $(this).css({
                "left": (xPos / $(document).width())*100 + "%"
            })

        }
    });

});

function showTopics() {
    document.getElementById("topicsContainer").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#topics, #topics *')) {
        var dropdown = document.getElementById("topicsContainer");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
    if (!event.target.matches('#resources, #resources *')) {
        var dropdown2 = document.getElementById("resContainer");
        if (dropdown2.classList.contains('show')) {
            dropdown2.classList.remove('show');
        }
    }
};