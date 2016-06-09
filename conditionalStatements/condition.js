function checkGender(gender) {
    // 
    if (gender == "M") {
        return "Male";
    } else if (gender == "F") {
        return "Female"
    } else {
        return "User not interested to reveal Gender";
    }
}
var fem = checkGender("F");
var male = checkGender("M");
var none = checkGender();
console.log(fem);
console.log(male);
console.log(none);
