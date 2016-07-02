function lookupData() {
    return {
        yearList: buildYearList,
        vehicleList: buildVehicleList
    }
}

function buildYearList() {
    var years = [];
    var currentYear = new Date().getFullYear();
    for (var i = currentYear - 20; i < currentYear; i++) {
        years.push(i);
    }
    return years;
}

function buildVehicleList() {
    var vehicleList = [
        {
            make: "Maruti",
            model: "WagonR",
            year: 2012
        },
        {
            make: "Nissan",
            model: "Terrano",
            year: 2013
        },
        {
            make: "BMW",
            model: "Beetel",
            year: 2014
        },

   ];
    return vehicleList;
}
