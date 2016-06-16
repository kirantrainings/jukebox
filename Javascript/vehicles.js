var vehcilesList = [];

function inventory() {

    var vehicle = {
        year: "",
        make: "",
        model: "",
        price: ""
    };

    var showRoomVehicles = {};
    showRoomVehicles.getAll = function () {
        return vehcilesList;
    };
    showRoomVehicles.add = function (veh) {
        vehcilesList.push(veh);
    };
    showRoomVehicles.update = function (veh) {

    };
    showRoomVehicles.delete = function (veh) {

    };
    return showRoomVehicles;
};

var manageShowRoom = inventory();
manageShowRoom.add({
    year: "2016",
    make: "Nissan",
    model: "Terrano",
    price: "15,00,000"
});
manageShowRoom.add({
    year: "2016",
    make: "Nissan",
    model: "Micra",
    price: "6,00,000"
});

var myVehicles = manageShowRoom.getAll();
console.log(myVehicles);
