function getAllEmployee() {
    var employees = [
        {
            empid: 100,
            name: "John",
            department: "IT",
            designation: "Manager"
        },
        {
            empid: 101,
            name: "Robert",
            department: "Sales",
            designation: "Executive"
        },
        {
            empid: 103,
            name: "Williams",
            department: "Marketing",
            designation: "Director"
        },
 ];
    return employees;
}


function getTableReference() {
    //Step 1. get the reference of the table
    var table = document.getElementById("tblEmployee");
    //step 2. Build tr TAG
    //Step3. Build the TD tag 
    // step 4 append td to tr
    // step 5 append tr to table
    //step 6. repeat 2-5 foe the list of employees.
    return table;
}
// Step 2. Building the Tr Tag.

function createTableRow() {
    var row = document.createElement("tr");
    return row;
}
//function step 3. building the column.
function createTableColumn(data) {
    var column = document.createElement("td");
    column.innerHTML = data;
    return column;
}

function buildEmployeeTable() {
    var employeeList = getAllEmployee();
    for (var i = 0; i < employeeList.length; i++) {
        var row = createTableRow();

        var id = employeeList[i].empid;
        var name = employeeList[i].name;
        var desingation = employeeList[i].designation;
        var department = employeeList[i].department;

        var idColumn = createTableColumn(id);
        var nameColumn = createTableColumn(name);
        var designationColumn = createTableColumn(desingation);
        var departmentColumn = createTableColumn(department);

        row.appendChild(idColumn);
row.appendChild(nameColumn);
row.appendChild(designationColumn);
row.appendChild(departmentColumn);

        //get the table ref and append the row to the table
        var table = getTableReference();
        table.appendChild(row);
    }
}

buildEmployeeTable();




