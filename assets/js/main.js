$(document).ready(function () {
    $(".load-more").click(function () {
        $("#part201").css({
            "display": "block"
        })
        $("#part202").css({
            "display": "block"
        })
        $("#part203").css({
            "display": "block"
        })
        $("#part204").css({
            "display": "block"
        })
        $("#part205").css({
            "display": "block"
        })
        $("#part206").css({
            "display": "block"
        })
        $("#part207").css({
            "display": "block"
        })
        $("#part208").css({
            "display": "block"
        })
        $("#part209").css({
            "display": "block"
        })
        $("#part210").css({
            "display": "block"
        })
        $("#part211").css({
            "display": "block"
        })
        $("#part212").css({
            "display": "block"
        })
        $("#part213").css({
            "display": "block"
        })
        $('.load-more').css({
            "display": "none"
        })
    })
})



$(document).ready(function () {
    like = 0;
    $(".like").click(function () {
        if (like == 0) {
            $(".like").css({
                "color": "red",
            });
            like = 1;
        } else if (like == 1) {
            $(".like").css({
                "color": "grey"
            });
            like = 0;
        }
    });
});

$(document).ready(function () {
    cat = 0;
    $(".All-category").click(function () {
        if (cat == 0) {
            $("#All-category").css({
                "display": "block",
            });
            $(".fa-angle-down").css({
                "transform": "rotate(180deg)",
            });
            cat = 1;
        } else if (cat == 1) {
            $("#All-category").css({
                "display": "none"
            });
            $(".fa-angle-down").css({
                "transform": "rotate(0deg)",
            });
            cat = 0;
        }
    });
});

function showdiv() {
    var select_status = $('#messagetype').val();

    if (select_status == 'all') {
        $('.my-card').show();
        $('.load-more').hide();
    } else if (select_status == 'india') {
        $('.india').show();
        $('.kochi').hide();
        $('.kerala').hide();
        $('.tamil-nadu').hide();
        $('.load-more').hide();
    } else if (select_status == 'kochi') {
        $('.india').hide();
        $('.kochi').show();
        $('.kerala').hide();
        $('.tamil-nadu').hide();
        $('.load-more').hide();
    } else if (select_status == 'kerala') {
        $('.india').hide();
        $('.kochi').hide();
        $('.kerala').show();
        $('.tamil-nadu').hide();
        $('.load-more').hide();
    } else if (select_status == 'tamil-nadu') {
        $('.india').hide();
        $('.kochi').hide();
        $('.kerala').hide();
        $('.tamil-nadu').show();
        $('.load-more').hide();
    }

}



$(document).ready(function () {
    $(".login").click(function () {
            $("#login-page").css({
                "display": "flex"
            })
            $("body").css({"overflow":"hidden"});
    });
});

$(document).ready(function () {
    $(".close-button").click(function () {
            $("#login-page").css({
                "display": "none"
            })
            $("body").css({"overflow":"visible"});
    });
});