var last_clicked_thumbnail;
var text_description = document.getElementById("text_description");
var image_container = document.getElementById("image_container");
var image_display = document.getElementsByClassName("image_display")[0];

function manageImage(el) {
    if(last_clicked_thumbnail != null) {
        last_clicked_thumbnail.classList.toggle("active-thumbnail");
    }
    el.classList.toggle("active-thumbnail");
    last_clicked_thumbnail = el;

    text_description.textContent = el.children[1].textContent;
    image_container.src = el.children[0].src;
    image_display.classList.add("active_image_display");
    console.log(el.children[0].src);
}

function manageClosingImage(el) {
    el.parentElement.classList.remove("active_image_display");
    last_clicked_thumbnail.classList.toggle("active-thumbnail");
    last_clicked_thumbnail = null;
}