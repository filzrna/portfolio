var user1 = {user: "admin", password: "987654321"};
var user2 = {user: "guest", password: "123456789"};
function fav() {
    var loged = localStorage.getItem("log");
    if (loged == 1) {
        document.getElementById("fav").style.display = "block";
    }
}
function mute() {
    var on_off = localStorage.getItem("count");
    if (on_off % 2 == 0) {
        localStorage.count = 1;
        document.getElementById("sound2").src = ("../slike/mute.png");
    } else {
        localStorage.count = 2;
        document.getElementById("sound2").src = ("../slike/sound.png");
    }

}
function mute_2() {
    if (localStorage.getItem("count") % 2 == 1) {
        document.getElementById("sound2").src = ("../slike/mute.png");
    }
}
function show() {
    if (localStorage.getItem("log") == 1 && localStorage.getItem("profile") === "admin") {
        if (localStorage.getItem("Aalt") == 1) {
            document.getElementById("a_1").style.display = "inline-block";
        } else {
            document.getElementById("a_1").style.display = "none";
        }
        if (localStorage.getItem("Ablues") == 1) {
            document.getElementById("a_2").style.display = "inline-block";
        } else {
            document.getElementById("a_2").style.display = "none";
        }
        if (localStorage.getItem("Aclassic") == 1) {
            document.getElementById("a_3").style.display = "inline-block";
        } else {
            document.getElementById("a_3").style.display = "none";
        }
        if (localStorage.getItem("Acountry") == 1) {
            document.getElementById("a_4").style.display = "inline-block";
        } else {
            document.getElementById("a_4").style.display = "none";
        }
        if (localStorage.getItem("Aedm") == 1) {
            document.getElementById("a_5").style.display = "inline-block";
        } else {
            document.getElementById("a_5").style.display = "none";
        }
        if (localStorage.getItem("Afunk") == 1) {
            document.getElementById("a_6").style.display = "inline-block";
        } else {
            document.getElementById("a_6").style.display = "none";
        }
        if (localStorage.getItem("Ahip") == 1) {
            document.getElementById("a_7").style.display = "inline-block";
        } else {
            document.getElementById("a_7").style.display = "none";
        }
        if (localStorage.getItem("Ajpop") == 1) {
            document.getElementById("a_8").style.display = "inline-block";
        } else {
            document.getElementById("a_8").style.display = "none";
        }
        if (localStorage.getItem("Ajazz") == 1) {
            document.getElementById("a_9").style.display = "inline-block";
        } else {
            document.getElementById("a_9").style.display = "none";
        }
        if (localStorage.getItem("Ametal") == 1) {
            document.getElementById("a_10").style.display = "inline-block";
        } else {
            document.getElementById("a_10").style.display = "none";
        }
        if (localStorage.getItem("Apop") == 1) {
            document.getElementById("a_11").style.display = "inline-block";
        } else {
            document.getElementById("a_11").style.display = "none";
        }
        if (localStorage.getItem("Apunk") == 1) {
            document.getElementById("a_12").style.display = "inline-block";
        } else {
            document.getElementById("a_12").style.display = "none";
        }
        if (localStorage.getItem("Arnb") == 1) {
            document.getElementById("a_13").style.display = "inline-block";
        } else {
            document.getElementById("a_13").style.display = "none";
        }
        if (localStorage.getItem("Areggae") == 1) {
            document.getElementById("a_14").style.display = "inline-block";
        } else {
            document.getElementById("a_14").style.display = "none";
        }
        if (localStorage.getItem("Arock") == 1) {
            document.getElementById("a_15").style.display = "inline-block";
        } else {
            document.getElementById("a_15").style.display = "none";
        }
    }
    else if (localStorage.getItem("log") == 1 && localStorage.getItem("profile") === "guest") {
        if (localStorage.getItem("Galt") == 1) {
            document.getElementById("g_1").style.display = "inline-block";
        } else {
            document.getElementById("g_1").style.display = "none";
        }
        if (localStorage.getItem("Gblues") == 1) {
            document.getElementById("g_2").style.display = "inline-block";
        } else {
            document.getElementById("g_2").style.display = "none";
        }
        if (localStorage.getItem("Gclassic") == 1) {
            document.getElementById("g_3").style.display = "inline-block";
        } else {
            document.getElementById("g_3").style.display = "none";
        }
        if (localStorage.getItem("Gcountry") == 1) {
            document.getElementById("g_4").style.display = "inline-block";
        } else {
            document.getElementById("g_4").style.display = "none";
        }
        if (localStorage.getItem("Gedm") == 1) {
            document.getElementById("g_5").style.display = "inline-block";
        } else {
            document.getElementById("g_5").style.display = "none";
        }
        if (localStorage.getItem("Gfunk") == 1) {
            document.getElementById("g_6").style.display = "inline-block";
        } else {
            document.getElementById("g_6").style.display = "none";
        }
        if (localStorage.getItem("Ghip") == 1) {
            document.getElementById("g_7").style.display = "inline-block";
        } else {
            document.getElementById("g_7").style.display = "none";
        }
        if (localStorage.getItem("Gj_pop") == 1) {
            document.getElementById("g_8").style.display = "inline-block";
        } else {
            document.getElementById("g_8").style.display = "none";
        }
        if (localStorage.getItem("Gjazz") == 1) {
            document.getElementById("g_9").style.display = "inline-block";
        } else {
            document.getElementById("g_9").style.display = "none";
        }
        if (localStorage.getItem("Gmetal") == 1) {
            document.getElementById("g_10").style.display = "inline-block";
        } else {
            document.getElementById("g_10").style.display = "none";
        }
        if (localStorage.getItem("Gpop") == 1) {
            document.getElementById("g_11").style.display = "inline-block";
        } else {
            document.getElementById("g_11").style.display = "none";
        }
        if (localStorage.getItem("Gpunk") == 1) {
            document.getElementById("g_12").style.display = "inline-block";
        } else {
            document.getElementById("g_12").style.display = "none";
        }
        if (localStorage.getItem("Grnb") == 1) {
            document.getElementById("g_13").style.display = "inline-block";
        } else {
            document.getElementById("g_13").style.display = "none";
        }
        if (localStorage.getItem("Greggae") == 1) {
            document.getElementById("g_14").style.display = "inline-block";
        } else {
            document.getElementById("g_14").style.display = "none";
        }
        if (localStorage.getItem("Grock") == 1) {
            document.getElementById("g_15").style.display = "inline-block";
        } else {
            document.getElementById("g_15").style.display = "none";
        }
    }
}
function icon() {
    if (localStorage.getItem("log") == 1 && localStorage.getItem("profile") === "admin") {
        if (localStorage.getItem("Aalt") == 1) {
            document.getElementById("alt_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("alt_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Ablues") == 1) {
            document.getElementById("blues_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("blues_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Aclassic") == 1) {
            document.getElementById("classic_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("classic_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Acountry") == 1) {
            document.getElementById("country_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("country_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Aedm") == 1) {
            document.getElementById("edm_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("edm_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Afunk") == 1) {
            document.getElementById("funk_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("funk_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Ahip") == 1) {
            document.getElementById("hip_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("hip_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Ajpop") == 1) {
            document.getElementById("j_pop_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("j_pop_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Ajazz") == 1) {
            document.getElementById("jazz_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("jazz_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Ametal") == 1) {
            document.getElementById("metal_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("metal_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Apop") == 1) {
            document.getElementById("pop_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("pop_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Apunk") == 1) {
            document.getElementById("punk_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("punk_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Arnb") == 1) {
            document.getElementById("rnb_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("rnb_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Areggae") == 1) {
            document.getElementById("reggae_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("reggae_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Arock") == 1) {
            document.getElementById("rock_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("rock_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Ajazz") == 1) {
            document.getElementById("jazz_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("jazz_2").src = ("../slike/favorite.png");
        }
    } else if (localStorage.getItem("log") == 1 && localStorage.getItem("profile") === "guest") {
        if (localStorage.getItem("Galt") == 1) {
            document.getElementById("alt_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("alt_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gblues") == 1) {
            document.getElementById("blues_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("blues_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gclassic") == 1) {
            document.getElementById("classic_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("classic_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gcountry") == 1) {
            document.getElementById("country_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("country_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gedm") == 1) {
            document.getElementById("edm_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("edm_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gfunk") == 1) {
            document.getElementById("funk_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("funk_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Ghip") == 1) {
            document.getElementById("hip_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("hip_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gj_pop") == 1) {
            document.getElementById("j_pop_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("j_pop_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gjazz") == 1) {
            document.getElementById("jazz_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("jazz_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gmetal") == 1) {
            document.getElementById("metal_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("metal_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gpop") == 1) {
            document.getElementById("pop_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("pop_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Gpunk") == 1) {
            document.getElementById("punk_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("punk_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Grnb") == 1) {
            document.getElementById("rnb_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("rnb_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Greggae") == 1) {
            document.getElementById("reggae_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("reggae_2").src = ("../slike/favorite.png");
        }
        if (localStorage.getItem("Grock") == 1) {
            document.getElementById("rock_2").src = ("../slike/favorite_2.png");
        } else {
            document.getElementById("rock_2").src = ("../slike/favorite.png");
        }
    }
}
function log_like_a1() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("alt") && localStorage.Aalt != 1) {
            localStorage.Aalt = 1;
        } else if (document.getElementById("alt")) {
            localStorage.Aalt = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a2() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("blues") && localStorage.Ablues != 1) {
            localStorage.Ablues = 1;
        } else if (document.getElementById("blues")) {
            localStorage.Ablues = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a3() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("classic") && localStorage.Aclassic != 1) {
            localStorage.Aclassic = 1;
        } else if (document.getElementById("classic")) {
            localStorage.Aclassic = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a4() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("country") && localStorage.Acountry != 1) {
            localStorage.Acountry = 1;
        } else if (document.getElementById("country")) {
            localStorage.Acountry = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a5() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("edm") && localStorage.Aedm != 1) {
            localStorage.Aedm = 1;
        } else if (document.getElementById("edm")) {
            localStorage.Aedm = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a6() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("funk") && localStorage.Afunk != 1) {
            localStorage.Afunk = 1;
        } else if (document.getElementById("funk")) {
            localStorage.Afunk = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a7() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("hip") && localStorage.Ahip != 1) {
            localStorage.Ahip = 1;
        } else if (document.getElementById("hip")) {
            localStorage.Ahip = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a8() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("j_pop") && localStorage.Ajpop != 1) {
            localStorage.Ajpop = 1;
        } else if (document.getElementById("j_pop")) {
            localStorage.Ajpop = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a9() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("jazz") && localStorage.Ajazz != 1) {
            localStorage.Ajazz = 1;
        } else if (document.getElementById("jazz")) {
            localStorage.Ajazz = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a10() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("metal") && localStorage.Ametal != 1) {
            localStorage.Ametal = 1;
        } else if (document.getElementById("metal")) {
            localStorage.Ametal = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a11() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("pop") && localStorage.Apop != 1) {
            localStorage.Apop = 1;
        } else if (document.getElementById("pop")) {
            localStorage.Apop = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a12() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("punk") && localStorage.Apunk != 1) {
            localStorage.Apunk = 1;
        } else if (document.getElementById("punk")) {
            localStorage.Apunk = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a13() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("rnb") && localStorage.Arnb != 1) {
            localStorage.Arnb = 1;
        } else if (document.getElementById("rnb") && localStorage.Arnb != 0) {
            localStorage.Arnb = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a14() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("reggae") && localStorage.Areggae != 1) {
            localStorage.Areggae = 1;
        } else if (document.getElementById("reggae") && localStorage.Areggae != 0) {
            localStorage.Areggae = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_a15() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        if (document.getElementById("rock") && localStorage.Arock != 1) {
            localStorage.Arock = 1;
        } else if (document.getElementById("rock") && localStorage.Arock != 0) {
            localStorage.Arock = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g1() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("alt") && localStorage.Galt != 1) {
            localStorage.Galt = 1;
        } else {
            localStorage.Galt = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g2() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("blues") && localStorage.Gblues != 1) {
            localStorage.Gblues = 1;
        } else {
            localStorage.Gblues = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g3() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("classic") && localStorage.Gclassic != 1) {
            localStorage.Gclassic = 1;
        } else {
            localStorage.Gclassic = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g4() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("country") && localStorage.Gcountry != 1) {
            localStorage.Gcountry = 1;
        } else {
            localStorage.Gcountry = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g5() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("edm") && localStorage.Gedm != 1) {
            localStorage.Gedm = 1;
        } else {
            localStorage.Gedm = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g6() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("funk") && localStorage.Gfunk != 1) {
            localStorage.Gfunk = 1;
        } else {
            localStorage.Gfunk = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g7() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("hip") && localStorage.Ghip != 1) {
            localStorage.Ghip = 1;
        } else {
            localStorage.Ghip = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g8() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("j_pop") && localStorage.Gj_pop != 1) {
            localStorage.Gj_pop = 1;
        } else {
            localStorage.Gj_pop = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g9() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("jazz") && localStorage.Gjazz != 1) {
            localStorage.Gjazz = 1;
        } else {
            localStorage.Gjazz = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g10() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("metal") && localStorage.Gmetal != 1) {
            localStorage.Gmetal = 1;
        } else {
            localStorage.Gmetal = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g11() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("pop") && localStorage.Gpop != 1) {
            localStorage.Gpop = 1;
        } else {
            localStorage.Gpop = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g12() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("punk") && localStorage.Gpunk != 1) {
            localStorage.Gpunk = 1;
        } else {
            localStorage.Gpunk = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g13() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("rnb") && localStorage.Grnb != 1) {
            localStorage.Grnb = 1;
        } else {
            localStorage.Grnb = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g14() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("reggae") && localStorage.Greggae != 1) {
            localStorage.Greggae = 1;
        } else {
            localStorage.Greggae = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function log_like_g15() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "guest") {
        if (document.getElementById("rock") && localStorage.Grock != 1) {
            localStorage.Grock = 1;
        } else {
            localStorage.Grock = 0;
        }
    }
    if (log == 0) {
        alert("Niste prijavljeni.");
    }
}
function muted() {
    var on_off = localStorage.getItem("count");
    if (on_off % 2 == 0) {
        document.getElementById("music").autoplay = true;
        document.getElementById("music").load();
    } else {
        document.getElementById("music").autoplay = false;
        document.getElementById("music").load();
    }
}
function check() {
    var username = document.getElementById("nick").value;
    var password = document.getElementById("pass").value;
    if (username === user1.user && password === user1.password) {
        localStorage.log = 1;
        localStorage.profile = "admin";
        window.location.replace("../other/profile(admin).html");
    } else if (username === user2.user && password === user2.password) {
        localStorage.log = 1;
        localStorage.profile = "guest";
        window.location.replace("../other/profile(guest).html");
    } else {
        document.getElementById("result").innerHTML = "Wrong username or password";
    }
}
function log_profile() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log > 0 && profile === "admin") {
        window.location.replace("../other/profile(admin).html");
    } else if (log > 0 && profile === "guest") {
        window.location.replace("../other/profile(guest).html");
    } else {
        window.location.replace("../other/login.html");
    }
}
function log() {
    var log = localStorage.getItem("log");
    if (log > 0) {
        document.getElementById("button_log").innerHTML = "Log-out";
    } else {
        document.getElementById("button_log").innerHTML = "Login";
    }
}
function login_out() {
    var log = localStorage.getItem("log");
    if (log > 0) {
        localStorage.log = 0;
        window.location.replace("../other/index.html");
    } else {
        window.location.replace("../other/login.html");
    }
}
function favorites() {
    var log = localStorage.getItem("log");
    var profile = localStorage.getItem("profile");
    if (log == 1 && profile === "admin") {
        window.location.replace("../other/favorite(admin).html");
    } else if (log == 1 && profile === "guest") {
        window.location.replace("../other/favorite(guest).html");
    }
}
function last() {
    vIme = checkIme();
    vPrezime = checkPrezime();
    vSpol = checkSpol();
    vOib = checkOib();
    vEmail = checkEmail();
    vMob = checkMob();
    vNick = checkNick();
    vPass = checkPass();
    if (vIme && vPrezime && vSpol && vOib && vEmail && vMob && vNick && vPass === 1) {
        return document.forms["registracija"]["reg"].disabled = false;
    } else {
        return document.forms["registracija"]["reg"].disabled = true;
    }
}
function checkIme() {
    var ime = document.forms["registracija"]["ime"].value;
    var filterIme = /^[A-ZŠĐČĆŽ][a-zšđžčć]{2,}$/;
    var vIme = 0;
    if (!filterIme.test(ime.valueOf())) {
        vIme = 0;
        return vIme;
    } else {
        vIme = 1;
        return vIme;
    }
}
function alertIme() {
    vIme = checkIme();
    if (vIme == 0) {
        alert("Niste unijeli pravilno ime");
    }
}
function checkPrezime() {
    var prezime = document.forms["registracija"]["prezime"].value;
    var filterPrezime = /^[A-ZŠĐČĆŽ][a-zšđžčć]{3,}$/;
    var vPrezime = 0;
    if (!filterPrezime.test(prezime.valueOf())) {
        vPrezime = 0;
        return vPrezime;
    } else {
        vPrezime = 1;
        return vPrezime;
    }
}
function alertPrezime() {
    vPrezime = checkPrezime();
    if (vPrezime == 0) {
        alert("Niste unijeli pravilno prezime");
    }
}
function checkSpol() {
    var spol = document.forms["registracija"]["spol"].value;
    var filterSpol = /^odaberite$/;
    var vSpol = 0;
    if (!filterSpol.test(spol.valueOf())) {
        vSpol = 1;
        return vSpol;
    } else {
        vSpol = 0;
        return vSpol;
    }
}
function alertSpol() {
    vSpol = checkSpol();
    if (vSpol == 0) {
        alert("Niste odabrali spol");
    }
}
function checkEmail() {
    var email = document.forms["registracija"]["email"].value;
    var filterEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    var vEmail = 0;
    if (!filterEmail.test(email.valueOf())) {
        vEmail = 0;
        return vEmail;
    } else {
        vEmail = 1;
        return vEmail;
    }
}
function alertEmail() {
    vEmail = checkEmail();
    if (vEmail == 0) {
        alert("Niste pravilno unijeli Email");
    }
}
function checkNick() {
    var nick = document.forms["registracija"]["nick"].value;
    var filterNick = /^\w{3,15}$/;
    var vNick = 0;
    if (!filterNick.test(nick.valueOf())) {
        vNick = 0;
        return vNick;
    } else {
        vNick = 1;
        return vNick;
    }
}
function alertNick() {
    vNick = checkNick();
    if (vNick == 0) {
        alert("Niste unijeli pravilno korisnicko ime");
    }
}
function checkPass() {
    var pass = document.forms["registracija"]["pass"].value;
    var filterPass = /^\w{8,15}$/;
    var vPass = 0;
    var broj = 0;
    if (!filterPass.test(pass.valueOf())) {
        vPass = 0;
        return vPass;
    } else {
        vPass = 1;
        return vPass;
    }
    for (var i = 0; i <= 15; i++)
        if (pass[i] == /^\d/) {
            broj++;
        }
    if (broj < 0 && vPass == 1) {
        vPass = 0;
    }
}
function alertPass() {
    vPass = checkPass();
    if (vPass == 0) {
        alert("Niste unijeli pravilno lozinku");
    }
}
function alertRegistracija() {
    alert("Uspješno ste se registrirali");
}
