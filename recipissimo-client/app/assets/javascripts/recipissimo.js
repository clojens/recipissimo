var initSearchBox = function(callback) {
    var searchTimeout = null;
    jQuery("#recipe-search-text").on("keypress", function() {
        if (searchTimeout != null) {
            clearTimeout(searchTimeout);
        }

        searchTimeout = setTimeout(function() {
            callback(jQuery("#recipe-search-text").val());
        }, 500);
    });
}

var clearSearchResults = function() {
    jQuery("#search-results").empty();
}

var addSearchResult = function(recipeId, name, url) {
    jQuery("#search-results").append(
        jQuery("<li>")
            .draggable({revert:true})
            .data("recipe-id", recipeId)
            .append(jQuery("<a>").attr("href", url).attr("target", "_blank").text(name)));
}

var createCalendarRow = function() {
    var tr = jQuery("<tr>");
    jQuery("#calendar").append(tr);
    return tr;
}

var createCalendarDay = function(tr, year, month, day, text) {
    tr.append(
        jQuery("<td>").text(text).droppable({
            hoverClass: "highlight",
            tolerance: "pointer",
            drop: function(event, ui) {
                alert(ui.draggable.data("recipe-id"));
            }
        })
    );
}

