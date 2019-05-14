var BaseUrl = "http://awpo.co.in/api/";
var PdfBaseUrl = "http://awpo.co.in/PdfLocation/";
$(document).ready(function () {
    GetAllExamListInfo();
});
function GetAllExamListInfo() {
    $.getJSON(BaseUrl + "ExamMaterAPI/GetM_ExamMater",
        function (Data) {
            $.each(Data, function (key, val) {
                $("#ExamPatternList").append("<tr><td>" + val.ExamName + "</td><td><a href='" + PdfBaseUrl+val.PdfPath + "' target='_blank'> <i class='fa fa-download' aria-hidden='true'></i></a></td></tr>");
            });
        });
}