function clock() {
    var clocks = document.getElementById("clock");
    var time = new Date();
    var hours = time.getHours();
    var minutes = ltz(time.getMinutes());
    var seconds = ltz(time.getSeconds());
    /*clocks.innerHTML = hours + ':' + minutes + ':' + seconds;*/
    var tim = document.getElementsByClassName("num");
    tim[0].innerHTML = hours + ':';
    tim[1].innerHTML = minutes + ':';
    tim[2].innerHTML = seconds;

}

function ltz(buf) {
    if (buf < 10)
        return '0' + buf;
    return buf;
}

function go_home() {
    document.location.href = "http://nuzpcybergr.zzz.com.ua/";
}
/*
function calc_masseges() {
    var count = '<?php get_count_not_red() ?>';
    //    var el = document.getElementById(massege_counter);
    //    el.innerHTML(count);
    $("#massege_counter").html(count);
    console.log(count);
    if (count == '0')
        $("#massegs").css("display", "none");
}*/

function day_of_weak(thyear) {
    var centcode, monthcode = [];
    monthcode[0] = 1;
    monthcode[1] = 4;
    monthcode[2] = 4;
    monthcode[3] = 0;
    monthcode[4] = 2;
    monthcode[5] = 5;
    monthcode[6] = 0;
    monthcode[7] = 3;
    monthcode[8] = 6;
    monthcode[9] = 1;
    monthcode[10] = 4;
    monthcode[11] = 6;
    var ost = Math.floor(thyear / 100) % 4;
    switch (ost) {
        case 0:
            centcode = 0;
            break;
        case 1:
            centcode = 6;
            break;
        case 2:
            centcode = 4;
            break;
        case 3:
            centcode = 2;
            break;
    }
    var yearcode = (centcode + thyear % 100 + Math.floor(thyear % 100 / 4)) % 7;
    var weekday = (1 + monthcode[0] + yearcode) % 7;
    weekday--;
    if (weekday < 0)
        weekday = 6;
    //    console.log(Number(weekday));
    switch (weekday) {
        case 0:
            return 2;
            break;
        case 1:
            return 1;
            break;
        case 2:
            return 7;
            break;
        case 3:
            return 6;
            break;
        case 4:
            return 5;
            break;
        case 5:
            return 4;
            break;
        case 6:
            return 3;
            break;
        default:
            console.log(yearcode + " " + weekday);
            break;
    }
}

function year_day() {
    var months = [];
    months[0] = 31;
    months[1] = 28;
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    console.log(day);
    if (year % 4 == 0)
        ++months[1];
    for (var i = 2; i < 12; i++) {
        if (i < 6) {
            if (i % 2 == 0)
                months[i] = 31;
            else
                months[i] = 30;
        } else {
            if (i % 2 == 0)
                months[i] = 30;
            else
                months[i] = 31;
        }
    }
    var result = 0;
    for (var i = 0; i <= month - 1; i++) {
        if (i == month - 1)
            result += day;
        result += months[i];
    }

    //    console.log(Number(result - dw));
    return result;
}

function week_spec() {
    var r = year_day();
    var d = new Date();
    var year = d.getFullYear();
    var dw = day_of_weak(year);
    var weekn = Math.floor((r - dw) / 7);
    console.log("Week: " + weekn);
    var result;
    if (weekn % 2 != 0)
        result += "c";
    else
        result += "z";
    return result;
}

function form_table_name() {
    var req = "";
    req += week_spec();
    console.log(req.slice(9));
    var d = new Date();
    var day = d.getDay();
    switch (day) {
        case 1:
            req += "mon";
            break;
        case 2:
            req += "tue";
            break;
        case 3:
            req += "wed";
            break;
        case 4:
            req += "thu";
            break;
        case 5:
            req += "fri";
            break;
        case 6:
            req += "sat";
            break;
        default:
            req += "sun"
            break;
    }
    console.log(req.slice(9) + "dododo");
    return req.slice(9);
}

function showSpecWeek() {
    var sp = week_spec().slice(9);
    var spec = document.getElementById("week_spec_show");
    console.log(sp);
    switch (sp) {
        case 'c':
            spec.innerHTML = "Числитель";
            break;

        case 'z':
            spec.innerHTML = "Знаменатель";
            break;
        default:
            break;
    }
}
