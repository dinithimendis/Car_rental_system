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

$("#updateVehicle").on('click', function () {
    let vehicleId = $('#vehicleId').val();
    let numberOfPassenger = $('#numberOfPassenger').val();
    let extraKmPer = $('#extraKmPer').val();
    let registrationNo = $('#registrationNo').val();
    let vehicleColour = $('#vehicleColour').val();
    let dailyRate = $('#dailyRate').val();
    let monthlyRate = $('#monthlyRate').val();
    let vehicleAvailability = $('#vehicleAvailability').val();
    let vehicleBrand = $('#vehicleBrand').val();
    let transmissionType = $('#transmissionType').val();
    let dailyMileage = $('#dailyMileage').val();
    let monthlyMileage = $('#monthlyMileage').val();
    let fuelType = $('#fuelType').val();
    let refundableDamagedFee = $('#refundableDamagedFee').val();
    let vehicleType = $('#vehicleType').val();
    let lastServiceMileage = $('#lastServiceMileage').val();


    var vehicleObj = {
        vehicleID: vehicleId,
        numberOfPassenger: numberOfPassenger,
        extraKmPer: extraKmPer,
        registrationNo: registrationNo,
        vehicleColour: vehicleColour,
        vehiclePriceRate: {dailyRate: dailyRate, monthlyRate: monthlyRate},
        freeMileage: {dailyMileage: dailyMileage, monthlyMileage: monthlyMileage},
        vehicleAvailability: vehicleAvailability,
        vehicleBrand: vehicleBrand,
        transmissionType: transmissionType,
        fuelType: fuelType,
        refundableDamagedFee: refundableDamagedFee,
        vehicleType: vehicleType,
        lastServiceMileage: lastServiceMileage,
    }

    $.ajax({
        url: baseURL + "vehicle/update",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(vehicleObj),
        dataType: "json",
        success: function (res) {
            alert("update method invoked");
            getAllVehicle();
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
                title: 'Updated successfully !'
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
                title: 'Update Unsuccessful !'
            });
        }
    });

});

function bindRowClickEventsForVehicle() {
    $("#vehicleTableBody>tr").on('click', function () {
        $('#vehicleId').val($(this).children(":eq(0)").text());
        $('#numberOfPassenger').val($(this).children(":eq(1)").text());
        $('#extraKmPer').val($(this).children(":eq(2)").text());
        $('#registrationNo').val($(this).children(":eq(3)").text());
        $('#vehicleColour').val($(this).children(":eq(4)").text());
        $('#dailyRate').val($(this).children(":eq(5)").text());
        $('#monthlyRate').val($(this).children(":eq(6)").text());
        $('#vehicleAvailability').val($(this).children(":eq(7)").text());
        $('#vehicleBrand').val($(this).children(":eq(8)").text());
        $('#transmissionType').val($(this).children(":eq(9)").text());
        $('#dailyMileage').val($(this).children(":eq(10)").text());
        $('#monthlyMileage').val($(this).children(":eq(11)").text());
        $('#fuelType').val($(this).children(":eq(12)").text());
        $('#refundableDamagedFee').val($(this).children(":eq(13)").text());
        $('#vehicleType').val($(this).children(":eq(14)").text());
        $('#dailyMileage1').val($(this).children(":eq(15)").text());
        $('#lastServiceMileage').val($(this).children(":eq(16)").text());
    });
}

function clearTextFields(){
    $("#vehicleId").val("");
    $("#numberOfPassenger").val("");
    $("#extraKmPer").val("");
    $("#registrationNo").val("");
    $("#vehicleColour").val("");
    $("#dailyRate").val("");
    $("#monthlyRate").val("");
    $("#vehicleAvailability").val("");
    $("#vehicleBrand").val("");
    $("#transmissionType").val("");
    $("#dailyMileage").val("");
    $("#monthlyMileage").val("");
    $("#fuelType").val("");
    $("#refundableDamagedFee").val("");
    $("#vehicleType").val("");
    $("#dailyMileage1").val("");
    $("#lastServiceMileage").val("");
}

