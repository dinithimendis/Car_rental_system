let baseURL = "http://localhost:8080/Backend_war/driver/";

getAllDrivers();

let bookingId;
let driverId;

function getAllDrivers() {
    $("#driverTableBody").empty();
    $.ajax({
        url: baseURL + "get_driver_schedule", success: function (res) {
            for (let c of res.data) {
                bookingId= c[0];
                driverId= c[1];
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
    $.ajax({
        url: baseURL + "get_all", success: function (res) {
            for (let c of res.data) {

                let id = c.id;
                let firstname = c.name.firstName;
                let lastname = c.name.lastName;
                let drivingLicenseNo = c.drivingLicenseNo;
                let contactNo = c.contactNo;
                let nic = c.nic;

                if (id === driverId){

                    let row = "<tr>" +
                        "<td>" + id + "</td>"
                        + "<td>" + bookingId + "</td>"
                        + "<td>" + firstname + "</td>"
                        + "<td>" + lastname + "</td>"
                        + "<td>" + drivingLicenseNo + "</td>"
                        + "<td>" + contactNo + "</td>"
                        + "<td>" + nic + "</td>"
                        + "</tr>";

                    $("#driverTableBody").append(row);
                }
            }
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}