let baseURL = "http://localhost:8080/Backend_war/";


getAllVehicle();
const vehicleFrontImgReader = new FileReader();
let genaratedVehicleValue;
$("#saveVehicle").on('click', function () {
    saveVehicle();
});
