let baseURL = "http://localhost:8080/Backend_war/driver/";

getAllDrivers();

$("#saveDriver").on('click', function () {
    saveDriver();
});

function saveDriver() {
    let formData = $("#driverFormController").serialize();
    $.ajax({
        url: baseURL + "save_driver", method: "post", data: formData, dataType: "json", success: function (res) {
            getAllDrivers();
            // alert(res.message);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                background:'#27ae60',
                showConfirmButton: false,
                color: "#fff",
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Saved successfully !'
            });
        }, error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            // alert(errorMessage.message);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                background:'#e70c0c',
                showConfirmButton: false,
                color: "#fff",
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Saved Unsuccessful !'
            });
        }
    });
}