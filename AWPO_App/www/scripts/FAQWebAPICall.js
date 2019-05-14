var BaseUrl = "http://awpo.co.in/api/";
$(document).ready(function () {
    GetAllContactInfo();
});
function GetAllContactInfo() {
    $.getJSON(BaseUrl + "FAQMaster1/GetM_FAQMaster",        
        function (Data) {
            $.each(Data, function (key, val) {
                $("#FAQList").append("<tr><td><b>Question : </b>" + val.Question + "</td></tr><tr><td><b>Answer : </b>" + val.Answer + "</td></tr>");
            });
        });
}