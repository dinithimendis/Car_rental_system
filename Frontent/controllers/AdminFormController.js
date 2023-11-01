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
                title: 'Saved successfully'
            });
        }, error: function (error) {
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
                title: 'cannot be validated !'
            });

        }

    });

}

/* delete admin function */
$("#deleteAdmin").on('click', function () {
    $.ajax({
        url: baseURL + "?code=" + $("#adminId").val(), method: "delete", dataType: "json",
        success: function (resp) {
            getAllAdmins();
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
                title: 'deleted successfully !'
            });
        }, error: function (error) {
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
                title: 'cannot be deleted !'
            });
        }
    });
});