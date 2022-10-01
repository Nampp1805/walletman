function button_right_content_1() {
    var change_img2 = document.getElementById("change_img");
    change_img2.style.backgroundImage = "url('Img/js_conten1.webp')";
}
function button_left_content_1() {
    var change_img2 = document.getElementById("change_img");
    change_img2.style.backgroundImage = "url('Img/Leader-Collection-Banner.webp')";
}
function button_promotion() {
    var none_row_promotion = document.getElementById("row-promotion");
    none_row_promotion.style.display = "none";
}
function scrollHeader() {
    if (document.documentElement.scrollTop > 290) {
        document.getElementById("row-header").style.position = "fixed";
        document.getElementById("row-header").style.backgroundColor = "white";
        document.getElementById("row-header").style.boxShadow = "0 0 7px #0003";
        document.getElementById("row-header").style.animation="scroll 1s both";
    }
    else {
        document.getElementById("row-header").style.position = "relative";
        document.getElementById("row-header").style.backgroundColor = "rgba(255,255,255,.7)";
        document.getElementById("row-header").style.boxShadow = "none";
        document.getElementById("row-header").style.animation="none";
    }
}