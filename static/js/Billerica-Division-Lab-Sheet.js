function current_Date() {
    cur_Date = document.write(new Date().toLocaleDateString());


    return cur_Date;

}


function get_Day_Of_Week() {

    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log(days);
    console.log(now.getDay());


    var day = document.write(days[now.getDay()]);
    console.log(day);

    return day;

}