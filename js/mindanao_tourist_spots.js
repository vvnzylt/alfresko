var scroll_to_top_button = document.getElementById("scroll_to_top_button");
scroll_to_top_button.onclick = function() {
    document.getElementById('mindanao_quick_overview_container').scrollIntoView();
}

// For cards to make it clickable and redirect it to their corresponding pages
var cards_aliwagwag_falls = document.getElementById("cards_aliwagwag_falls");
var cards_lake_sebu = document.getElementById("cards_lake_sebu");


cards_aliwagwag_falls.onclick = function() {
    window.location.href = "aliwagwag_falls.html";
}

cards_lake_sebu.onclick = function() {
    window.location.href = "lake_sebu.html";
}
