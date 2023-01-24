/*jshint esversion: 6 */


//create_Table() is for generic tables that take nothing but numbers as input.

//create_Press_Tables() creates the press tables. Seperate function because this table has labels that update
// automatically based on user input.

//create_Dynamic_Table() is for tables where not all user input will be numbers. Ex. Filtrate has the user record their
// initials.

//setup_HTML() creates all of the generic tables using "create_Table()" and includes their titles and input prompts.


let press_table_object = {
    table_title: "",
    table_subtitles: ["Feed", "Cake"],
    questions: {
        "Sample Wet": "input",
        "Tare": "input",
        "Difference Wet": "label",
        "Sample Dry": "input",
        "Difference Dry": "label",
        "Percent Solids": "label"
    }
}
let filtrate_obj = {
    "mL": {
        "Input Type": "number",
        "Default": "25"
    },
    "Dry Weight": {
        "Input Type": "number",
    },
    "Tare": {
        "Input Type": "number",
    },
    "Difference": {
        "Input Type": "Label",
    },
    "mg/L": {
        "Input Type": "Label",
    },
    "Operator": {
        "Input Type": "text",
    },
    "GT Used": {
        "Input Type": "Label",
    },

}
const gravity_thickener_obj = {
    "GT-1": {
        "Input Type": "number",
    },
    "GT-2": {
        "Input Type": "number",
    }
}

const
    table_structure = {
        "Influent":
            {
                "Time": "time",
                "Temp": "number",
                "PH": "number",
                "D.O.": "number",
                "Comp P.H.": "number",
                "ALK": "number",
                "S.S. (mL/L)": "number"
            },
        "Final Effluent":
            {
                "Time": "time",
                "Temp": "number",
                "PH": "number",
                "D.O.": "number",
                "Comp P.H.": "number",
                "ALK": "number",
                "S.S. (mL/L)": "number"
            },

        "Comp. pH/ALK": {
            "Primary p.H.": "number",
            "Primary Alk": "number",
            "Sec p.H.": "number",
            "Sec Alk": "number",
        },

        "Baker": {
            "Composite pH": "number",
            "Grab pH": "number",
        },

        "#2 D Box": {
            "Time": "number",
            "Temp": "number",
            "p.H.": "number",
            "D.O.": "number",
            "5 Min": "number",
            "10 Min": "number",
            "15 Min": "number",
            "20 Min": "number",
            "25 Min": "number",
            "30 Min": "number",
            "60 Min": "number"

        },
        "TSS": {

            "Influent": "number",
            "Primary": "number",
            "Secondary": "number",
            "Effluent": "number",
            "Baker": "number",
            "% Removal": "number",
            "MLSS": "number",
            "MLVSS": "number",
            "RASS": "number",
            "RASVSS": "number",
            "SVI": "number"

        },

        "RAS Pumps": {
            "RAS 1": "number",
            "RAS 2": "number",
            "RAS 3": "number",
            "RAS 4": "number",
            "RAS 5": "number",
            "Flow": "number"

        },

        "Aluminum": {
            "Comag Influent Q": "number",
            "Comag WAS Q": "number"
        },

        "Chlorine Residual": {

            "Q Effluent Chemical Control": "number",
            "Hydro Pump Online A or H": "number",
            "Hypo Tank Level": "number",
            "Residual Shed 1": "number",
            "Residual Shed 2": "number",
            "Residual Shed 3": "number",
            "Bisulfite Pump Online A or H": "number",
            "Bisulfite Tank Level": "number",
            "P.H.": "number",
            "High Chlorine Residual mg/L": "number",
            "Final Eff. Chlorine ug/L": "number"
        },

        "Total Q": {
            "WAS Q": "number",
            "Primary Sludge Q": "number",
            "RAS Q": "number",
            "Comag Was Q": "number",
            "Comag Influent Q": "number",

        },
        "Total-P": {

            "Secondary": "number",
            "Final Effluent": "number",

        },
        "Ammonia": {

            "Final Effluent": "number",
            "Nitrite": "number",
            "Nitrate": "number",

        },
        "BOD": {

            "Influent": "number",
            "Primary": "number",
            "Secondary": "number",
            "Effluent": "number",
            "Baker": "number",
            "% Removal": "number",

        },
        "COD": {

            "Influent": "number",
            "Baker": "number",

        },
        "Ecoli": {
            "Value": "number"
        },

        "Plant Chemicals": {
            "Today":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Yesterday":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Total":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
        },

        "Comag Chemicals": {
            "Today":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Yesterday":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Total":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
        },

        "Influent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },



        "Primary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "D Box TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "RAS TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Secondary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Final Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Baker TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Water Dept TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Influent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },



        "Primary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "D Box TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "RAS TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Secondary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Final Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Baker TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Water Dept TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },





    }

