function createTextBox() {
    var container = document.getElementById("container");

    var control = document.createElement("input");

    control.id = "txtFirstName";
    control.type = "number";

    container.appendChild(control);
}


function createControl(tag, id, type, cssClass) {
    var ctrl = document.createElement(tag)
    ctrl.id = id;
    if (tag == 'input') {
        ctrl.type = type;
    }
    if (cssClass) {
        ctrl.className = cssClass;
    }

    return ctrl;
}

function buildHTML() {
    var container = document.getElementById("container");

    //Label Creation
    var labelFirstName =
        createControl("label", "lblFirstName", "", "lbl-control");
    labelFirstName.innerHTML = "First Name:"

    container.appendChild(labelFirstName);

    //text box 
    var txtFirstName = createControl("input", "txtFirstName", "text");
    container.appendChild(txtFirstName);




}

buildHTML();
