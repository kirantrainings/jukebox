function bookTicket(transportMode, Source, destination) {

    var ticket = {};
    return function pritTicket(numberofRooms) {
        if (transportMode == "Flight") {
            ticket.airpotCharges = 1000;
            ticket.Source = Source;
            ticket.destination = destination;
        } else if (transportMode == "Cruise") {
            ticket.numberOfRooms = numberofRooms;
            ticket.Source = Source;
            ticket.destination = destination;
        }
        return ticket;
    }
}


var flightTicket = bookTicket("Flight", "Hyderabad", "Delhi");
var cruiseTicket = bookTicket("Cruise", "Chennai", "Andaman");
var internationalFlightTicket = bookTicket("Flight", "Hyderabad", "Germany");

console.log(bookTicket("Flight", "abcd", "XYS")());
console.log(flightTicket());
console.log(bookTicket("Cruise", "Chennai", "Andaman")(2));
console.log(internationalFlightTicket());
