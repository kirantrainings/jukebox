function getEmployeeNames(data) {
    for (var i = 0; i < data.length; i++) {
        //
        console.log(i);
        console.log(data[i].name);

    }
}

var employees = [{
        name: "kiran",
        sal: 2000
    },
    {
        name: "teja",
        sal: 4000
    },
    {
        name: "ravi",
        sal: 5000
    }];

getEmployeeNames(employees);
