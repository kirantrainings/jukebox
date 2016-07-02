function pageControls() {
    return {
        year: $("#ddlYear"),
        make: $("#txtVehicleMake"),
        model: $("#txtVehicleModel"),
        register: $('#btnRegister')
    }
}

function bindEvents() {
    pageControls().register.bind('click', vehicleRegistration);
    pageControls().year.bind('change', fillMakeAndModel);
}

function fillMakeAndModel() {
    var selectedYear = $(this).val();
    var vehicles = lookupData().vehicleList();
    $.each(vehicles, function (index, item) {
        if (item.year == selectedYear) {
            pageControls().make.val(item.make);
            pageControls().model.val(item.model);
        }
    })
}

function vehicleRegistration() {
    // final step
    var vehicle = {};
    vehicle.year = pageControls().year.val();
    vehicle.make = pageControls().make.val();
    vehicle.model = pageControls().model.val();
}

function bindYearList() {
    var years = lookupData().yearList();
    $.each(years, function (index, item) {
        var optionTag = $("<option>");
        optionTag.val(item);
        optionTag.text(item);
        pageControls().year.append(optionTag);
        // pageControls().year.append($("<option>").val(item).text(item));
    });
}
//initPage();

$(document).ready(function () {
    bindEvents();
    bindYearList();
    console.log($('#lblYear').next());
    console.log($('#lblYear').parent());
});