let test_obj = {}

class Table_Creator {
    constructor(title, question_and_input_dict) {

        this.title = title;
        this.question_and_input_dict = question_and_input_dict;


        //Find the div within the HTML File
        this.div = title.replaceAll(" ", "-") + "-Table"
        this.div_to_be_filled = document.getElementById(this.div);

        this.table_name = title + ' Table';


    }

    create_Table_Header() {
        console.log(this.div_to_be_filled)
        this.div_to_be_filled.innerHTML +=
            '<div class="Input-Table">' +
            '   <div class="Title-Row">' +
            '       <p>' + this.title + '</p>' +
            '   </div>' +
            '   <table id="' + this.table_name + '"> </table>' +
            '</div>';
    }


    create_Table_Body() {
        for (let [label, input_type] of Object.entries(this.question_and_input_dict)) {

            let table_to_fill = document.getElementById(this.table_name);
            let backend_label_text = this.title + ' ' + label;
            let row_to_be_fill = backend_label_text + '-Row'

            table_to_fill.innerHTML +=
                '<tr id="' + row_to_be_fill + '">' +
                '<td><label for="' + backend_label_text + '" class="text_label">' + label + ': </label></td>' +
                '</tr>';

            let row_to_fill = document.getElementById(row_to_be_fill)


            if (input_type === "number") {
                row_to_fill.innerHTML +=
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + '"  value="' + input_type + '"></td></tr>';
            } else if (input_type === "text") {
                row_to_fill.innerHTML +=
                    '<td><input class="form-control" type=' + input_type + ' id="' + backend_label_text + '"></td></tr>';
            } else if (input_type === "time") {
                row_to_fill.innerHTML +=
                    '<td><input class="form-control" type=' + input_type + ' id="' + backend_label_text + '" value="07:00"></td></tr>';

            } else if (input_type === "label") {
                row_to_fill.innerHTML +=
                    '<td><span id="Output ' + backend_label_text + '">0.00</span></td></tr>';
            }


            //table_to_fill.innerHTML +=
            //    '<tr>' +
            //    '<td><label for="' + label_text + '" class="text_label">' + label + ': </label></td>' +
            //    '<td><input type="' + input_type + '" step="0.01" id="' + label_text + '"></td>' +
            //    '</tr>';
        }


    }


    create_Complex_Table() {


        let table_to_fill = document.getElementById(this.table_name);

        //let row_to_be_fill = backend_label_text + '-Row'


        table_to_fill.innerHTML +=
            '<tr>' +
            '<th></th>' +
            '<th>Today</th>' +
            '<th>Yesterday</th>' +
            '<th>Used</th>' +
            '</tr>';


        ;


        for (let [question, dict_of_stuff] of Object.entries(this.question_and_input_dict)) {
            for (let [test, input_type] of Object.entries(dict_of_stuff)) {

                console.log(test)

                let backend_label_text = this.title + ' ' + test;

                console.log("backend label text: " + backend_label_text)

                table_to_fill.innerHTML +=
                    '<td><p>' + test + ':</p></td>' +
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + ' Today" value="' + input_type[0] + '"></td>' +
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + ' Yesterday" value="' + input_type + '"></td>' +
                    '<td><input class="form-control" type="number" step="0.01" id="' + backend_label_text + ' Used" value="' + input_type + '"></td>';


            }
            break


        }


    }
}


