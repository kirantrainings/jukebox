function getCountries() {
    var countries = [{
            value: "IN",
            text: "India"
        },
        {
            value: "US",
            text: "United State"
        },
        {
            value: "UK",
            text: "United Kingdom"
        },
        {
            value: "AU",
            text: "Australia"
        }];
    return countries;
}

function addCountries() {
    //get the reference of the select box.
    var ddlCountries = document.getElementById('ddlCountries');

    //get the list of corunteis.
    var countryList = getCountries();
    for (var i = 0; i < countryList.length; i++) {
        var tag = buildOptions(countryList[i]);
        ddlCountries.appendChild(tag);
    }

}

function buildOptions(data) {
    var option = document.createElement('option');
    option.value = data.value;
    option.innerHTML = data.text;
    return option;
}

addCountries();
