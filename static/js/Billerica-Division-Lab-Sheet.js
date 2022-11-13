/*jshint esversion: 6 */


function create_Table(div_to_fill_id, title, subtitle, list_of_labels) {
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
            '        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">'+
            '    </div>' +
            '</div>';




    }
}


//'            <input type="text" class="form-control" aria-label="Small"' +
//'                   aria-describedby="inputGroup-sizing-sm">' +