function create_Table(div_to_fill_id, title, list_of_labels) {
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
            '<div class="row mt-1 pb-1" class="input_data_row">' +
            '   <div class="col" id="data_labels">' +
            '       <label for="' + title + ' ' + list_of_labels[i] + '" class="text_label">' + list_of_labels[i] + ':</label>' +
            '   </div>' +

            '   <div class="col" id="data_user_input" >' +
            '       <input type="number" step="0.01" name="' + title + ' ' + list_of_labels[i] + '" class="data_input_field" id="' + title + ' ' + list_of_labels[i] + '">' +
            '   </div>' +
            '</div>';


    }
}

function create_Press_Tables() {

    const table_names = ["Press 1 Feed", "Press 1 Cake", "Press 2 Feed", "Press 2 Cake"];


    for (let name of table_names) {
        press_table_object.table_title = name;

        const div_to_fill = document.getElementById(name + " Block");

        //Title Of The Table
        div_to_fill.innerHTML +=
            "<!--" + name + "-->" +
            '<div class="row p-3 mb-2 bg-success text-white d-grid justify-content-center">' +
            '   <h6>' + name + '</h6>' +
            '</div>'


        for (let [label, input_type] of Object.entries(press_table_object.questions)) {

            div_to_fill.innerHTML +=
                "<!--" + label + "-->" +
                '<div class="row" class="input_data_row">' +
                '   <div class="col" id="data_labels">' +
                '       <label for="' + name + ' ' + label + '" class="text_label">' + label + ':</label>' +
                '   </div>' +
                '   <div class="col" id="' + name + ' ' + label + ' Col">' +

                '   </div>' +
                '</div>';

            let input_div = document.getElementById(name + ' ' + label + " Col");

            if (input_type === "input") {
                input_div.innerHTML +=
                    '<input class="form-control" type="number" step="0.01" id="' + name + ' ' + label + '" oninput="update_Current_Block_Totals(this.id)">';
            } else {
                input_div.innerHTML +=
                    '<span id="Output ' + name + ' ' + label + '">0</span>';
            }

        }


    }


}

function create_Dynamic_Table(div_to_be_fill, table_name, obj_of_questions) {
    const div_to_fill = document.getElementById(div_to_be_fill);


    div_to_fill.innerHTML +=
        "<!--" + table_name + "-->" +
        '<div class="row p-3 mb-2 bg-success text-white d-grid justify-content-center">' +
        '   <h6>' + table_name + '</h6>' +
        '</div>'

    for (let [label, input_type] of Object.entries(obj_of_questions)) {

        div_to_fill.innerHTML +=
            "<!--" + label + "-->" +
            '<div class="row" class="input_data_row">' +
            '   <div class="col" id="data_labels">' +
            '       <label for="' + table_name + ' ' + label + '" class="text_label">' + label + ':</label>' +
            '   </div>' +
            '   <div class="col" id="' + table_name + ' ' + label + ' Col">' +

            '   </div>' +
            '</div>';

        let input_div = document.getElementById(table_name + ' ' + label + " Col");


        if (input_type["Input Type"] === "number") {
            input_div.innerHTML +=
                '<input class="form-control" type="number" step="0.01" id="' + table_name + ' ' + label + '"  value="' + input_type["Default"] + '">';
        } else if (input_type["Input Type"] === "text") {
            input_div.innerHTML +=
                '<input class="form-control" type=' + input_type["Input Type"] + ' id="' + table_name + ' ' + label + '">';
        } else if (input_type["Input Type"] === "Label") {
            input_div.innerHTML +=
                '<span id="Output ' + table_name + ' ' + label + '">0.00</span>';
        }

    }


}

