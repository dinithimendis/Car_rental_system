let baseURL = "http://localhost:8080/Backend_war/";


getAllVehicle();
const vehicleFrontImgReader = new FileReader();
let genaratedVehicleValue;
$("#saveVehicle").on('click', function () {
    saveVehicle();
});

function saveVehicle() {
    let formData = $("#vehicleFormController").serialize();
    $.ajax({
        url: baseURL + "vehicle/save_vehicle",
        method: "post",
        data: formData,
        dataType: "json",
        success: function (res) {
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
            getAllVehicle();
            clearTextFields();
            bindRowClickEventsForVehicle();
        },
        error: function (error) {
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

function getAllVehicle() {
    $("#vehicleTableBody").empty();
    $.ajax({
        url: baseURL + "vehicle/get_all", success: function (res) {
            for (let c of res.data) {

                let vehicleId = c.vehicleID;
                let registrationNo = c.registrationNo;
                let brand = c.vehicleBrand;
                let vehicleType = c.vehicleType;
                let fuelType = c.fuelType;
                let noOfPassengers = c.numberOfPassenger;
                let Colour = c.vehicleColour;
                let transmission = c.transmissionType;
                let damageFee = c.refundableDamagedFee;
                let daily_amount = c.vehiclePriceRate.dailyRate;
                let monthly_amount = c.vehiclePriceRate.monthlyRate;
                let daily_km = c.freeMileage.dailyMileage;
                let monthly_km = c.freeMileage.monthlyMileage;
                let last_service = c.lastServiceMileage;
                let extraKmPrice = c.extraKmPer;
                let Availability = c.vehicleAvailability;

                //TODO vehicleMileage equals to serviceMileage
                let vehicle_mileage = c.vehicleMileage;

                let row = "<tr>" + "<td>" + vehicleId + "</td>" + "<td>" + noOfPassengers + "</td>" + "<td>" + extraKmPrice + "</td>" + "<td>" + registrationNo + "</td>" + "<td>" + Colour + "</td>" + "<td>" + daily_amount + "</td>" + "<td>" + monthly_amount + "</td>" + "<td>" + Availability + "</td>" + "<td>" + brand + "</td>" + "<td>" + transmission + "</td>" + "<td>" + daily_km + "</td>" + "<td>" + monthly_km + "</td>" + "<td>" + fuelType + "</td>" + "<td>" + damageFee + "</td>" + "<td>" + vehicleType + "</td>" + "<td>" + last_service + "</td>" + "<td>" + vehicle_mileage + "</td>" + "</tr>";

                $("#vehicleTableBody").append(row);
            }
            bindRowClickEventsForVehicle();         // clearTextFields();
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
    genarateVehicleID();
}

function genarateVehicleID() {
    $.ajax({
        url: baseURL + "vehicle/?test=", success: function (res) {
            $('#vehicleId').val(res.data);
            genaratedVehicleValue = res.data;
        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}