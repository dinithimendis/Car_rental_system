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

/*generate id*/
function generateAdminID() {
    $.ajax({
        url: baseURL + "?test=", success: function (res) {
            $('#adminId').val(res.data);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

/*get all admins*/

function getAllAdmins() {
    $("#adminTableBody").empty();
    $.ajax({
        url: baseURL + "get_all_admin", success: function (res) {
            for (let c of res.data) {

                let firstName = c.adminName.firstName;
                let lastName = c.adminName.lastName;
                let address = c.adminAddress;
                let contact = c.adminContact;
                let email = c.adminEmail;
                let username = c.user.userName;
                let password = c.user.password;
                let nic = c.adminNic;
                let id = c.adminId;
                let role = c.user.role;
                let userId = c.user.userId;

                let row = "<tr>" + "<td>" + firstName + "</td>" + "<td>" + lastName + "</td>" + "<td>" + address + "</td>" + "<td>" + contact + "</td>" + "<td>" + email + "</td>" + "<td>" + username + "</td>" + "<td>" + password + "</td>" + "<td>" + nic + "</td>" + "<td>" + id + "</td>" + "<td>" + role + "</td>" + "<td>" + userId + "</td>" + "</tr>";
                $("#adminTableBody").append(row);
            }
            bindRowClickEventsForAdminTable();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
    generateAdminID();
}

$("#updateAdmin").on('click', function () {

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let address = $("#adminAddress").val();
    let contact = $("#adminContact").val();
    let email = $("#adminEmail").val();
    let username = $("#userName").val();
    let password = $("#password").val();
    let nic = $("#adminNic").val();
    let id = $("#adminId").val();
    let role = $("#role").val();
    let userId = $("#userId").val();

    var adminObj = {
        adminName: {firstName: firstName, lastName: lastName},
        adminAddress: address,
        adminContact: contact,
        adminEmail: email,
        user: {username: username, password: password, role: role, userId: userId},
        adminNic: nic,
        adminId: id
    }

    $.ajax({
        url: baseURL + "update",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(adminObj),
        dataType: "json",
        success: function (res) {
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
                title: 'updated successfully !'
            });
            clearTextFields();
        },
        error: function (error) {
            // alert(JSON.parse(error.responseText).message);
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
                title: 'update failed !'
            });
        }
    });

});