function update_Current_Block_Totals(field_user_type_into, user_input) {

    function get_Block_User_Typed_Into(field_user_type_into) {
        for (const [question_to_remove, value] of Object.entries(press_table_object.questions)) {
            let question_block = field_user_type_into.substring(0, field_user_type_into.indexOf(" " + question_to_remove))
            if (question_block !== "") {
                return question_block
            }


        }
    }


    //Turns Press 2 Feed Sample Wet --- > Press 2 Feed
    let block_user_typed_into = get_Block_User_Typed_Into(field_user_type_into)

    console.log("Block user typed into: " + block_user_typed_into)

    var data_to_crunch = document.getElementById(block_user_typed_into + ' Block').getElementsByTagName('input')

    let sample_wet = data_to_crunch[0].value
    let tare = data_to_crunch[1].value
    let sample_dry = data_to_crunch[2].value

    console.log("Sample Wet: " + sample_wet)
    console.log("Tare: " + tare)
    console.log("Sample dry: " + sample_dry)


    let difference_wet = (sample_wet - tare).toFixed(2);
    let difference_dry = (sample_dry - tare).toFixed(2);

    console.log("Difference Wet: " + difference_wet)
    console.log("Difference Dry: " + difference_dry)

    console.log("Output " + field_user_type_into + " Difference Wet")

    document.getElementById("Output " + block_user_typed_into + " Difference Wet").innerHTML = difference_wet.toString();
    document.getElementById("Output " + block_user_typed_into + " Difference Dry").innerHTML = difference_dry.toString();

    let percentage_solids = ((difference_dry / difference_wet) * 100).toFixed(2);


    if (isNaN(percentage_solids)) {
        document.getElementById("Output " + block_user_typed_into + " Percent Solids").innerHTML = "0.00%";
    } else {
        document.getElementById("Output " + block_user_typed_into + " Percent Solids").innerHTML = percentage_solids + "%"
    }

}

