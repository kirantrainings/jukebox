function createControl(ctrlWithProps) {
    var container = document.getElementById("container");
    var ctrl = document.createElement(ctrlWithProps.tag);
    ctrl.id = ctrlWithProps.id;
    ctrl.innerHTML = ctrlWithProps.innerHTML;
    ctrl.className = ctrlWithProps.className;
    ctrl.type = ctrlWithProps.type;
    ctrl.value = ctrlWithProps.value;
    container.appendChild(ctrl);
}

function getControl() {
    var ctrlWithProps = {
        tag: "",
        id: "",
        className: "",
        type: "",
        placeholder: "",
        innerHTML: "",
        value: ""
    };
    return ctrlWithProps;
}

function labelFirstName() {
    var lblCtrl = getControl();
    lblCtrl.id = "txtFirstName";
    lblCtrl.tag = "label";
    lblCtrl.innerHTML = "First Name";
    lblCtrl.className = "lbl-control";
    return lblCtrl;
}

function inputTextBox() {
    var ctrl = getControl();
    ctrl.type = "text";
    ctrl.tag = "input";
    ctrl.id = "txtFirstName";
    ctrl.value = "Welcome";
    return ctrl;
}

createControl(labelFirstName());
createControl(inputTextBox());
