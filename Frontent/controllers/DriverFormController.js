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

function getAllDrivers() {
    $("#driverTableBody").empty();
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstname = c.name.firstName;
                let lastname = c.name.lastName;
                let address = c.address;
                let drivingLicenseNo = c.drivingLicenseNo;
                let email = c.email;
                let contactNo = c.contactNo;
                let driverAvailability = c.driverAvailability;
                let userName = c.user.userName;
                let user_id = c.user.userId;
                let nic = c.nic;
                let password = c.user.password;

                let row = "<tr>" + "<td>" + id + "</td>" + "<td>" + firstname + "</td>" + "<td>" + lastname + "</td>" + "<td>" + address + "</td>" + "<td>" + drivingLicenseNo + "</td>" + "<td>" + email + "</td>" + "<td>" + contactNo + "</td>" + "<td>" + driverAvailability + "</td>" + "<td>" + userName + "</td>" + "<td>" + user_id + "</td>" + "<td>" + nic + "</td>" + "<td>" + password + "</td>" + "</tr>";

                $("#driverTableBody").append(row);
            }

            bindRowClickEventsForDriver();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
    genarateID();
}

function genarateID() {
    $.ajax({
        url: baseURL + "?test=", success: function (res) {
            $('#id').val(res.data);
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}