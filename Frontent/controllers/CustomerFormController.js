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

let genaratedValue;

function genarateID() {
    $.ajax({
        url: baseURL + "/customer/?test=", success: function (res) {
            $('#id').val(res.data);
            genaratedValue = res.data;
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

let code;

function bindRowClickEvents() {


    $("#customerTableBody>tr").on('click', function () {
        let id = $(this).children(":eq(0)").text();
        let firstName = $(this).children(":eq(1)").text();
        let lastName = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(3)").text();
        let email = $(this).children(":eq(4)").text();
        let contactNo = $(this).children(":eq(5)").text();
        let userName = $(this).children(":eq(6)").text();
        let password = $(this).children(":eq(7)").text();
        let nic = $(this).children(":eq(8)").text();
        let drivingLicenseNo = $(this).children(":eq(9)").text();
        let role = $(this).children(":eq(10)").text();
        let userId = $(this).children(":eq(11)").text();


        $('#id').val(id);
        $('#firstName').val(firstName);
        $('#lastName').val(lastName);
        $('#address').val(address);
        $('#email').val(email);
        $('#contactNo').val(contactNo);
        $('#userName').val(userName);
        $('#password').val(password);
        $('#nic').val(nic);
        $('#drivingLicenseNo').val(drivingLicenseNo);
        $('#role').val(role);
        $('#userId').val(userId);

        //TODO image repeating problem *****************

        $("#imgLoader").empty();
        $("#imgLoader2").empty();
        let key = $(this).children(":eq(0)").text();

        const url = localStorage.getItem(key + "1stPhoto");
        const img = new Image();
        img.src = url;
        $("#imgLoader").append(img);


        const url2 = localStorage.getItem(key + "2stPhoto");
        const img2 = new Image();
        img2.src = url2;
        $("#imgLoader2").append(img2);

    });
}

function clearTextFields() {
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#address').val("");
    $('#email').val("");
    $('#contactNo').val("");
    $('#userName').val("");
    $('#password').val("");
    $('#nic').val("");
    $('#drivingLicenseNo').val("");
    $('#role').val("");
    $('#userId').val("");
    // $("#imgLoader").load();
    // $("#imgLoader2").location.reload();
}

loadAllDriversToCombo();
loadAllCustomersToCombo();
loadAllVehiclesToCombo();

function loadAllCustomersToCombo() {
    $('#customer').empty();
    $.ajax({
        url: baseURL + "/bookings/get_all_customers", method: "GET", dataType: "json", success: function (res) {
            for (let customer of res.data) {
                $("#customer").append(`<option>${customer.id}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$('#customer').on('click', function () {
    $.ajax({
        url: baseURL + "/bookings/get_all_customers/", method: "GET", dataType: "json", success: function (res) {
            for (let customer of res.data) {
                if (customer.id === $('#customer').val()) {
                    $("#customerName").val(customer.name.firstName);
                }
            }
        }
    });
});

function loadAllDriversToCombo() {
    $('#driverId').empty();

    $.ajax({
        url: baseURL + "/bookings/get_all_drivers", method: "GET", dataType: "json", success: function (res) {
            for (let driver of res.data) {
                $("#driverId").append(`<option>${driver.id}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$('#driverId').on('click', function () {
    $.ajax({
        url: baseURL + "/bookings/get_all_drivers", method: "GET", dataType: "json", success: function (res) {
            for (let driver of res.data) {
                if (driver.id === $('#driverId').val()) {
                    $("#driverName").val(driver.name.firstName);
                }
            }
        }
    });
});

function loadAllVehiclesToCombo() {
    $('#vehicleId').empty();
    $.ajax({
        url: baseURL + "/bookings/get_all_vehicles", method: "GET", dataType: "json", success: function (res) {
            for (let vehicle of res.data) {
                $("#vehicleId").append(`<option>${vehicle.vehicleID}</option>`);
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}

$("#placeBookingBtn").on('click', function () {
    let bookingID = $("#bookingId").val();//
    let rentID = $("#rentID").val();//
    let driverID = $("#driverId").val();//
    let driverName = $("#driverName").val(); //
    let customer = $("#customer").val(); //
    let customerName = $("#customerName").val(); //
    let vehicleID = $("#vehicleId").val(); //
    let pickupDate = $("#pickUpDate").val(); //
    let driverRequest = $("#DriverRequestType").val(); //
    let pickUpLocation = $("#pickUpLocation").val();  //
    let returnDate = $("#returnDate").val(); //
    let pickupTime = $("#pickUpTime").val(); //


    var booking = {
        bookingID: bookingID,
        pickUpDate: pickupDate,
        pickUpTime: pickupTime,
        returnDate: returnDate,
        driverRequestType: driverRequest,
        customer: {id: customer},
        pickUpLocation: pickUpLocation,
        bookingDetails: [{vehicleID: vehicleID, bookingID: bookingID}],
        driverSchedules: [{driverID: driverID, bookingID: bookingID}],
    }

    $.ajax({
        url: baseURL + "/bookings/place_bookings",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(booking),
        dataType: "json",
        success: function (res) {
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});

$(' #id,#firstName,#lastName,#address,#email,#contactNo,#userName,#userId,#password,#nic,#drivingLicenseNo').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
})

validator('#id', /^C00-00[0-9]{1,5}$/, "Your input can't be validated", '#firstname_label', '#firstName');
validator('#firstName', /^[A-z]{3,30}$/, "Your input can't be validated", '#lastname_label', '#lastName');
validator('#lastName', /^[A-z]{3,30}$/, "Your input can't be validated", '#address_label', '#address');
validator('#address', /^[A-z]{3,30}$/, "Your input can't be validated", '#adminContact_label', '#email');
validator('#email', /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Your input can't be validated", '#email_label', '#contactNo');
validator('#contactNo', /^(07([1245678])|091)(-)[0-9]{7}$/, "Your input can't be validated", '#username_label', '#userName');
validator('#userName', /^[A-z]{3,30}$/, "Your input can't be validated", '#password_label', '#password');
validator('#userId', /^[0-9]{12}$/, "Your input can't be validated", '#admin_nic_label', '#nic');
validator('#password', /^[A-z]{4,30}$/, "Your input can't be validated", '#admin_id_label', '#drivingLicenseNo');
validator('#nic', /^[0-9]{12}$/, "Your input can't be validated", '#user_id_label', '#drivingLicenseNo');
validator('#drivingLicenseNo', /^[0-9]{1,10}$/, "Your input can't be validated", '#user_id_label', '#nic');