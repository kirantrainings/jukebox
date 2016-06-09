function getManufacturer(vehicle) {
    var company = "";
    switch (vehicle) {
        case "Wagnor":
        case "Swift":
        case "Ciaz":
            company = "Maruti Suzki";
            break;
        case "C2000":
            company = "Benz"
            break;
        case "Beetel":
            company = "BMW"
            break;
        default:
            company = 'Jaguar';
            break;
    }

    return company;
}


console.log(getManufacturer())
