/*jshint esversion: 6 */


function create_Table(div_to_fill_id, title, subtitle, list_of_labels) {
    const div_to_fill = document.getElementById(div_to_fill_id);

    //Title Of The Table
    div_to_fill.innerHTML +=
        "<!--" + title + "-->" +
        '<div class="row">' +
        '    <div class="p-3 mb-2 bg-success text-white d-flex justify-content-center">' +
        '        <h6>' + title + '</h6>' +
        '    </div>' +
        '</div>';

    //Table Vertical Labels.
    for (let i = 0; i < list_of_labels.length; i++) {
        div_to_fill.innerHTML +=
            "<!--" + list_of_labels[i] + "-->" +
            '<div class="row mt-1" class="input_data_row">' +
            '   <div class="col" id="data_labels">' +
            '       <label for="'+ title + ' ' + list_of_labels[i] + '" class="text_label" class="display_label">' + list_of_labels[i] + ':</label>' +
            '   </div>' +

            '   <div class="col" id="data_user_input" >' +
            '       <input type="text" class="data_input_field" id="' + title + ' ' + list_of_labels[i] +'">' +
            '   </div>'+
            '</div>';


    }
}


function create_Table_2(div_to_fill_id, title, subtitle, list_of_labels) {
    const div_to_fill = document.getElementById(div_to_fill_id);

    //Title Of The Table
    div_to_fill.innerHTML +=
        "<!--" + title + "-->" +
        '<div class="row">' +
        '    <div class="p-3 mb-2 bg-info text-white d-flex justify-content-center">' +
        '        <h4>' + title + '</h4>' +
        '    </div>' +
        '</div>';

    //Potential SubTitles for tables that need to expand horizontally
    if (subtitle) {
        div_to_fill.innerHTML += '<div class="row" id="sub_title_div">'
        document.getElementById("sub_title_div").innerHTML += '<div class="col">'

        for (let i = 0; i < sub_title.length; i++) {
            console.log(sub_title[i]);
            document.getElementById("sub_title_div").innerHTML +=
                '<div class="col">' +
                '    <h4>' + sub_title[i] + '</h4>' +
                '</div>';
        }
    }

    //Table Vertical Labels.
    for (let i = 0; i < list_of_labels.length; i++) {
        console.log(list_of_labels[i]);
        div_to_fill.innerHTML +=
            "<!--" + list_of_labels[i] + "-->" +
            '<div class="row">' +
            '    <div class="col-1">' +
            '        <div class="input-group input-group-sm mb-1">' +
            '            <div class="input-group-prepend">' +
            '                <span class="input-group-text" id="inputGroup-sizing-sm">' + list_of_labels[i] + '</span>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="col">' +
            '        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">' +
            '    </div>' +
            '</div>';
    }
}


//draggable divs
// Make the DIV element draggable:


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


