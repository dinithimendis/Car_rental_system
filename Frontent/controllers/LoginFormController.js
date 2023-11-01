let baseURL = "http://localhost:8080/Backend_war/";

$("#login").on('click', function () {

    $.ajax({
        url: baseURL + "login_form/?userName=" + $("#name").val() + "&password=" + $("#password").val(),
        method: "GET",
        dataType: "json",

        success: function (resp) {
            console.log($("#name").val());
            console.log($("#password").val())

            if ('ADMIN' === $("#role").val()) {

                 Swal.fire({
                     title: 'You are login as a Admin !',
                     showClass: {
                         popup: 'animate__animated animate__fadeInDown'
                     },
                     hideClass: {
                         popup: 'animate__animated animate__fadeOutUp'
                     }
                 })

                if ("Ok" === resp.state) {
                window.location.href = "DashBoardForm.html";
                 } else {
                     alert(resp.state);
                 }

            } else if ('DRIVER' === $("#role").val()) {

                Swal.fire({
                    title: 'You are login as a Driver !',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

                if ("Ok" === resp.state) {
                window.location.href = "DriverShedule.html";
                 } else {
                     alert(resp.state);
                 }

            }

        },

        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });

});