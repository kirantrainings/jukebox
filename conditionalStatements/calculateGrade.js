function getSalaryBand(sal) {
    if (sal <= 10000) {
        return "user is entery level"
    } else if (sal > 10000 && sal < 20000) {
        return "user is mid level"
    } else if (sal >= 20000 && sal < 40000) {
        return "user is manager";
    } else if (sal > 40000 || sal == 4000) {
        return "I am the boss";
    } else {
        return "I don't need your response";
    }
}

console.log(getSalaryBand(10000));
console.log(getSalaryBand());
