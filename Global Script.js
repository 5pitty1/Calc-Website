$(document).ready(function () {

    $("#menu, #sideShade").click(function () {
        $("#sideBar").toggle("slide", 250);
        $("#sideShade").toggle("fade", 250);
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
            var xPos = offset.left + 4;
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
                "left": ((xPos + 4) / $(document).width())*100 + "%"
            });
            $("#left").css({
                "right": (1 - ((xPos + 4) / $(document).width()))*100 + "%"
            });
            $(this).css({
                "left": ((xPos) / $(document).width())*100 + "%"
            })

        }
    });

    $("#searchBtn").click(function () {
        $("#searchHead").addClass("enter");
        $("#searchShade").toggle("fade", 500);
        $("#mainHead").addClass("leave");
        $("#search").focus();
    });

    $("#searchIcon").click(function() {
        $("#search").focus();
    });

    $("#closeSearch, #searchShade").click(function () {
        $("#searchHead").removeClass("enter");
        $("#searchShade").toggle("fade", 500);
        $("#mainHead").removeClass("leave");
        setTimeout(function() {
            $("#search").val("");
        }, 250);
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            //Search Bar
            $("#searchHead").removeClass("enter");
            $("#searchShade").fadeOut(500);
            $("#mainHead").removeClass("leave");
            setTimeout(function() {
                $("#search").val("");
            }, 250);

            //Topics
            $("#topicsContainer").removeClass("show");

            //Resources
            $("#resContainer").removeClass("show");

            //Sidebar
            $("#sideBar").hide("slide", 250);
            $("#sideShade").fadeOut(250);
        }
    });

});

function showTopics() {
    document.getElementById("topicsContainer").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#topics, #topics *, #topicsContainer, #topicsContainer *')) {
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


function setCookie ( cookie_name, cookie_value, lifespan_in_days, valid_domain )
{
    var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name + "=" + encodeURIComponent( cookie_value ) +
    "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
    "; path=/" + domain_string +
    "; secure";
}

function getCookie(name){
    var c = document.cookie.split("; ");
    var cookies = {};

    for(var i = c.length-1; i>0; i--){
        var C = c[i].split('=');
        cookies[C[0]] = C[1];
    }

    return cookies[name];
}

function deleteCookie ( cookie_name, valid_domain )
{
    var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name + "=; max-age=0; path=/" + domain_string ;
}