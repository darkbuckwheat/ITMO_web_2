$(document).ready(function () {
    $("#clear-button").click(function () {
        $.ajax({
            url: "control",
            method: "GET",
            dataType: "html",
            data: {
                clear: true
            },
            success: function (data) {
                console.log("clear done")
                location.reload();
            },
            error: function (error) {
                console.log(error)
            },
        });
    });
});