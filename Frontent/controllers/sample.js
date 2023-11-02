$("#placeBookingBtn").on('click', function () {
    $.ajax({
        url: baseURL + "/bookings/place_bookings",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(bk_details),
        dataType: "json",
        success: function (res) {
            clearTextFields();
            getAllCustomers();
            alert(res.message);
        },
        error: function (error) {
            alert(JSON.parse(error.responseText).message);
        }
    });
});
var bk_details = {
    bookingId: bookingId,
    pickUpDate: pickUpDate,
    pickUpTime: pickUpTime,
    returnDate: returnDate,
    DriverRequestType: DriverRequestType
}