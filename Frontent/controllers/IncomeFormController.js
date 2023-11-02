let baseURL = "http://localhost:8080/Backend_war/";

getAllByDailyRevenues();
getAllByMonthlyRevenues();
gettingRevenueByYear();

let val1;
let val2;

function getAllByDailyRevenues() {
    $.ajax({
        url: baseURL + "income/by_daily", dataType: "json", success: function (res) {
            for (let c of res.data) {
                let row = "<tr>" + "<td>" + (c[1]) + "</td>" + "<td>" + "Rs "+(c[0])+".00" + "</td>" + "</tr>";
                $("#incomeReportsDailyTable").append(row);
            }

        }, error: function (error) {
            let message = JSON.parse(error.responseText).message;
            alert(message);
        }
    });
}