function setUpHTML() {
    //Lab
    //Main Daily Sheet
    const influent_labels = ["Time", "Temp", "PH", "D.O.", "Comp P.H.", "ALK", "S.S. (mL/L)"];
    const composite_pH_alk_labels = ["Primary p.H.", "Primary Alk", "Sec p.H.", "Sec Alk"];
    const baker_labels = ["Composite pH", "Grab pH:"];
    const d_block_labels = ["Time", "Temp", "p.H.", "D.O.", "5 Min", "10 Min", "15 Min", "20 Min", "25 Min", "30 Min",
        "60 Min"];
    const tss_block = ["Influent", "Primary", "Secondary", "Effluent", "Baker", "% Removal", "MLSS", "MLVSS", "RASS",
        "RASVSS", "SVI"];
    const ras_pumps_labels = ["RAS 1", "RAS 2", "RAS 3", "RAS 4", "RAS 5", "Flow"];
    const aluminum_labels = ["Comag Influent Q", "Comag WAS Q"];
    const chlorine_labels = ["Q Effluent Chemical Control", "Hydro Pump Online A or H", "Hypo Tank Level",
        "Residual Shed 1", "Residual Shed 2", "Residual Shed 3", "Bisulfite Pump Online A or H", "Bisulfite Tank Level",
        "P.H.", "High Chlorine Residual mg/L", "Final Eff. Chlorine ug/L"];
    const was_flow_labels = ["Set Point", "Actual"];
    const bod_labels = ["Influent", "Primary", "Secondary", "Effluent", "Baker", "% Removal"];
    const cod_labels = ["Influent", "Baker"];
    const plant_chemicals_labels = ["7,500 Caustic", "6,000 Hypo", "5,000 Bisulfite", "5,000 Sodium Alum", "Press Polymer"];
    const comag_chemicals_labels = ["3,500 Caustic", "7,500 Alum", "Polymer"];
    const ammonia_labels = ["Final Effluent", "Nitrite", "Nitrate"];
    const total_p_labels = ["Secondary", "Final Effluent"];
    const total_flow_labels = ["WAS Q", "Primary Sludge Q", "RAS Q", "Comag Was Q", "Comag Influent Q"];

    //TSS Sheet
    const tss_weight_labels = ["ML Sample", "Dry Weight", "Start Weight", "Weight Difference", "Results"];
    const tvss_weight_labels = ["Burned Weight", "Start Weight", "Weight Difference", "NonVolatile Weight",
        "Percentage NonVolatile", "Volatile Weight (mg/L)", "Percentage Volatile"];


    //Yard
    const primary_blanket_labels = ["PST1", "PST2", "PST3"];
    const secondary_blanket_labels = ["SST1", "SST2", "SST3", "SST4"];
    const tertiary_blanket_labels = ["TF1", "TF2"];
    const reaction_tank_labels = ["Sec p.H. Grab", "Sec. Meter", "RT #1 p.H", "Tuba (Meter)", "RT #4 p.H."];
    const turbidity_labels = ["Meter", "SEC", "F.E.", "Comag", "Baker C", "Baker (G)"];

    //Generic
    const single_labels = ["Value"];


    //Lab
    //Daily Lab Sheet
    //create_Table("Influent-Block", "Influent", influent_labels);
    //create_Table("Final-Effluent-Block", "Final Effluent", influent_labels);
    //create_Table("Composite-PH-and-ALK-Block", "Comp. PH/ALK", composite_pH_alk_labels);
    //create_Table("Baker-PH-Block", "Baker", baker_labels);
    //create_Table("D-Box-Block", "#2 D Box", d_block_labels);
    //create_Table("TSS-Block", "T.S.S.", tss_block);
    //create_Table("RAS-Pumps-Block", "RAS Pumps", ras_pumps_labels);
    //create_Table("Aluminum-Block", "Aluminum", aluminum_labels);
    //create_Table("Chlorine-Residual-Block", "Chlorine Residual", chlorine_labels);
    //create_Table("BOD-Block", "BOD", bod_labels);
    //create_Table("COD-Block", "COD", cod_labels);
    //create_Table("Ecoli-Block", "Ecoli", single_labels);
    //create_Table("Plant-Chemicals-Today-Block", "Plant Chemicals Today", plant_chemicals_labels);
    //create_Table("Plant-Chemicals-Yesterday-Block", "Plant Chemicals Yesterday", plant_chemicals_labels);
    //create_Table("Plant-Chemicals-Used-Block", "Plant Chemicals Used", plant_chemicals_labels);
    //create_Table("Comag-Chemicals-Today-Block", "Comag Today", comag_chemicals_labels);
    //create_Table("Comag-Chemicals-Yesterday-Block", "Comag Yesterday", comag_chemicals_labels);
    //create_Table("Comag-Chemicals-Used-Block", "Comag Used", comag_chemicals_labels);
    //create_Table("Ammonia-Block", "Ammonia", ammonia_labels);
    //create_Table("Total-P-Block", "Total-P", total_p_labels);
    //create_Table("Total-Q-Block", "Total-Q", total_flow_labels);

    //TSS Lab Sheet
    //TSS
    //create_Table("Influent-TSS-Block", "Influent", tss_weight_labels);
    //create_Table("Primary-TSS-Block", "Primary", tss_weight_labels);
    //create_Table("DBox-TSS-Block", "D Box", tss_weight_labels);
    //create_Table("RAS-TSS-Block", "RAS", tss_weight_labels);
    //create_Table("Sec-Effluent-TSS-Block", "Secondary Effluent", tss_weight_labels);
    //create_Table("Final-Effluent-TSS-Block", "Final Effluent", tss_weight_labels);
    //create_Table("Baker-TSS-Block", "Baker", tss_weight_labels);
    //create_Table("H20-TSS-Block", "H20", tss_weight_labels);
    ////TVSS
    //create_Table("Influent-TVSS-Block", "Influent", tvss_weight_labels);
    //create_Table("Primary-TVSS-Block", "Primary", tvss_weight_labels);
    //create_Table("DBox-TVSS-Block", "D Box", tvss_weight_labels);
    //create_Table("RAS-TVSS-Block", "RAS", tvss_weight_labels);
    //create_Table("Sec-Effluent-TVSS-Block", "Secondary Effluent", tvss_weight_labels);
    //create_Table("Final-Effluent-TVSS-Block", "Final Effluent", tvss_weight_labels);
    //create_Table("Baker-TVSS-Block", "Baker", tvss_weight_labels);
    //create_Table("H20-TVSS-Block", "H20", tvss_weight_labels);


    //Yard
    create_Table("Primary-Blanket-Block", "Primary DOB's", primary_blanket_labels);
    create_Table("Secondary-Blanket-Block", "Secondary DOB's", secondary_blanket_labels);
    create_Table("Tertiary-Blanket-Block", "Tertiary DOB's", tertiary_blanket_labels);
    create_Table("Reaction-Tank-Block", "Reaction Tanks", reaction_tank_labels);
    create_Table("Turbidity-Block", "Turbidity", turbidity_labels);

    //Press
    //Press has a separate function create_Dynamic_Tables


    let plant_chemicals_array = document.querySelectorAll(".plant_chemical_tanks, .comag_chemicals_tanks");

    plant_chemicals_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {

            console.log(event.target["id"]);
            let field_user_typed_into = event.target["id"];


            let row_user_typed_into = field_user_typed_into.substring(0, field_user_typed_into.lastIndexOf(" "));


            let today_value = document.getElementById(row_user_typed_into + " Today").value;
            let yesterday_value = document.getElementById(row_user_typed_into + " Yesterday").value;

            document.getElementById(row_user_typed_into + " Used").value = Math.abs(today_value - yesterday_value);

        })
    })


    let comag_chemicals_array = document.querySelectorAll(".comag_chemical_tanks");

    comag_chemicals_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {


            let field_user_typed_into = event.target["name"];

            const plant_tank_data = ["3,500 Caustic", "7,500 Alum", "Polymer",]; //

            for (let tank of plant_tank_data) {

                if (field_user_typed_into.includes(tank)) {

                    let today_value = document.getElementById("Comag Today " + tank).value;
                    let yesterday_value = document.getElementById("Comag Yesterday " + tank).value;

                    document.getElementById("Comag Used " + tank).value = Math.abs(today_value - yesterday_value);

                }


            }


        })
    })


    let filtrate_array = document.querySelectorAll(".filtrate");

    filtrate_array.forEach(function (elem) {

        elem.addEventListener("input", function (event) {

            console.log(event);
            console.log(event.target);
            console.log(event.target["id"]);

            let field_user_typed_into = event.target["id"];

            const plant_tank_data = ["Dry Weight", "Tare",];

            for (let tank of plant_tank_data) {
                console.log(tank);
                console.log(field_user_typed_into);
                console.log("Is " + tank + " the same as " + field_user_typed_into + "?")

                if (field_user_typed_into === "Filtrate " + tank) {

                    console.log("They matched");

                    let dry_weight = document.getElementById("Filtrate Dry Weight").value;
                    let tare = document.getElementById("Filtrate Tare").value;

                    let difference = (dry_weight - tare).toFixed(2).toString()
                    let milligrams_per_litre = ((difference * 100000) / 25).toFixed(2).toString()

                    document.getElementById("Output Filtrate Difference").innerHTML = difference;
                    document.getElementById("Output Filtrate mg/L").innerHTML = milligrams_per_litre;


                }


            }


        })
    })


    for (let [title, question_and_prompt_dict] of Object.entries(table_structure)) {


        let new_table = new Table_Creator(title, question_and_prompt_dict)

        new_table.create_Table_Header()


        if ("Plant Chemicals" === title || "Comag Chemicals" === title) {
            new_table.create_Complex_Table()

        } else {
            new_table.create_Table_Body()
        }


    }


}






