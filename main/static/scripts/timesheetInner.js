function innerDays(day) {
    $.ajax({
        data: { dat: day, func: "main" },
        url: "http://nuzpcybergr.zzz.com.ua/ajax.php",
        type: "POST",
        success: function(data) {
            $("#" + day).append(data);
        }

    });
}