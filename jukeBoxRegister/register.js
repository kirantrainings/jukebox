(function () {
    var txtFirstName = document.getElementById("txtFirstName");
    var txtPhoneNumber = document.getElementById("txtPhoneNumber");

    function bindEvents() {
        txtFirstName.addEventListener("keypress", validation.alphabetsOnly);
        txtPhoneNumber.addEventListener("keypress", validation.numbersOnly, "PhoneNumber");
    }


    bindEvents();
})();
