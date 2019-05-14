var BaseUrl = "http://awpo.co.in/api/";
$(document).ready(function () {
    GetAllOfficersVacanciesInfo();
});
function GetAllOfficersVacanciesInfo() {
    $.getJSON(BaseUrl + "OfficersVacanciesMasterAPI/GetT_OfficersVacanciesMaster",
        function (Data) {
            $.each(Data, function (key, val) {
                if (val.TypOfVacancy === "1") {
                   var LDate= val.LastDate.split('T');
                $("#OffersVacanciesList").append("<table class='table table-bordered table-striped table-responsive table-hover small  m-2 shadow w-100'><tr><th>Company Name </th><td>" + val.CompanyName + "</td></tr><tr><th>No of Post </th><td>" + val.NoOfPost
                    + "</td></tr><tr> <th>Post </th> <td>" + val.Post + "</td></tr> <tr><th>Salary </th><td>" + val.Salary + "</td></tr><tr> <th>Location </th> <td>" + val.Location + "</td></tr> <tr><th>QR </th><td>" + val.QR
                    + "</td></tr><tr> <th>Date Of Application </th> <td>" + val.PostedDate + "</td></tr> <tr><th>Last Date </th><td>" + LDate[0] + "</td></tr><tr> <th>Exam/Interview Date </th> <td>" + val.Exam_InterviewDate + "</td></tr> <tr><th>Remarks </th><td>" + val.Remarks
                    + "</td></tr></table>");
                }
            });
        });
};