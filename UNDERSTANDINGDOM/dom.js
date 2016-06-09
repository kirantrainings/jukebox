//document.write("<h1>Hello guys</h1>")
function domManipulation() {

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById('lastName');

    var person = {};
    person.fistName = firstName.value;
    person.lastName = lastName.value;
    console.log(person);

}

function changeValues() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById('lastName');
    firstName.value = "NBITS";
    lastName.value = "Instistute";
}

domManipulation();
