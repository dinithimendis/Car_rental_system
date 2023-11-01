let baseURL = "http://localhost:8080/Backend_war/admin/";

getAllAdmins();

/* save admin function */
$("#saveAdmin").on('click', function () {
    saveAdmin();
});

function saveAdmin() {
    let formData = $("#adminFormController").serialize();

    $.ajax({

        url: baseURL + "save_admin", method: "post", data: formData, dataType: "json", success: function (res) {
            getAllAdmins();

        }

    });


}
