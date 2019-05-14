var BaseUrl = "http://awpo.co.in/api/";
$(document).ready(function () {
    GetAllContactInfo();
});
function GetAllContactInfo()
{
    $.getJSON(BaseUrl+"ContactMasterAPI/GetM_ContactMaster",
        function (Data) {
            var Count = 0;
            $.each(Data, function (key, val) {
                //if (Count === 0) {
                //    $("#HeadOfficeAddress").html(val.Address);
                //    //$("#HeadOfficeContactDetails").html(val.TelephoneNo);
                //    $("#HeadOfficeEmailIDDetails").html("<a href='mailto:"+ val.Email+"' target='_blank'>"+ val.Email +"</a>");
                //    $("#HeadOfficeWebsiteDetails").html("<a href=" + val.Website + " target='_blank'>"+ val.Website+"</a>");
                //    Count = Count + 1;
                //}
                //else {
                    $("#ContactList").append("<tr><td>" + val.PlacementNode + "</td><td>" + val.TelephoneNo + "</td><td>" + val.Email + "</td></tr>");
                //}
                });
        });
};