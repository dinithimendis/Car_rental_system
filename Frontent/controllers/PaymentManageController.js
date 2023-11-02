let baseURL = "http://localhost:8080/Backend_war";

$("#save").on('click', function () {

    let paymentID = $("#paymentId").val();
    let paymentDate = $("#paymentDate").val();
    let invoiceNo = $("#invoiceNo").val();
    let amount = $("#amount").val();
    let payment = $("#payment").val();
    let bookingID = $("#bookingId").val();


    let obj = {
        paymentId: paymentID,
        paymentDate: paymentDate,
        invoiceNo: invoiceNo,
        amount: amount,
        paymentType: payment,
        bookingDTO: {bookingID: bookingID},
    }

    $.ajax({
        url: baseURL + "/payment/save_payment",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(obj),
        dataType: "json",
        success: function (res) {
            alert(res.message);
            getAllPaymentDetails();
        },
        error: function (error) {
            var errorMessage = JSON.parse(error.responseText);
            alert(errorMessage.message);
        }
    });
});