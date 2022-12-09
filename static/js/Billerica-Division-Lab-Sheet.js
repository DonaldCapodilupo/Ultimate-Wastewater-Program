/*jshint esversion: 6 */


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
    const comag_chemicals_labels = ["3,500 Caustic", "7500 Alum", "Polymer"];
    const ammonia_labels = ["Final Effluent", "Nitrite", "Nitrate"];
    const total_p_labels = ["Secondary","Final Effluent"];
    const total_flow_labels = ["WAS Q","Primary Sludge Q", "RAS Q","Comag Was Q", "Comag Influent Q"];

    //TSS Sheet
    const tss_weight_labels = ["ML Sample", "Dry Weight","Start Weight","Weight Difference","Results"];
    const tvss_weight_labels = ["Burned Weight", "Start Weight", "Weight Difference", "NonVolatile Weight",
        "Percentage NonVolatile","Volatile Weight (mg/L)", "Percentage Volatile"];


    //Yard
    const primary_blanket_labels = ["PST1", "PST2", "PST3"];
    const secondary_blanket_labels = ["SST1", "SST2", "SST3", "SST4"];
    const tertiary_blanket_labels = ["TF1", "TF2"];
    const reaction_tank_labels = ["Sec p.H. Grab", "Sec. Meter", "RT #1 p.H", "Tuba (Meter)", "RT #4 p.H."];
    const turbidity_labels = ["Meter", "SEC", "F.E.", "Comag", "Baker C", "Baker (G)"];

    //Press
    const feed_labels = ["Sample Weight", "Tare", "Difference", "Sample Dry", "Tare", "Difference", "% Solids"];
    const gravity_thickener_labels = ["GT1", "GT2"];

    //Generic
    const single_labels = ["Value"];


    //Lab
    //Daily Lab Sheet
    create_Table("Influent-Block", "Influent", influent_labels);
    create_Table("Final-Effluent-Block", "Final Effluent", influent_labels);
    create_Table("Composite-PH-and-ALK-Block", "Comp. PH/ALK", composite_pH_alk_labels);
    create_Table("Baker-PH-Block", "Baker", baker_labels);
    create_Table("D-Box-Block", "#2 D Box", d_block_labels);
    create_Table("TSS-Block", "T.S.S.", tss_block);
    create_Table("RAS-Pumps-Block", "RAS Pumps", ras_pumps_labels);
    create_Table("Aluminum-Block", "Aluminum", aluminum_labels);
    create_Table("Chlorine-Residual-Block", "Chlorine Residual", chlorine_labels);
    create_Table("BOD-Block", "BOD", bod_labels);
    create_Table("COD-Block", "COD", cod_labels);
    create_Table("Ecoli-Block", "Ecoli", single_labels);
    create_Table("Plant-Chemicals-Today-Block", "Plant Chemicals Today", plant_chemicals_labels);
    create_Table("Plant-Chemicals-Yesterday-Block", "Plant Chemicals Yesterday", plant_chemicals_labels);
    create_Table("Plant-Chemicals-Used-Block", "Plant Chemicals Used", plant_chemicals_labels);
    create_Table("Comag-Chemicals-Today-Block", "Comag Today", comag_chemicals_labels);
    create_Table("Comag-Chemicals-Yesterday-Block", "Comag Yesterday", comag_chemicals_labels);
    create_Table("Comag-Chemicals-Used-Block", "Comag Used", comag_chemicals_labels);
    create_Table("Ammonia-Block", "Ammonia", ammonia_labels);
    create_Table("Total-P-Block", "Total-P", total_p_labels);
    create_Table("Total-Q-Block", "Total-Q", total_flow_labels);

    //TSS Lab Sheet
    //TSS
    create_Table("Influent-TSS-Block", "Influent", tss_weight_labels);
    create_Table("Primary-TSS-Block", "Primary", tss_weight_labels);
    create_Table("DBox-TSS-Block", "D Box", tss_weight_labels);
    create_Table("RAS-TSS-Block", "RAS", tss_weight_labels);
    create_Table("Sec-Effluent-TSS-Block", "Secondary Effluent", tss_weight_labels);
    create_Table("Final-Effluent-TSS-Block", "Final Effluent", tss_weight_labels);
    create_Table("Baker-TSS-Block", "Baker", tss_weight_labels);
    create_Table("H20-TSS-Block", "H20", tss_weight_labels);
    //TVSS
    create_Table("Influent-TVSS-Block", "Influent", tvss_weight_labels);
    create_Table("Primary-TVSS-Block", "Primary", tvss_weight_labels);
    create_Table("DBox-TVSS-Block", "D Box", tvss_weight_labels);
     create_Table("RAS-TVSS-Block", "RAS", tvss_weight_labels);
    create_Table("Sec-Effluent-TVSS-Block", "Secondary Effluent", tvss_weight_labels);
    create_Table("Final-Effluent-TVSS-Block", "Final Effluent", tvss_weight_labels);
    create_Table("Baker-TVSS-Block", "Baker", tvss_weight_labels);
    create_Table("H20-TVSS-Block", "H20", tvss_weight_labels);




    //Yard
    create_Table("Primary-Blanket-Block", "Primary DOB's", primary_blanket_labels);
    create_Table("Secondary-Blanket-Block", "Secondary DOB's", secondary_blanket_labels);
    create_Table("Tertiary-Blanket-Block", "Tertiary DOB's", tertiary_blanket_labels);
    create_Table("Reaction-Tank-Block", "Reaction Tanks", reaction_tank_labels);
    create_Table("Turbidity-Block", "Turbidity", turbidity_labels);

    //Press
    create_Table("Feed-Block", "Feed (Tray 1)", feed_labels);
    create_Table("Feed-Block-2", "Cake (Tray 2)", feed_labels);
    create_Table("Feed-Block-3", "Feed (Tray 3)", feed_labels);
    create_Table("Feed-Block-4", "Cake (Tray 4)", feed_labels);
    create_Table("Filtrate-Block", "Filtrate", feed_labels);
    create_Table("GT-DOB-Block", "GT DOB's", gravity_thickener_labels);





}

