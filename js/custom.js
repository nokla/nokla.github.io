$(function () {
    var config = {
        sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
        interval: 200,  // number = milliseconds for onMouseOver polling interval    
        over: doOpen,   // function = onMouseOver callback (REQUIRED)    
        timeout: 200,   // number = milliseconds delay before onMouseOut    
        out: doClose    // function = onMouseOut callback (REQUIRED)    
    };

    function doOpen() {
        $(this).addClass("hover");
        $('ul:first', this).css('visibility', 'visible');
    }

    function doClose() {
        $(this).removeClass("hover");
        $('ul:first', this).css('visibility', 'hidden');
    }

    // $("ul.dropdown li").hoverIntent(config);

    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});

function ShowHide(show, hide) {
    if (Array.isArray(show)) {
        show.forEach((element) => {
            ShowElement(element);
        });
    } else if (show != "") {
        ShowElement(show);
    }

    if (Array.isArray(hide)) {
        hide.forEach((element) => {
            HideElement(element);
        });
    } else if (hide != "") {
        HideElement(hide);
    }
}
function ShowElement(element) {
    if (document.getElementById(element)) {
        document.getElementById(element).style.display = '';
    }
}

function HideElement(element) {
    if (document.getElementById(element)) {
        document.getElementById(element).style.display = 'none';
    }
}

function State(value) {
    if (value == 1) {
        ShowHide(['lst1', 'lst4'], ['lst2', 'lst3', 'lst5', 'lst6']);
    }
    if (value == 2) {
        ShowHide(['lst2', 'lst5'], ['lst1', 'lst3', 'lst4', 'lst6']);
    }
    if (value == 3) {
        ShowHide(['lst3', 'lst6'], ['lst2', 'lst1', 'lst5', 'lst4']);
    }
}