$("#deleteVehicle").on('click', function () {
    $.ajax({
        url: baseURL + "vehicle/?code=" + $("#vehicleId").val(),
        method: "delete",
        dataType: "json",
        success: function (resp) {
            console.log($("#vehicleId").val())
            getAllVehicle();
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
                title: 'Deleted successfully !'
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
                title: 'Delete Unsuccessful !'
            });
        }
    });
});

$('#vehicleId#numberOfPassenger,#extraKmPer,#registrationNo,#vehicleColour,#dailyRate,#monthlyRate,#vehicleAvailability,#vehicleBrand,#transmissionType,#dailyMileage,#monthlyMileage,#fuelType,#refundableDamagedFee,#vehicleType,#dailyMileage1,#lastServiceMileage').on('keydown', function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
    }
})

validator('#vehicleId', /^V00-00[0-9]{1,5}$/, "Your input can't be validated", '#vehicleId_lbl', '#numberOfPassenger');
validator('#numberOfPassenger', /^[0-9]{1,2}$/, "Your input can't be validated", '#no_of_passenger_lbl', '#extraKmPer');
validator('#extraKmPer', /^[0-9]{3,10}$/, "Your input can't be validated", '#extra_km_per', '#registrationNo');
validator('#registrationNo', /^REG-00[0-9]{1,5}$/, "Your input can't be validated", '#reg_no_lbl', '#vehicleColour');
validator('#vehicleColour', /^[A-z]{3,10}$/, "Your input can't be validated", '#col_lbl', '#dailyRate');
validator('#dailyRate', /^[0-9]{3,30}$/, "Your input can't be validated", '#daily_amount_lbl', '#monthlyRate');
validator('#monthlyRate', /^[0-9]{3,30}$/, "Your input can't be validated", '#monthly_amount_lbl', '#vehicleBrand');
validator('#vehicleBrand', /^[A-z]{2,12}$/, "Your input can't be validated", '#brand_lbl', '#dailyMileage');
validator('#dailyMileage', /^[0-9]{3,30}$/, "Your input can't be validated", '#daily_km_lbl', '#monthlyMileage');
validator('#monthlyMileage', /^[0-9]{3,20}$/, "Your input can't be validated", '#monthly_km_lbl', '#refundableDamagedFee');
validator('#refundableDamagedFee', /^[0-9]{3,30}$/, "Your input can't be validated", '#damage_lbl', '#dailyMileage1');
validator('#dailyMileage1', /^[0-9]{3,30}$/, "Your input can't be validated", '#service_mileage_lbl', '#vehicleMileage');
validator('#vehicleMileage', /^[0-9]{3,30}$/, "Your input can't be validated", '#last_service_lbl', '#');

$('#car1').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $('#frontImg').css({
                "background": `url(${reader.result})`, "background-size": "cover", "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})

$('#saveVehicle').on("click", function () {
    /***************************************************************/
    const frontImageFile = document.getElementById('car1');
    const imgFile = frontImageFile.files[0];
    vehicleFrontImgReader.readAsDataURL(imgFile);

    vehicleFrontImgReader.addEventListener('load', () => {
        const url = vehicleFrontImgReader.result
        localStorage.setItem((genaratedVehicleValue + "frontPhoto"), url);
    });
    /***************************************************************/
});

$('#car2').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $('#backImg').css({
                "background": `url(${reader.result})`, "background-size": "cover", "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})

$('#car3').on("change", function (e) {
    let file = e.target.files;
    if (FileReader && file && file.length) {
        let reader = new FileReader();
        reader.onload = function () {
            $('#sideImg').css({
                "background": `url(${reader.result})`, "background-size": "cover", "background-position": "center"
            });
        }
        reader.readAsDataURL(file[0]);
    }
})