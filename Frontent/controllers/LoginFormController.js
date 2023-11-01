let baseURL = "http://localhost:8080/Backend_war/";

$("#login").on('click', function () {

    $.ajax({
        url: baseURL + "login_form/?userName=" + $("#name").val() + "&password=" + $("#password").val(),
        method: "GET",
        dataType: "json",
    });

});