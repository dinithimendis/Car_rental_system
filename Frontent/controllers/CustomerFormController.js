let baseURL = "http://localhost:8080/Backend_war";

getAllCustomers();
genarateID();
$("#saveCustomer").on('click', function () {
    saveCustomer();
});

function saveCustomer() {
    let formData = $("#CustomerFormController").serialize();
    $.ajax({
        url: baseURL + "/customer/save_customer",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
            getAllCustomers();
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
            window.location.reload();
        },
        error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
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
                title: 'cannot be saved !'
            });
        }
    });
    clearTextFields();
}

$("#updateCustomer").on('click', function () {

    let id = $('#id').val();
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let address = $('#address').val();
    let email = $('#email').val();
    let contactNo = $('#contactNo').val();
    let user_id = $('#userId').val();
    let password = $('#password').val();
    let nic = $('#nic').val();
    let drivingLicenceNo = $('#drivingLicenseNo').val();
    let role = $('#role').val();
    let userName = $('#userName').val();

    var customerObj = {
        id: id,
        name: {firstName: firstName, lastName: lastName},
        address: address,
        email: email,
        contactNo: contactNo,
        user: {userName: userName, userId: user_id, password: password, role: role},
        nic: nic,
        drivingLicenseNo: drivingLicenceNo,
    }

    $.ajax({
        url: baseURL + "/customer/update_customer",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(customerObj),
        dataType: "json",
        success: function (res) {
            clearTextFields();
            getAllCustomers();
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
                title: 'cannot be update !'
            });

        }
    });
});

$("#deleteCustomer").on('click', function () {
    $.ajax({
        url: baseURL + "/customer/?code=" + $("#id").val(),
        method: "delete",
        dataType: "json",
        success: function (resp) {
            clearTextFields();
            getAllCustomers();
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
                title: 'delete unsuccessful !'
            });
        }
    });
});

let cusID = "C00-0";

function getAllCustomers() {
    $("#customerTableBody").empty();
    $.ajax({
        url: baseURL + "/customer/get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstName = c.name.firstName;
                let lastName = c.name.lastName;
                let address = c.address;
                let email = c.email;
                let contactNo = c.contactNo;
                let user_name = c.user.userName;
                let nic = c.nic;
                let drivingLicenceNo = c.drivingLicenseNo;
                let role = c.user.role;
                let user_id = c.user.userId;
                let password = c.user.password;


                let row = "<tr>" + "<td>" + id + "</td>" + "<td>" + firstName + "</td>" + "<td>" + lastName + "</td>" + "<td>" + address + "</td>" + "<td>" + email + "</td>" + "<td>" + contactNo + "</td>" + "<td>" + user_name + "</td>" + "<td>" + password + "</td>" + "<td>" + nic + "</td>" + "<td>" + drivingLicenceNo + "</td>" + "<td>" + role + "</td>" + "<td>" + user_id + "</td>" + "</tr>";
                $("#customerTableBody").append(row);
            }
            bindRowClickEvents();
            clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
    genarateID();
}